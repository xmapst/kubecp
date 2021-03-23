(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f4b8"],{d8e3:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-card",{attrs:{shadow:"never"}},[l("el-select",{attrs:{filterable:"",placeholder:e.$t("please_select_namespace")},on:{change:e.selectedNamespace},nativeOn:{click:function(t){return e.getNamespace(t)}},model:{value:e.namespace,callback:function(t){e.namespace=t},expression:"namespace"}},e._l(e.namespaces,(function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})})),1),e._v(" "),l("el-select",{attrs:{placeholder:e.$t("please_select_deployment"),multiple:""},on:{change:e.selecteddeployment},model:{value:e.deployment,callback:function(t){e.deployment=t},expression:"deployment"}},[l("el-option",{attrs:{label:e.$t("check_all"),value:"all"}}),e._l(e.deployments,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],2),e._v(" "),l("el-button",{nativeOn:{click:function(t){return e.getStatus(t)}}},[e._v(e._s(e.$t("enter")))]),l("br"),l("el-table",{staticClass:"app-table",attrs:{size:"medium",data:e.tableData}},[l("el-table-column",{attrs:{prop:"Pods",label:e.$t("name")}}),l("el-table-column",{attrs:{prop:"Container",label:e.$t("container")}}),l("el-table-column",{attrs:{prop:"Image",label:e.$t("image")}}),l("el-table-column",{attrs:{prop:"Tag",label:e.$t("tag")}}),l("el-table-column",{attrs:{prop:"ImagePullSecrets",label:e.$t("image_pull_secrets")}}),l("el-table-column",{attrs:{prop:"State",label:e.$t("state")}}),l("el-table-column",{attrs:{prop:"CPU",label:e.$t("cpu")}}),l("el-table-column",{attrs:{prop:"RAM",label:e.$t("ram")}}),l("el-table-column",{attrs:{prop:"OS",label:e.$t("os")}}),l("el-table-column",{attrs:{prop:"Operate",label:e.$t("operate"),width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["unix"===t.row.OS?l("el-button",{staticClass:"el-icon-s-fold",nativeOn:{click:function(l){return e.openTerminal(t.row,"sh")}}},[e._v(e._s(e.$t("sh")))]):e._e(),"windows"===t.row.OS?l("el-button",{staticClass:"el-icon-s-fold",nativeOn:{click:function(l){return e.openTerminal(t.row,"cmd")}}},[e._v(e._s(e.$t("cmd")))]):e._e(),l("span"),l("el-button",{staticClass:"el-icon-files",nativeOn:{click:function(l){return e.openFileBrowser(t.row,"/")}}},[e._v(e._s(e.$t("file_browser")))])]}}])})],1)],1),l("el-dialog",{attrs:{title:e.$t("terminal"),visible:e.dialogTerminalVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogTerminalVisible=t},close:function(t){e.dialogTerminalVisible=!1}}},[l("div",[l("span",[e._v("前端实现中")]),l("div",{attrs:{id:"terminal-container"}})])]),l("el-dialog",{attrs:{width:"80%",title:e.$t("file_browser"),visible:e.dialogFileBrowserVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFileBrowserVisible=t},close:function(t){e.dialogFileBrowserVisible=!1}}},[l("el-button",{staticClass:"el-upload el-icon-upload",staticStyle:{"font-size":"16px",float:"right"},attrs:{type:"success",round:""}},[e._v(e._s(e.$t("upload")))]),l("ul",e._l(e.headerPaths,(function(t){return l("li",{staticStyle:{float:"left","margin-right":"5px","list-style":"none"}},[l("a",{staticClass:"el-icon-folder-opened",staticStyle:{"font-size":"16px"},on:{click:function(l){return e.openFileBrowser(null,t.path)}}},[e._v(e._s(t.name))])])})),0),e._v(" "),l("span",{staticClass:"el-icon-refresh",staticStyle:{"font-size":"16px"},on:{click:function(t){return e.openFileBrowser(null,e.path)}}},[e._v(" "+e._s(e.$t("refresh")))]),l("el-table",{staticClass:"app-table",attrs:{size:"100%",data:e.fileBrowserData}},[l("el-header"),l("el-table-column",{attrs:{"min-width":"150px",prop:"Name",label:e.$t("name")},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.IsDir?l("span",{staticClass:"el-icon-folder",on:{click:function(l){return e.openFileBrowser(null,t.row.Path)}}},[e._v(" "+e._s(t.row.Name))]):l("span",{staticClass:"el-icon-files"},[e._v(" "+e._s(t.row.Name))])]}}])}),l("el-table-column",{attrs:{prop:"Size",width:"100px",label:e.$t("size")}}),l("el-table-column",{attrs:{prop:"Mode",width:"100px",label:e.$t("mode")}}),l("el-table-column",{attrs:{prop:"ModTime",label:e.$t("mod_time")}}),l("el-table-column",{attrs:{prop:"Download",label:e.$t("operate"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.IsDir?l("el-button",{staticClass:"el-icon-upload",staticStyle:{"font-size":"9px"},attrs:{type:"success",round:""}},[e._v(e._s(e.$t("upload")))]):e._e(),l("span"),l("el-button",{staticClass:"el-icon-download",staticStyle:{"font-size":"9px"},attrs:{type:"primary",round:""},on:{click:function(l){return e.download(t.row.Path)}}},[e._v(e._s(e.$t("download")))])]}}])})],1)],1)],1)},s=[],n=l("ead3");function o(e){return Object(n["a"])("/k8s/status",e)}var i=l("1764");function r(e){return Object(n["a"])("/k8s/deployment",e)}function c(e){return Object(n["a"])("/k8s/file_browser",e)}var p={data(){return{namespace:"",deployment:[],namespaces:[],tableLoading:!1,tableData:[],deployments:[],fileBrowserData:[],pods:"",container:"",path:"",headerPaths:[],dialogTerminalVisible:!1,dialogFileBrowserVisible:!1}},methods:{getNamespace(){Object(i["a"])().then(e=>{if(e){this.namespaces=[],this.deployment=[],this.deployments=[],this.tableData=[];const t=e.items;for(const e in t)this.namespaces.push(t[e].metadata.name);console.log(this.namespaces)}})},selectedNamespace(e){console.log(e),r({namespace:e}).then(e=>{if(e){const t=[];this.deployments=[],this.tableData=[];const l=e.items;for(const e in l){const a={label:l[e].metadata.name,value:l[e].metadata.name};t.push(a)}this.deployments=t,console.log(this.deployments)}})},selecteddeployment(e){console.log(e)},getStatus(){console.log(this.deployment[0],this.namespace);let e=this.deployment;if("all"===this.deployment[0]){e=[];for(const t in this.deployments)e.push(this.deployments[t].value)}o({namespace:this.namespace,deployment:e}).then(e=>{if(e){console.log(e),this.tableData=[];for(const t in e){const l=e[t].pod_name,a=e[t].containers;for(const e in a){let t={Pods:"",Container:a[e].name,Image:a[e].image,Tag:a[e].version,ImagePullSecrets:a[e].image_pull_policy,State:a[e].state,CPU:a[e].cpu,RAM:a[e].ram,OS:a[e].os};"0"===e&&(t={Pods:l,Container:a[e].name,Image:a[e].image,Tag:a[e].version,ImagePullSecrets:a[e].image_pull_policy,State:a[e].state,CPU:a[e].cpu,RAM:a[e].ram,OS:a[e].os}),this.tableData.push(t)}}}})},openTerminal(e,t){this.dialogTerminalVisible=!0,console.log(e,this.namespace,t)},openFileBrowser(e,t){if(this.dialogFileBrowserVisible=!0,console.log(e,t),void 0===t&&(t="/"),"/"===t&&null!==e&&(this.pods=e.Pods,this.container=e.Container),this.headerPaths=[],this.headerPaths.push(t),void 0!==t){let e=t.split("/"),l="";this.headerPaths=[],e.forEach((e,t)=>{console.log(t,e),0===t&&(l="/",e="/",this.headerPaths.push({name:e,path:l})),0!==t&&""!==e&&(l+=e+"/",this.headerPaths.push({name:e,path:l}))})}console.log(this.headerPaths),this.path=t,this.fileBrowserData=[],c({namespace:this.namespace,pods:this.pods,container:this.container,path:t}).then(e=>{console.log(e),this.fileBrowserData=[],void 0!==e&&(this.fileBrowserData=e)},e=>{console.log(e),alert(e.info.message)})},download(e){const t="/api/k8s/download?namespace="+this.namespace+"&pod_name="+this.pods+"&container_name="+this.container+"&dest_path="+e,l=new XMLHttpRequest;l.open("GET",t,!0),l.responseType="blob",l.setRequestHeader("Content-type","application/json;charset=UTF-8"),l.onload=function(){if(200===this.status){let e=l.response,t=document.createElement("a");t.download=this.getResponseHeader("X-File-Name"),t.style.display="none";let a=new Blob([e]);t.href=URL.createObjectURL(a),document.body.appendChild(t),t.click(),document.body.removeChild(t)}},l.send()},handleClose(e){this.$confirm("确认关闭？").then(t=>{e()}).catch(e=>{})}},watch:{deployment:function(e,t){let l=e.indexOf("all"),a=t.indexOf("all");-1!==l&&-1===a&&e.length>1?this.deployment=["all"]:-1!==l&&-1!==a&&e.length>1&&this.deployment.splice(e.indexOf("all"),1)}}},d=p,u=l("2877"),m=Object(u["a"])(d,a,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21f4b8.904f2d73.js.map