(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cdd0272"],{1048:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{attrs:{shadow:"never"}},[a("div",[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:t.$t("please_select_namespace")},on:{change:t.selectedNamespace},nativeOn:{click:function(e){return t.getNamespace(e)}},model:{value:t.namespace,callback:function(e){t.namespace=e},expression:"namespace"}},t._l(t.namespaces,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.$t("please_select_pod"),filterable:"",multiple:""},model:{value:t.pod,callback:function(e){t.pod=e},expression:"pod"}},[a("el-option",{attrs:{label:t.$t("check_all"),value:"all"}}),t._l(t.pods,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],2)],1),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-input",{staticStyle:{width:"100%",height:"40px"},attrs:{autocomplete:"off",placeholder:t.$t("please_input_dest_path")},model:{value:t.destPath,callback:function(e){t.destPath=e},expression:"destPath"}})],1),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-dropdown",{staticClass:"avatar-container",staticStyle:{height:"36px",float:"right","margin-bottom":"10px"},attrs:{type:"success",trigger:"click"}},[a("div",{staticClass:"avatar-wrapper"},[a("el-button",{staticClass:"el-icon-upload",staticStyle:{width:"90px",height:"30px","margin-right":"6px","padding-top":"7px","padding-left":"14px"},attrs:{type:"success",round:"",size:"medium"}},[t._v(" "+t._s(t.$t("upload"))+" "),a("i",{staticClass:"el-icon-caret-bottom"})])],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("span",{staticClass:"fake-file-btn"},[t._v(" "+t._s(t.$t("upload_file"))+" "),a("input",{staticStyle:{display:"block"},attrs:{type:"file",name:"files",multiple:"true"},on:{change:function(e){return t.uploadFileOrDir(e)}}})])]),a("el-dropdown-item",{attrs:{divided:""}},[a("span",{staticClass:"fake-file-btn"},[t._v(" "+t._s(t.$t("upload_dir"))+" "),a("input",{staticStyle:{display:"block"},attrs:{type:"file",name:"files",webkitdirectory:"",mozdirectory:"",accept:"*/*"},on:{change:function(e){return t.uploadFileOrDir(e)}}})])])],1)],1)],1)])],1)},l=[],i=a("1764"),n=a("f492"),o=a("ead3");function c(t,e,a){return Object(o["b"])("/k8s/multi_upload",t,e,a)}var p={data(){return{namespace:"",pod:[],namespaces:[],pods:[],destPath:"",fileList:[]}},methods:{getNamespace(){Object(i["a"])().then(t=>{if(t){this.namespaces=[],this.pod=[],this.pods=[];const e=t.items;for(const t in e)this.namespaces.push(e[t].metadata.name);console.log(this.namespaces)}})},selectedNamespace(){Object(n["a"])({namespace:this.namespace}).then(t=>{if(t){const e=[];this.pod=[],this.pods=[];const a=t.items;for(const t in a){const s={label:a[t].metadata.name,value:a[t].metadata.name};e.push(s)}this.pods=e,console.log(this.pods)}})},uploadFileOrDir(t){const e=t.target.files;if(0===e.length)return void(t.target.value="");let a=this.pod;"all"===a[0]&&(a=this.pods);const s=new FormData;for(let l=0;l<e.length;l++)s.append("files",e[l]);c(s,{namespace:this.namespace,pod_name:a,dest_path:this.destPath},{"Content-Type":"multipart/form-data"}).then(t=>{void 0!==t.failure?alert(t.failure):alert(t.success)},t=>{alert(t.info.message)}),t.target.value=""}},watch:{pod:function(t,e){let a=t.indexOf("all"),s=e.indexOf("all");-1!==a&&-1===s&&t.length>1?this.pod=["all"]:-1!==a&&-1!==s&&t.length>1&&this.pod.splice(t.indexOf("all"),1)}}},r=p,d=(a("2000"),a("2877")),u=Object(d["a"])(r,s,l,!1,null,null,null);e["default"]=u.exports},2e3:function(t,e,a){"use strict";a("87e7")},"87e7":function(t,e,a){},f492:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var s=a("ead3");function l(t){return Object(s["a"])("/k8s/pods",t)}}}]);
//# sourceMappingURL=chunk-9cdd0272.d795746a.js.map