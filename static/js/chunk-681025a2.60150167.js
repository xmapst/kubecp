(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-681025a2"],{2962:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=3,a=32;function r(e){var t=e,n=["Windows","Win16","Win32","WinCE"].indexOf(navigator.platform)>=0;n&&t.on("linefeed",(function(){var e=t._core.buffer.lines.get(t._core.buffer.ybase+t._core.buffer.y-1),n=e.get(t.cols-1);if(n[o]!==a){var r=t._core.buffer.lines.get(t._core.buffer.ybase+t._core.buffer.y);r.isWrapped=!0}}))}function s(e){e.prototype.winptyCompatInit=function(){r(this)}}t.winptyCompatInit=r,t.apply=s},"95db":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="(https?:\\/\\/)",a="[\\da-z\\.-]+",r="[^\\da-z\\.-]+",s="("+a+")",i="([a-z\\.]{2,6})",l="((\\d{1,3}\\.){3}\\d{1,3})",c="(localhost)",d="(:\\d{1,5})",u="(("+s+"\\."+i+")|"+l+"|"+c+")"+d+"?",p="(\\/[\\/\\w\\.\\-%~:]*)*([^:\\s])",f="[0-9\\w\\[\\]\\(\\)\\/\\?\\!#@$%&'*+,:;~\\=\\.\\-]*",h="(\\?"+f+")?",m="(#"+f+")?",_="[^\\/\\w\\.\\-%]+",v=u+p+h+m,g="(?:^|"+r+")(",y=")($|"+_+")",b=new RegExp(g+o+v+y);function w(e,t){window.open(t,"_blank")}function k(e,t,n){void 0===t&&(t=w),void 0===n&&(n={}),n.matchIndex=1,e.registerLinkMatcher(b,t,n)}function B(e){e.prototype.webLinksInit=function(e,t){k(this,e,t)}}t.webLinksInit=k,t.apply=B},c554:function(e,t,n){"use strict";function o(e){if(!e.element.parentElement)return null;var t=window.getComputedStyle(e.element.parentElement),n=parseInt(t.getPropertyValue("height")),o=Math.max(0,parseInt(t.getPropertyValue("width"))),a=window.getComputedStyle(e.element),r={top:parseInt(a.getPropertyValue("padding-top")),bottom:parseInt(a.getPropertyValue("padding-bottom")),right:parseInt(a.getPropertyValue("padding-right")),left:parseInt(a.getPropertyValue("padding-left"))},s=r.top+r.bottom,i=r.right+r.left,l=n-s,c=o-i-e._core.viewport.scrollBarWidth,d={cols:Math.floor(c/e._core.renderer.dimensions.actualCellWidth),rows:Math.floor(l/e._core.renderer.dimensions.actualCellHeight)};return d}function a(e){var t=o(e);t&&(e.rows===t.rows&&e.cols===t.cols||(e._core.renderer.clear(),e.resize(t.cols,t.rows)))}function r(e){e.prototype.proposeGeometry=function(){return o(this)},e.prototype.fit=function(){a(this)}}Object.defineProperty(t,"__esModule",{value:!0}),t.proposeGeometry=o,t.fit=a,t.apply=r},f105:function(e,t,n){"use strict";function o(e,t,n,o){var s,i=e;function l(e,t){o?i.__pushToBuffer(e||t):i.write(e||t)}n="undefined"===typeof n||n,i.__socket=t,i.__flushBuffer=function(){i.write(i.__attachSocketBuffer),i.__attachSocketBuffer=null},i.__pushToBuffer=function(e){i.__attachSocketBuffer?i.__attachSocketBuffer+=e:(i.__attachSocketBuffer=e,setTimeout(i.__flushBuffer,10))},i.__getMessage=function(e){var t;if("object"===typeof e.data)if(s||(s=new TextDecoder),e.data instanceof ArrayBuffer)t=s.decode(e.data),l(t);else{var n=new FileReader;n.addEventListener("load",(function(){t=s.decode(n.result),l(t)})),n.readAsArrayBuffer(e.data)}else{if("string"!==typeof e.data)throw Error('Cannot handle "'+typeof e.data+'" websocket message.');l(e.data)}},i.__sendData=function(e){1===t.readyState&&t.send(e)},i._core.register(a(t,"message",i.__getMessage)),n&&i._core.register(i.addDisposableListener("data",i.__sendData)),i._core.register(a(t,"close",(function(){return r(i,t)}))),i._core.register(a(t,"error",(function(){return r(i,t)})))}function a(e,t,n){return e.addEventListener(t,n),{dispose:function(){n&&(e.removeEventListener(t,n),n=null)}}}function r(e,t){var n=e;n.off("data",n.__sendData),t="undefined"===typeof t?n.__socket:t,t&&t.removeEventListener("message",n.__getMessage),delete n.__socket}function s(e){e.prototype.attach=function(e,t,n){o(this,e,t,n)},e.prototype.detach=function(e){r(this,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.attach=o,t.detach=r,t.apply=s},f492:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("ead3");function a(e){return Object(o["a"])("/k8s/pods",e)}},fe80:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{attrs:{shadow:"never"}},[n("el-select",{attrs:{filterable:"",placeholder:e.$t("please_select_namespace")},on:{change:e.selectedNamespace},nativeOn:{click:function(t){return e.getNamespace(t)}},model:{value:e.namespace,callback:function(t){e.namespace=t},expression:"namespace"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),e._v(" "),n("el-select",{attrs:{placeholder:e.$t("please_select_pod")},on:{change:e.selectedPod},model:{value:e.pod,callback:function(t){e.pod=t},expression:"pod"}},e._l(e.pods,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),n("el-select",{attrs:{placeholder:e.$t("please_select_container")},model:{value:e.container,callback:function(t){e.container=t},expression:"container"}},e._l(e.containers,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),n("el-select",{attrs:{placeholder:e.$t("please_select_shell")},model:{value:e.shell,callback:function(t){e.shell=t},expression:"shell"}},e._l(e.shells,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),n("el-button",{nativeOn:{click:function(t){return e.openTerminal(t)}}},[e._v(e._s(e.$t("enter")))])],1),n("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"terminal-container"}})],1)},a=[],r=n("1764"),s=n("f492"),i=n("59bf"),l=n("c554"),c=n("f105"),d=n("2962"),u=n("95db"),p={data(){return{namespace:"",pod:"",container:"",shell:"",namespaces:[],pods:[],containers:[],shells:[{label:"sh",value:"sh"},{label:"bash",value:"bash"},{label:"cmd",value:"cmd"}]}},methods:{getNamespace(){Object(r["a"])().then(e=>{if(e){this.namespaces=[],this.pod="",this.pods=[],this.container="",this.containers=[],this.shell="";var t=e.items;for(var n in t)this.namespaces.push(t[n].metadata.name);console.log(this.namespaces)}})},selectedNamespace(){Object(s["a"])({namespace:this.namespace}).then(e=>{if(e){var t=[];this.pod="",this.pods=[],this.container="",this.containers=[];var n=e.items;for(var o in n){var a={label:n[o].metadata.name,value:n[o].metadata.name};t.push(a)}this.pods=t,console.log(this.pods)}})},selectedPod(){Object(s["a"])({namespace:this.namespace,pod:this.pod}).then(e=>{if(e){console.log(e);var t=[];this.container="",this.containers=[];var n=e.spec.containers;for(var o in n){var a={label:n[o].name,value:n[o].name};t.push(a)}this.containers=t,console.log(this.containers)}})},openTerminal(){console.log(this.ws),document.getElementById("terminal-container").innerHTML="",document.getElementById("terminal-container").style.height=window.innerHeight+"px",document.getElementById("terminal-container").style.width=window.innerWidth+"px";var e="ws://"+window.location.host+"/api/k8s/terminal?namespace="+this.namespace+"&pods="+this.pod+"&container="+this.container+"&shell="+this.shell;i["Terminal"].applyAddon(l),i["Terminal"].applyAddon(c),i["Terminal"].applyAddon(d),i["Terminal"].applyAddon(u);var t=new i["Terminal"]({cursorBlink:!0});t.open(document.getElementById("terminal-container")),t.fit(),t.winptyCompatInit(),t.webLinksInit(),t.focus();var n=new WebSocket(e);n.onopen=function(e){console.log(e),console.log("onopen")},n.onclose=function(e){console.log(e),console.log("onclose")},n.onmessage=function(e){console.log(e),t.write(e.data)},n.onerror=function(e){console.log(e),console.log("onerror")},window.addEventListener("resize",(function(){t.fit();var e={type:"resize",rows:t.rows,cols:t.cols};n.send(JSON.stringify(e))})),t.on("data",(function(e){var t={type:"input",input:e};n.send(JSON.stringify(t))}))}}},f=p,h=n("2877"),m=Object(h["a"])(f,o,a,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-681025a2.60150167.js.map