(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5b10266"],{1048:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{attrs:{shadow:"never"}},[a("div",[a("el-select",{attrs:{filterable:"",placeholder:e.$t("please_select_namespace")},on:{change:e.selectedNamespace},nativeOn:{click:function(t){return e.getNamespace(t)}},model:{value:e.namespace,callback:function(t){e.namespace=t},expression:"namespace"}},e._l(e.namespaces,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1),e._v(" "),a("el-select",{attrs:{placeholder:e.$t("please_select_pod"),filterable:"",multiple:""},model:{value:e.pod,callback:function(t){e.pod=t},expression:"pod"}},[a("el-option",{attrs:{label:e.$t("check_all"),value:"all"}}),e._l(e.pods,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],2),e._v(" "),a("el-input",{staticStyle:{width:"193px",height:"40px"},attrs:{autocomplete:"off",placeholder:e.$t("please_input_dest_path")},model:{value:e.destPath,callback:function(t){e.destPath=t},expression:"destPath"}})],1),e._v(" "),a("div",[a("el-upload",{staticStyle:{display:"inline-block"},attrs:{action:"",multiple:"","file-list":e.fileList,"show-file-list":!1,"on-change":e.fileChange,"on-remove":e.fileRemove,"auto-upload":!1}},[a("el-button",{attrs:{type:"primary",plain:""}},[a("i",{staticClass:"el-icon-upload el-icon--right"}),e._v(e._s(e.$t("select_file")))])],1),a("el-button",{staticStyle:{"margin-left":"10px","vertical-align":"top"},attrs:{type:"success",plain:""},on:{click:e.submitUpload}},[e._v(e._s(e.$t("upload_all")))])],1)])],1)},l=[],i=a("1764"),n=a("f492"),o=a("ead3");function c(e,t,a){return Object(o["b"])("/k8s/multi_upload",e,t,a)}var p={data(){return{namespace:"",pod:[],namespaces:[],pods:[],destPath:"",fileList:[]}},methods:{getNamespace(){Object(i["a"])().then(e=>{if(e){this.namespaces=[],this.pod=[],this.pods=[];const t=e.items;for(const e in t)this.namespaces.push(t[e].metadata.name);console.log(this.namespaces)}})},selectedNamespace(){Object(n["a"])({namespace:this.namespace}).then(e=>{if(e){const t=[];this.pod=[],this.pods=[];const a=e.items;for(const e in a){const s={label:a[e].metadata.name,value:a[e].metadata.name};t.push(s)}this.pods=t,console.log(this.pods)}})},fileChange(e,t){this.fileList=t},fileRemove(e,t){this.fileList=t},submitUpload(){console.log("this.fileList",this.fileList);let e=new FormData;this.fileList.forEach(t=>{e.append("files",t.raw)});var t=this.pod[0];if("all"===this.pod[0]){t="";for(const e in this.pods)t.push(this.pods[e].value)}else for(const a in this.pod)t.push(this.pod[a].value);c(e,{namespace:this.namespace,pod_name:t,dest_path:this.destPath},{"Content-Type":"multipart/form-data"}).then(e=>{void 0!==e.failure?alert(e.failure):alert(e.success)},e=>{alert(e.info.message)})}},watch:{pod:function(e,t){let a=e.indexOf("all"),s=t.indexOf("all");-1!==a&&-1===s&&e.length>1?this.pod=["all"]:-1!==a&&-1!==s&&e.length>1&&this.pod.splice(e.indexOf("all"),1)}}},d=p,r=a("2877"),u=Object(r["a"])(d,s,l,!1,null,null,null);t["default"]=u.exports},f492:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var s=a("ead3");function l(e){return Object(s["a"])("/k8s/pods",e)}}}]);
//# sourceMappingURL=chunk-c5b10266.3a8758c5.js.map