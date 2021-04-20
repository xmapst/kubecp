package file_browser

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"kubefilebrowser/apis"
	"kubefilebrowser/utils"
	"kubefilebrowser/utils/logs"
)

type CreateBody struct {
	Content string `json:"content,omitempty"`
}

// @Summary CreateFile
// @description 容器文件浏览器 - 创建文件
// @Tags FileBrowser
// @Param namespace query FileBrowserQuery true "namespace"
// @Param pods query FileBrowserQuery true "Pod名称"
// @Param container query FileBrowserQuery true "容器名称"
// @Param path query FileBrowserQuery true "路径"
// @Param content query FileBrowserQuery false "内容"
// @Success 200 {object} apis.JSONResult
// @Failure 500 {object} apis.JSONResult
// @Router /api/file_browser/create_file [post]
func CreateFile(c *gin.Context) {
	render := apis.Gin{C: c}
	var query = &FileBrowserQuery{
		Path: "/",
	}
	if err := c.ShouldBindQuery(query); err != nil {
		logs.Error(err)
		render.SetError(utils.CODE_ERR_PARAM, err)
		return
	}

	query.Command = []string{"/tools/kf_tools", "touch", query.Path}
	query.Stdin = c.Request.Body
	bs, err := query.fileBrowser()
	if err != nil {
		render.SetError(utils.CODE_ERR_PARAM, err)
		return
	}
	var res []utils.File
	if err := json.Unmarshal(bs, &res); err != nil {
		logs.Error(err)
		render.SetError(utils.CODE_ERR_APP, err)
		return
	}
	render.SetJson(res)
}

// @Summary CreateDir
// @description 容器文件浏览器 - 创建目录
// @Tags FileBrowser
// @Param namespace query FileBrowserQuery true "namespace"
// @Param pods query FileBrowserQuery true "Pod名称"
// @Param container query FileBrowserQuery true "容器名称"
// @Param path query FileBrowserQuery true "路径"
// @Success 200 {object} apis.JSONResult
// @Failure 500 {object} apis.JSONResult
// @Router /api/file_browser/create_dir [post]
func CreateDir(c *gin.Context) {
	render := apis.Gin{C: c}
	var query = &FileBrowserQuery{}
	if err := c.ShouldBindQuery(query); err != nil {
		logs.Error(err)
		render.SetError(utils.CODE_ERR_PARAM, err)
		return
	}
	query.Command = []string{"/tools/kf_tools", "mkdir", query.Path}
	bs, err := query.fileBrowser()
	if err != nil {
		render.SetError(utils.CODE_ERR_PARAM, err)
		return
	}
	var res []utils.File
	if err := json.Unmarshal(bs, &res); err != nil {
		logs.Error(err)
		render.SetError(utils.CODE_ERR_APP, err)
		return
	}
	render.SetJson(res)
}