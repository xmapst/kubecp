package command

import (
	"archive/zip"
	"fmt"
	"io"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(zipCmd)
}

// zipCmd represents the zip command
var zipCmd = &cobra.Command{
	Use:   "zip",
	Short: "The default action is to add or replace zipfile entries from list",
	Args:  cobra.MinimumNArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		zw := zip.NewWriter(os.Stdout)
		defer func() {
			// 检测一下是否成功关闭
			if err := zw.Close(); err != nil {
				_, _ = fmt.Fprint(os.Stderr, err.Error())
			}
		}()
		var wg sync.WaitGroup
		for _, p := range args {
			if !fileOrPathExist(p) {
				_, _ = fmt.Fprintf(os.Stderr, "%s does not exist", p)
				continue
			}
			wg.Add(1)
			go func(wg *sync.WaitGroup, s string, z *zip.Writer) {
				defer wg.Done()
				makeZip(s, z)

			}(&wg, p, zw)
		}
		wg.Wait()
	},
}

// 下面来将文件写入 zw ，因为有可能会有很多个目录及文件，所以递归处理
func makeZip(inFilePath string, zw *zip.Writer) {
	inFilePath = strings.Replace(inFilePath, "\\", "/", -1)
	_inFilePath := strings.Split(inFilePath, ":")
	if len(_inFilePath) >= 2 {
		inFilePath = strings.Join(_inFilePath[1:], ":")
	}
	files, err := ioutil.ReadDir(inFilePath)
	if err != nil {
		file, err := os.Stat(inFilePath)
		if err != nil {
			_, _ = fmt.Fprintln(os.Stderr, err)
		}
		files = append(files, file)
	}

	for _, file := range files {
		// 软链接处理
		isDir := file.IsDir()
		if file.Mode()&os.ModeSymlink != 0 {
			_f, err := os.Stat(filepath.Join(inFilePath, file.Name()))
			if err == nil {
				isDir = _f.IsDir()
			}
		}
		if !file.IsDir() && !isDir {
			zipWriteName := strings.Replace(inFilePath, "/", "", 1) + "/" + file.Name()
			dat, err := os.Open(inFilePath + "/" + file.Name())
			if err != nil {
				zipWriteName = strings.Replace(inFilePath, "/", "", 1)
				dat, err = os.Open(inFilePath)
				if err != nil {
					_, _ = fmt.Fprintln(os.Stderr, err)
					continue
				}
			}
			// Add some files to the archive.
			fw, err := zw.Create(zipWriteName)
			if err != nil {
				_, _ = fmt.Fprintln(os.Stderr, err)
				continue
			}
			_, err = io.Copy(fw, dat)
			if err != nil {
				_, _ = fmt.Fprintln(os.Stderr, err)
			}
		} else {
			// Recurse
			var newBase string
			_p := strings.Split(inFilePath, "/")
			if _p[len(_p)-1] == file.Name() {
				newBase = inFilePath + "/"
			} else {
				newBase = inFilePath + "/" + file.Name()
			}
			makeZip(newBase, zw)
		}
	}
}

func fileOrPathExist(filename string) bool {
	_, err := os.Stat(filename)
	return err == nil || os.IsExist(err)
}
