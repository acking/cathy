/* Copyright (c) 2010 Baidu */
var baidu=baidu||{version:"1-1-1"};baidu.guid="$BAIDU$";window[baidu.guid]=window[baidu.guid]||{};baidu.string=baidu.string||{};
baidu.string.filterFormat=function(d,a){var c=Array.prototype.slice.call(arguments,1),f=Object.prototype.toString;if(c.length){c=c.length==1?(a!==null&&(/\[object Array\]|\[object Object\]/.test(f.call(a)))?a:c):c;
return d.replace(/#\{(.+?)\}/g,function(h,l){var n,k,j,g,m;if(!c){return""}n=l.split("|");k=c[n[0]];if("[object Function]"==f.call(k)){k=k(n[0])
}for(j=1,g=n.length;j<g;++j){m=baidu.string.filterFormat[n[j]];if("[object Function]"==f.call(m)){k=m(k)}}return(("undefined"==typeof k||k===null)?"":k)
})}return d};baidu.string.filterFormat.toInt=function(a){return parseInt(a,10)||0};baidu.string.filterFormat.i=baidu.string.filterFormat.toInt;
baidu.array=baidu.array||{};baidu.array.filter=function(j,g){var d=[],c=0,a=j.length,h,f;if("function"==typeof g){for(f=0;
f<a;f++){h=j[f];if(true===g.call(j,h,f)){d[c++]=h}}}return d};baidu.swf=baidu.swf||{};baidu.swf.getMovie=function(a){return document[a]||window[a]
};baidu.event=baidu.event||{};baidu.event._unload=function(){var d=baidu.event._listeners,a=d.length,c=!!window.removeEventListener,g,f;
while(a--){g=d[a];if(g[1]=="unload"){continue}f=g[0];if(f.removeEventListener){f.removeEventListener(g[1],g[3],false)}else{if(f.detachEvent){f.detachEvent("on"+g[1],g[3])
}}}if(c){window.removeEventListener("unload",baidu.event._unload,false)}else{window.detachEvent("onunload",baidu.event._unload)
}};if(window.attachEvent){window.attachEvent("onunload",baidu.event._unload)}else{window.addEventListener("unload",baidu.event._unload,false)
}baidu.event._listeners=baidu.event._listeners||[];baidu.dom=baidu.dom||{};baidu.dom._g=function(a){if("string"==typeof a||a instanceof String){return document.getElementById(a)
}return a};baidu._g=baidu.dom._g;baidu.event.un=function(d,f,h){d=baidu.dom._g(d);f=f.replace(/^on/i,"");var c=baidu.event._listeners,a=c.length,j=!h,g;
while(a--){g=c[a];if(g[1]===f&&g[0]===d&&(j||g[2]===h)){if(d.removeEventListener){d.removeEventListener(f,g[3],false)}else{if(d.detachEvent){d.detachEvent("on"+f,g[3])
}}c.splice(a,1)}}return d};baidu.un=baidu.event.un;baidu.lang=baidu.lang||{};baidu.lang.guid=function(){return"TANGRAM__"+(window[baidu.guid]._counter++).toString(36)
};window[baidu.guid]._counter=window[baidu.guid]._counter||1;window[baidu.guid]._instances=window[baidu.guid]._instances||{};
baidu.lang.Class=function(a){this.guid=a||baidu.lang.guid();window[baidu.guid]._instances[this.guid]=this};window[baidu.guid]._instances=window[baidu.guid]._instances||{};
baidu.lang.Class.prototype.dispose=function(){delete window[baidu.guid]._instances[this.guid];for(var a in this){if(typeof this[a]!="function"){delete this[a]
}}this.disposed=true};baidu.lang.Class.prototype.toString=function(){return"[object "+(this._className||"Object")+"]"};baidu.page=baidu.page||{};
baidu.page.getWidth=function(){var f=document,a=f.body,d=f.documentElement,c=f.compatMode=="BackCompat"?a:f.documentElement;
return Math.max(d.scrollWidth,a.scrollWidth,c.clientWidth)};baidu.ui=baidu.ui||{};baidu.dom.g=function(a){if("string"==typeof a||a instanceof String){return document.getElementById(a)
}else{if(a&&a.nodeName&&(a.nodeType==1||a.nodeType==9)){return a}}return null};baidu.g=baidu.G=baidu.dom.g;(function(){var a=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");
baidu.string.trim=function(c){return String(c).replace(a,"")}})();baidu.trim=baidu.string.trim;baidu.dom.addClass=function(a,c){a=baidu.dom.g(a);
a.className+=" "+c;return a};baidu.addClass=baidu.dom.addClass;baidu.lang.Event=function(a,c){this.type=a;this.returnValue=true;
this.target=c||null;this.currentTarget=null};baidu.lang.Class.prototype.addEventListener=function(f,d,c){if(typeof d!="function"){return
}!this.__listeners&&(this.__listeners={});var a=this.__listeners,g;if(typeof c=="string"&&c){if(/[^\w\-]/.test(c)){throw ("nonstandard key:"+c)
}else{d.hashCode=c;g=c}}f.indexOf("on")!=0&&(f="on"+f);typeof a[f]!="object"&&(a[f]={});g=g||baidu.lang.guid();d.hashCode=g;
a[f][g]=d};baidu.lang.Class.prototype.removeEventListener=function(d,c){if(typeof c=="function"){c=c.hashCode}else{if(typeof c!="string"){return
}}!this.__listeners&&(this.__listeners={});d.indexOf("on")!=0&&(d="on"+d);var a=this.__listeners;if(!a[d]){return}a[d][c]&&delete a[d][c]
};baidu.lang.Class.prototype.dispatchEvent=function(f,a){if("string"==typeof f){f=new baidu.lang.Event(f)}!this.__listeners&&(this.__listeners={});
a=a||{};for(var d in a){typeof f[d]=="undefined"&&(f[d]=a[d])}var d,c=this.__listeners,g=f.type;f.target=f.target||this;f.currentTarget=this;
g.indexOf("on")!=0&&(g="on"+g);typeof this[g]=="function"&&this[g].apply(this,arguments);if(typeof c[g]=="object"){for(d in c[g]){c[g][d].apply(this,arguments)
}}return f.returnValue};baidu.object=baidu.object||{};baidu.object.extend=function(d,a){for(var c in a){if(a.hasOwnProperty(c)){d[c]=a[c]
}}return d};baidu.extend=baidu.object.extend;baidu.ui.provide=function(c,d){var a=c.prototype.uiType;if(!baidu.ui[a][d]){baidu.ui[a][d]=function(){var g=arguments.length,h=arguments[g-1],f=[].slice.call(arguments,0,g-1);
var j=new baidu.ui[a][a.replace(/\b\w+\b/g,function(k){return k.substring(0,1).toUpperCase()+k.substring(1)})](h);return j[d].apply(j,f)
}}};(function(){var a={id:"",getId:function(c){var f=this,d;d="tangram-"+f.uiType+"--"+(f.id?f.id:f.guid);return c?d+c:d},getClass:function(d){var h=this,g=h.uiType.toLowerCase(),f=h.classPrefix||"tangram-"+g,c=h.skin;
if(d){f+="-"+d;c+="-"+d}if(h.skin){f+=" "+c}return f},getMain:function(){return baidu.g(this.mainId)},getBody:function(){return baidu.g(this.getId())
},uiType:"",addons:[],getCallRef:function(){return"window[baidu.guid]._instances['"+this.guid+"']"},getCallString:function(g){var f=0,d=Array.prototype.slice.call(arguments,1),c=d.length;
for(;f<c;f++){if(typeof d[f]=="string"){d[f]="'"+d[f]+"'"}}return this.getCallRef()+"."+g+"("+d.join(",")+");"},renderMain:function(d){var g=this,f=0,c;
if(g.getMain()){return}d=baidu.g(d);if(!d){d=document.createElement("div");document.body.appendChild(d);d.style.position="absolute";
d.className=g.getClass("main")}if(!d.id){d.id=g.getId("main")}g.mainId=d.id;d.setAttribute("data-guid",g.guid);if(g.decorator){for(c=g.decorator.length;
f<c;f++){baidu.ui.decorator[g.decorator[f]](this)}}return d}};baidu.ui.UIBase=a;baidu.ui.create=function(f,m){m=m||{};var k=m.superClass||baidu.lang.Class,g,d,l=function(n){var o=this;
n=n||{};k.call(o,n.superClass?n:(n.guid?n.guid:""));baidu.object.extend(o,l.options);baidu.object.extend(o,n);for(g in baidu.ui.behavior){if(typeof o[g]!="undefined"){baidu.object.extend(o,baidu.ui.behavior[g]);
baidu.ui.behavior[g].call(o)}}f.apply(o,arguments);for(g=0,d=l.addons.length;g<d;g++){l.addons[g](o)}};var c=function(){},j=f.prototype;
c.prototype=k.prototype;var h=l.prototype=new c();for(var g in j){h[g]=j[g]}typeof m.className=="string"&&(h._className=m.className);
h.constructor=j.constructor;for(g in a){h[g]=a[g]}l.extend=function(o){for(var n in o){l.prototype[n]=o[n]}return l};l.addons=[];
l.register=function(n){if(typeof n=="function"){l.addons.push(n)}};l.options={};return l}})();baidu.page.getViewWidth=function(){var c=document,a=c.compatMode=="BackCompat"?c.body:c.documentElement;
return a.clientWidth};baidu.page.getViewHeight=function(){var c=document,a=c.compatMode=="BackCompat"?c.body:c.documentElement;
return a.clientHeight};baidu.page.getScrollLeft=function(){var a=document;return a.documentElement.scrollLeft||a.body.scrollLeft
};baidu.page.getScrollTop=function(){var a=document;return a.documentElement.scrollTop||a.body.scrollTop};baidu.event.on=function(c,f,g){f=f.replace(/^on/i,"");
c=baidu.dom._g(c);var d=function(h){g.call(c,h)},a=baidu.event._listeners;a[a.length]=[c,f,g,d];if(c.addEventListener){c.addEventListener(f,d,false)
}else{if(c.attachEvent){c.attachEvent("on"+f,d)}}return c};baidu.on=baidu.event.on;baidu.browser=baidu.browser||{};if(/msie (\d+\.\d)/i.test(navigator.userAgent)){baidu.ie=baidu.browser.ie=document.documentMode||parseFloat(RegExp["\x241"])
}baidu.dom.remove=function(a){a=baidu.dom._g(a);(tmpEl=a.parentNode)&&tmpEl.removeChild(a)};baidu.dom._styleFixer=baidu.dom._styleFixer||{};
baidu.dom._styleFilter=baidu.dom._styleFilter||[];baidu.dom._styleFilter.filter=function(c,g,h){for(var a=0,f=baidu.dom._styleFilter,d;
d=f[a];a++){if(d=d[h]){g=d(c,g)}}return g};baidu.string.toCamelCase=function(a){if(a.indexOf("-")<0&&a.indexOf("_")<0){return a
}return a.replace(/[-_][^-_]/g,function(c){return c.charAt(1).toUpperCase()})};baidu.dom.setStyle=function(d,c,f){var g=baidu.dom,a;
d=g.g(d);c=baidu.string.toCamelCase(c);if(a=g._styleFilter){f=a.filter(c,f,"set")}a=g._styleFixer[c];(a&&a.set)?a.set(d,f):(d.style[a||c]=f);
return d};baidu.setStyle=baidu.dom.setStyle;baidu.dom.setStyles=function(c,d){c=baidu.dom.g(c);for(var a in d){baidu.dom.setStyle(c,a,d[a])
}return c};baidu.setStyles=baidu.dom.setStyles;baidu.string.format=function(d,a){d=String(d);var c=Array.prototype.slice.call(arguments,1),f=Object.prototype.toString;
if(c.length){c=c.length==1?(a!==null&&(/\[object Array\]|\[object Object\]/.test(f.call(a)))?a:c):c;return d.replace(/#\{(.+?)\}/g,function(g,j){var h=c[j];
if("[object Function]"==f.call(h)){h=h(j)}return("undefined"==typeof h?"":h)})}return d};baidu.format=baidu.string.format;
baidu.ui.dialog=baidu.ui.dialog||{instances:{}};baidu.ui.dialog.Dialog=baidu.ui.create(function(a){}).extend({uiType:"DIALOG",width:"",height:"",top:"auto",left:"auto",zIndex:1000,titleText:"",contentText:"",onbeforeclose:function(){return true
},tplDOM:"<div id='#{id}' class='#{class}'>#{title}#{content}#{footer}</div>",tplTitle:"<div id='#{id}' class='#{class}'><span id='#{inner-id}' class='#{inner-class}'>#{content}</span></div>",tplContent:"<div id='#{id}' class='#{class}'>#{content}</div>",tplFooter:"<div id='#{id}' class='#{class}'></div>",isShown:function(){return baidu.ui.dialog.instances[this.guid]=="show"
},getString:function(){var c=this,a,g="title",f="title-inner",d="content",h="footer";return baidu.format(c.tplDOM,{id:c.getId(),"class":c.getClass(),title:baidu.format(c.tplTitle,{id:c.getId(g),"class":c.getClass(g),"inner-id":c.getId(f),"inner-class":c.getClass(f),content:c.titleText}),content:baidu.format(c.tplContent,{id:c.getId(d),"class":c.getClass(d),content:c.contentText}),footer:baidu.format(c.tplFooter,{id:c.getId(h),"class":c.getClass(h)})})
},render:function(){var c=this,a;if(c.getMain()){return}a=c.renderMain();a.innerHTML=c.getString();c.update(c);baidu.dom.setStyles(c.getMain(),{position:"absolute",zIndex:this.zIndex,marginLeft:"-100000px"});
c.windowResizeHandler=c.getWindowResizeHandler();baidu.on(window,"resize",c.windowResizeHandler);c.dispatchEvent("onload");
return a},getWindowResizeHandler:function(){var a=this;return function(){a.update()}},open:function(a){var c=this;c.update(a);
c.getMain().style.marginLeft="auto";baidu.ui.dialog.instances[c.guid]="show";c.dispatchEvent("onopen")},close:function(){var a=this;
if(a.dispatchEvent("onbeforeclose")){a.getMain().style.marginLeft="-100000px";baidu.ui.dialog.instances[a.guid]="hide";a.dispatchEvent("onclose")
}},update:function(c){c=c||{};var d=this,a=d.getContent();baidu.object.extend(d,c);if(c.content){if(a.firstChild!=c.content){a.innerHTML="";
a.appendChild(c.content)}}else{if(c.contentText){a.innerHTML=c.contentText}}if(c.titleText){d.getTitleInner("title-inner").innerHTML=c.titleText
}d._updatePosition();d.dispatchEvent("onupdate")},_updatePosition:function(){var d=this,g="",c="",a="",f="";baidu.dom.setStyles(d.getContent(),{width:d.width,height:d.height});
if((d.left&&d.left!="auto")||(d.right&&d.right!="auto")){f=d.left||"";c=d.right||""}else{f=Math.max((baidu.page.getViewWidth()-parseInt(d.getMain().offsetWidth))/2+baidu.page.getScrollLeft(),0)
}if((d.top&&d.top!="auto")||(d.button&&d.button!="auto")){g=d.top||"";a=d.bottom||""}else{g=Math.max((baidu.page.getViewHeight()-parseInt(d.getMain().offsetHeight))/2+baidu.page.getScrollTop(),0)
}baidu.dom.setStyles(d.getMain(),{top:g,right:c,bottom:a,left:f})},getTitle:function(){return baidu.g(this.getId("title"))
},getTitleInner:function(){return baidu.g(this.getId("title-inner"))},getContent:function(){return baidu.g(this.getId("content"))
},getFooter:function(){return baidu.g(this.getId("footer"))},dispose:function(){var a=this;delete baidu.ui.dialog.instances[a.guid];
a.dispatchEvent("dispose");baidu.un(window,"resize",a.windowResizeHandler);baidu.dom.remove(a.getMain());baidu.lang.Class.prototype.dispose.call(a)
}});baidu.dom.getStyle=function(d,c){var h=baidu.dom;d=h.g(d);c=baidu.string.toCamelCase(c);var g=d.style[c];if(!g){var a=h._styleFixer[c],f=d.currentStyle||(baidu.browser.ie?d.style:getComputedStyle(d,null));
if("string"==typeof a){g=f[a]}else{if(a&&a.get){g=a.get(d,f)}else{g=f[c]}}}if(a=h._styleFilter){g=a.filter(c,g,"get")}return g
};baidu.getStyle=baidu.dom.getStyle;baidu.event.preventDefault=function(a){if(a.preventDefault){a.preventDefault()}else{a.returnValue=false
}};(function(){baidu.page.getMousePosition=function(){return{x:baidu.page.getScrollLeft()+a.x,y:baidu.page.getScrollTop()+a.y}
};var a={x:0,y:0};baidu.event.on(document,"onmousemove",function(c){c=window.event||c;a.x=c.clientX;a.y=c.clientY})})();(function(){var l,k,f,d,c,n,g,o;
baidu.dom.drag=function(q,p){if(!(l=baidu.dom.g(q))){return false}k=baidu.object.extend({autoStop:true,capture:true,interval:20},p);
n=parseInt(baidu.dom.getStyle(l,"top"))||0;g=parseInt(baidu.dom.getStyle(l,"left"))||0;setTimeout(function(){var r=baidu.page.getMousePosition();
f=r.x;d=r.y;clearTimeout(c);c=setInterval(a,k.interval)},1);k.autoStop&&baidu.event.on(document,"mouseup",j);baidu.event.on(document.body,"selectstart",h);
if(k.capture&&l.setCapture){l.setCapture()}else{if(k.capture&&window.captureEvents){window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP)
}}o=document.body.style.MozUserSelect;document.body.style.MozUserSelect="none";typeof k.ondragstart=="function"&&k.ondragstart(l,k);
return{stop:m}};function m(){clearTimeout(c);if(k.capture&&l.releaseCapture){l.releaseCapture()}else{if(k.capture&&window.releaseEvents){window.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP)
}}document.body.style.MozUserSelect=o;baidu.event.un(document.body,"selectstart",h);typeof k.ondragend=="function"&&k.ondragend(l,k)
}function a(t){var p=k.range,s=baidu.page.getMousePosition(),q=g+s.x-f,r=n+s.y-d;if(typeof p=="object"&&p&&p.length==4){q=Math.max(p[3],q);
q=Math.min(p[1]-l.offsetWidth,q);r=Math.max(p[0],r);r=Math.min(p[2]-l.offsetHeight,r)}l.style.top=r+"px";l.style.left=q+"px";
typeof k.ondrag=="function"&&k.ondrag(l,k)}function j(p){m();baidu.event.un(document,"mouseup",j)}function h(p){return baidu.event.preventDefault(p,false)
}})();baidu.dom.draggable=function(f,c){c=baidu.object.extend({toggle:function(){return true}},c||{});c.autoStop=true;f=baidu.dom.g(f);
var d=baidu.dom.ddManager;function a(h){var g=c[h];c[h]=function(){typeof g=="function"&&g.apply(this,arguments);d&&d.dispatchEvent(h,{DOM:f})
}}a("ondragstart");a("ondrag");a("ondragend");if(f&&baidu.dom.getStyle(f,"position")!="static"){baidu.event.on(c.handler||f,"onmousedown",function(){if(typeof c.toggle=="function"&&!c.toggle()){return
}baidu.dom.drag(f,c)})}return f};baidu.page.getHeight=function(){var f=document,a=f.body,d=f.documentElement,c=f.compatMode=="BackCompat"?a:f.documentElement;
return Math.max(d.scrollHeight,a.scrollHeight,c.clientHeight)};baidu.ui.behavior=baidu.ui.behavior||{};(function(){Draggable=baidu.ui.behavior.draggable=function(){this.addEventListener("onload",function(){var a=this;
a.dragUpdate()});this.addEventListener("ondispose",function(){var a=this;baidu.un(a.dragHandler,"mousedown",a._dragFn);a.dragHandler=a._lastDragHandler=null
})};Draggable.dragUpdate=function(a){var c=this;a=a||{};if(!c.draggable){return}if(c.dragHandler!=c._lastDragHandler&&c._dragFn){baidu.event.un(c._lastDragHandler,"onmousedown",c._dragFn)
}baidu.object.extend(c,a);c._dragOption={ondragstart:function(){c.dispatchEvent("ondragstart")},ondrag:function(){c.dispatchEvent("ondrag")
},ondragend:function(){c.dispatchEvent("ondragend")},autoStop:true};c._dragOption.range=c.dragRange||[];c._dragOption.handler=c._lastDragHandler=c.dragHandler||c.getMain();
if(c.dragHandler){baidu.event.on(c.dragHandler,"onmousedown",c._dragFn=function(){baidu.dom.drag(c.getMain(),c._dragOption)
})}}})();baidu.ui.dialog.Dialog.prototype.draggable=true;baidu.ui.dialog.Dialog.register(function(c){function a(){c.dragRange=[0,baidu.page.getWidth(),baidu.page.getHeight(),0];
c.dragUpdate()}c.addEventListener("onload",function(){var d=this;d.dragHandler=d.dragHandler||d.getTitle();if(!d.dragRange){a();
baidu.on(window,"resize",a)}else{d.dragUpdate()}});c.addEventListener("ondragend",function(){var d=this;d.left=baidu.dom.getStyle(d.getMain(),"left");
d.top=baidu.dom.getStyle(d.getMain(),"top")});c.addEventListener("ondispose",function(){baidu.un(window,"resize",a)})});if(/firefox\/(\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.firefox=parseFloat(RegExp["\x241"])
}baidu.dom._styleFixer.display=baidu.browser.ie&&baidu.browser.ie<8?{set:function(a,c){a=a.style;if(c=="inline-block"){a.display="inline";
a.zoom=1}else{a.display=c}}}:baidu.browser.firefox&&baidu.browser.firefox<3?{set:function(a,c){a.style.display=c=="inline-block"?"-moz-inline-box":c
}}:null;baidu.dom.insertHTML=function(g,a,f){g=baidu.dom.g(g);if(g.insertAdjacentHTML){g.insertAdjacentHTML(a,f)}else{var c=g.ownerDocument.createRange();
c.setStartBefore(g);var d=c.createContextualFragment(f),j=g.parentNode,h;switch(a.toUpperCase()){case"BEFOREBEGIN":j.insertBefore(d,g);
break;case"AFTERBEGIN":g.insertBefore(d,g.firstChild);break;case"BEFOREEND":g.appendChild(d);break;case"AFTEREND":(h=g.nextSibling)?j.insertBefore(d,h):j.appendChild(d)
}}return g};baidu.insertHTML=baidu.dom.insertHTML;baidu.ui.dialog.Dialog.extend({okText:"确定",ok:function(){if(this.dispatchEvent("ok")){this.close()
}},tplAlert:"<div id='#{id}' class='#{class}' onclick=#{onclick}>#{content}</div>"});baidu.ui.dialog.Dialog.register(function(a){a.addEventListener("onload",function(){var f=this,d="ok",g="dispatchEvent";
function c(h){return baidu.format(f.tplAlert,{id:f.getId(h),"class":f.getClass(h),onclick:f.getCallString(h),content:f[h+"Text"]})
}if(f.type=="alert"){baidu.dom.insertHTML(f.getId("footer"),"beforeEnd",c(d))}})});baidu.lang.isString=function(a){return"[object String]"==Object.prototype.toString.call(a)
};baidu.isString=baidu.lang.isString;baidu.ui.dialog.alert=function(c,a){a=a||{};a.type="alert";if(baidu.isString(c)){a.contentText=c
}else{a.content=c}var d=new baidu.ui.dialog.Dialog(a);if(typeof a.autoDispose=="undefined"||a.autoDispose){d.addEventListener("onclose",function(){this.dispose()
})}d.render();if(typeof a.autoOpen=="undefined"||a.autoOpen){d.open()}return d};baidu.browser.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);
baidu.string.getByteLength=function(a){return String(a).replace(/[^\x00-\xff]/g,"ci").length};baidu.string.subByte=function(c,a){c=String(c);
if(a<0||baidu.string.getByteLength(c)<=a){return c}c=c.substr(0,a).replace(/([^\x00-\xff])/g,"\x241 ").substr(0,a).replace(/[^\x00-\xff]$/,"").replace(/([^\x00-\xff]) /g,"\x241");
return c};(function(){var d=/^\#[\da-f]{6}$/i;var c=/^rgb\((\d+), (\d+), (\d+)\)$/;var a={black:"#000000",silver:"#c0c0c0",gray:"#808080",white:"#ffffff",maroon:"#800000",red:"#ff0000",purple:"#800080",fuchsia:"#ff00ff",green:"#008000",lime:"#00ff00",olive:"#808000",yellow:"#ffff0",navy:"#000080",blue:"#0000ff",teal:"#008080",aqua:"#00ffff"};
baidu.string.formatColor=function(g){if(d.test(g)){return g}else{if(c.test(g)){for(var l,k=1,g="#";k<4;k++){l=parseInt(RegExp["\x24"+k]).toString(16);
g+=("00"+l).substr(l.length)}return g}else{if(/^\#[\da-f]{3}$/.test(g)){var j=g.charAt(1),h=g.charAt(2),f=g.charAt(3);return"#"+j+j+h+h+f+f
}else{if(a[g]){return a[g]}}}}return""}})();baidu.lang.isObject=function(a){return"function"==typeof a||!!(a&&"object"==typeof a)
};baidu.isObject=baidu.lang.isObject;baidu.dom._NAME_ATTRS=(function(){var a={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",usemap:"useMap",frameborder:"frameBorder"};
if(baidu.browser.ie<8){a["for"]="htmlFor";a["class"]="className"}else{a.htmlFor="for";a.className="class"}return a})();baidu.dom.setAttr=function(c,a,d){c=baidu.dom.g(c);
if("style"==a){c.style.cssText=d}else{a=baidu.dom._NAME_ATTRS[a]||a;c.setAttribute(a,d)}return c};baidu.setAttr=baidu.dom.setAttr;
baidu.dom.setAttrs=function(d,a){d=baidu.dom.g(d);for(var c in a){baidu.dom.setAttr(d,c,a[c])}return d};baidu.setAttrs=baidu.dom.setAttrs;
baidu.dom.getAncestorByClass=function(a,c){a=baidu.dom.g(a);c=new RegExp("(^|\\s)"+baidu.string.trim(c)+"(\\s|\x24)");while((a=a.parentNode)&&a.nodeType==1){if(c.test(a.className)){return a
}}return null};baidu.dom.getDocument=function(a){a=baidu.dom.g(a);return a.nodeType==9?a:a.ownerDocument||a.document};baidu.json=baidu.json||{};
baidu.json.stringify=(function(){var c={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function a(h){if(/["\\\x00-\x1f]/.test(h)){h=h.replace(/["\\\x00-\x1f]/g,function(j){var k=c[j];
if(k){return k}k=j.charCodeAt();return"\\u00"+Math.floor(k/16).toString(16)+(k%16).toString(16)})}return'"'+h+'"'}function f(o){var j=["["],k=o.length,h,m,n;
for(m=0;m<k;m++){n=o[m];switch(typeof n){case"undefined":case"function":case"unknown":break;default:if(h){j.push(",")}j.push(baidu.json.stringify(n));
h=1}}j.push("]");return j.join("")}function d(h){return h<10?"0"+h:h}function g(h){return'"'+h.getFullYear()+"-"+d(h.getMonth()+1)+"-"+d(h.getDate())+"T"+d(h.getHours())+":"+d(h.getMinutes())+":"+d(h.getSeconds())+'"'
}return function(m){switch(typeof m){case"undefined":return"undefined";case"number":return isFinite(m)?String(m):"null";case"string":return a(m);
case"boolean":return String(m);default:if(m===null){return"null"}else{if(m instanceof Array){return f(m)}else{if(m instanceof Date){return g(m)
}else{var j=["{"],l=baidu.json.stringify,h,k;for(key in m){if(m.hasOwnProperty(key)){k=m[key];switch(typeof k){case"undefined":case"unknown":case"function":break;
default:if(h){j.push(",")}h=1;j.push(l(key)+":"+l(k))}}}j.push("}");return j.join("")}}}}}})();baidu.dom.create=function(c,a){a=a||{};
var d=document.createElement(c);return baidu.dom.setAttrs(d,a)};(function(){var r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,l=0,f=Object.prototype.toString,q=false,k=true;
[0,0].sort(function(){k=false;return 0});var c=function(y,t,B,C){B=B||[];t=t||document;var E=t;if(t.nodeType!==1&&t.nodeType!==9){return[]
}if(!y||typeof y!=="string"){return B}var z=[],v,G,J,u,x=true,w=c.isXML(t),D=y,F,I,H,A;do{r.exec("");v=r.exec(D);if(v){D=v[3];
z.push(v[1]);if(v[2]){u=v[3];break}}}while(v);if(z.length>1&&m.exec(y)){if(z.length===2&&g.relative[z[0]]){G=j(z[0]+z[1],t)
}else{G=g.relative[z[0]]?[t]:c(z.shift(),t);while(z.length){y=z.shift();if(g.relative[y]){y+=z.shift()}G=j(y,G)}}}else{if(!C&&z.length>1&&t.nodeType===9&&!w&&g.match.ID.test(z[0])&&!g.match.ID.test(z[z.length-1])){F=c.find(z.shift(),t,w);
t=F.expr?c.filter(F.expr,F.set)[0]:F.set[0]}if(t){F=C?{expr:z.pop(),set:a(C)}:c.find(z.pop(),z.length===1&&(z[0]==="~"||z[0]==="+")&&t.parentNode?t.parentNode:t,w);
G=F.expr?c.filter(F.expr,F.set):F.set;if(z.length>0){J=a(G)}else{x=false}while(z.length){I=z.pop();H=I;if(!g.relative[I]){I=""
}else{H=z.pop()}if(H==null){H=t}g.relative[I](J,H,w)}}else{J=z=[]}}if(!J){J=G}if(!J){c.error(I||y)}if(f.call(J)==="[object Array]"){if(!x){B.push.apply(B,J)
}else{if(t&&t.nodeType===1){for(A=0;J[A]!=null;A++){if(J[A]&&(J[A]===true||J[A].nodeType===1&&c.contains(t,J[A]))){B.push(G[A])
}}}else{for(A=0;J[A]!=null;A++){if(J[A]&&J[A].nodeType===1){B.push(G[A])}}}}}else{a(J,B)}if(u){c(u,E,B,C);c.uniqueSort(B)
}return B};c.uniqueSort=function(u){if(d){q=k;u.sort(d);if(q){for(var t=1;t<u.length;t++){if(u[t]===u[t-1]){u.splice(t--,1)
}}}}return u};c.matches=function(t,u){return c(t,null,null,u)};c.find=function(A,t,B){var z;if(!A){return[]}for(var w=0,v=g.order.length;
w<v;w++){var y=g.order[w],x;if((x=g.leftMatch[y].exec(A))){var u=x[1];x.splice(1,1);if(u.substr(u.length-1)!=="\\"){x[1]=(x[1]||"").replace(/\\/g,"");
z=g.find[y](x,t,B);if(z!=null){A=A.replace(g.match[y],"");break}}}}if(!z){z=t.getElementsByTagName("*")}return{set:z,expr:A}
};c.filter=function(E,D,H,x){var v=E,J=[],B=D,z,t,A=D&&D[0]&&c.isXML(D[0]);while(E&&D.length){for(var C in g.filter){if((z=g.leftMatch[C].exec(E))!=null&&z[2]){var u=g.filter[C],I,G,w=z[1];
t=false;z.splice(1,1);if(w.substr(w.length-1)==="\\"){continue}if(B===J){J=[]}if(g.preFilter[C]){z=g.preFilter[C](z,B,H,J,x,A);
if(!z){t=I=true}else{if(z===true){continue}}}if(z){for(var y=0;(G=B[y])!=null;y++){if(G){I=u(G,z,y,B);var F=x^!!I;if(H&&I!=null){if(F){t=true
}else{B[y]=false}}else{if(F){J.push(G);t=true}}}}}if(I!==undefined){if(!H){B=J}E=E.replace(g.match[C],"");if(!t){return[]
}break}}}if(E===v){if(t==null){c.error(E)}else{break}}v=E}return B};c.error=function(t){throw"Syntax error, unrecognized expression: "+t
};var g=c.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(t){return t.getAttribute("href")
}},relative:{"+":function(z,u){var w=typeof u==="string",y=w&&!/\W/.test(u),A=w&&!y;if(y){u=u.toLowerCase()}for(var v=0,t=z.length,x;
v<t;v++){if((x=z[v])){while((x=x.previousSibling)&&x.nodeType!==1){}z[v]=A||x&&x.nodeName.toLowerCase()===u?x||false:x===u
}}if(A){c.filter(u,z,true)}},">":function(z,u){var x=typeof u==="string",y,v=0,t=z.length;if(x&&!/\W/.test(u)){u=u.toLowerCase();
for(;v<t;v++){y=z[v];if(y){var w=y.parentNode;z[v]=w.nodeName.toLowerCase()===u?w:false}}}else{for(;v<t;v++){y=z[v];if(y){z[v]=x?y.parentNode:y.parentNode===u
}}if(x){c.filter(u,z,true)}}},"":function(w,u,y){var v=l++,t=s,x;if(typeof u==="string"&&!/\W/.test(u)){u=u.toLowerCase();
x=u;t=p}t("parentNode",u,v,w,x,y)},"~":function(w,u,y){var v=l++,t=s,x;if(typeof u==="string"&&!/\W/.test(u)){u=u.toLowerCase();
x=u;t=p}t("previousSibling",u,v,w,x,y)}},find:{ID:function(u,v,w){if(typeof v.getElementById!=="undefined"&&!w){var t=v.getElementById(u[1]);
return t?[t]:[]}},NAME:function(v,y){if(typeof y.getElementsByName!=="undefined"){var u=[],x=y.getElementsByName(v[1]);for(var w=0,t=x.length;
w<t;w++){if(x[w].getAttribute("name")===v[1]){u.push(x[w])}}return u.length===0?null:u}},TAG:function(t,u){return u.getElementsByTagName(t[1])
}},preFilter:{CLASS:function(w,u,v,t,z,A){w=" "+w[1].replace(/\\/g,"")+" ";if(A){return w}for(var x=0,y;(y=u[x])!=null;x++){if(y){if(z^(y.className&&(" "+y.className+" ").replace(/[\t\n]/g," ").indexOf(w)>=0)){if(!v){t.push(y)
}}else{if(v){u[x]=false}}}}return false},ID:function(t){return t[1].replace(/\\/g,"")},TAG:function(u,t){return u[1].toLowerCase()
},CHILD:function(t){if(t[1]==="nth"){var u=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(t[2]==="even"&&"2n"||t[2]==="odd"&&"2n+1"||!/\D/.test(t[2])&&"0n+"+t[2]||t[2]);
t[2]=(u[1]+(u[2]||1))-0;t[3]=u[3]-0}t[0]=l++;return t},ATTR:function(x,u,v,t,y,z){var w=x[1].replace(/\\/g,"");if(!z&&g.attrMap[w]){x[1]=g.attrMap[w]
}if(x[2]==="~="){x[4]=" "+x[4]+" "}return x},PSEUDO:function(x,u,v,t,y){if(x[1]==="not"){if((r.exec(x[3])||"").length>1||/^\w/.test(x[3])){x[3]=c(x[3],null,null,u)
}else{var w=c.filter(x[3],u,v,true^y);if(!v){t.push.apply(t,w)}return false}}else{if(g.match.POS.test(x[0])||g.match.CHILD.test(x[0])){return true
}}return x},POS:function(t){t.unshift(true);return t}},filters:{enabled:function(t){return t.disabled===false&&t.type!=="hidden"
},disabled:function(t){return t.disabled===true},checked:function(t){return t.checked===true},selected:function(t){t.parentNode.selectedIndex;
return t.selected===true},parent:function(t){return !!t.firstChild},empty:function(t){return !t.firstChild},has:function(v,u,t){return !!c(t[3],v).length
},header:function(t){return(/h\d/i).test(t.nodeName)},text:function(t){return"text"===t.type},radio:function(t){return"radio"===t.type
},checkbox:function(t){return"checkbox"===t.type},file:function(t){return"file"===t.type},password:function(t){return"password"===t.type
},submit:function(t){return"submit"===t.type},image:function(t){return"image"===t.type},reset:function(t){return"reset"===t.type
},button:function(t){return"button"===t.type||t.nodeName.toLowerCase()==="button"},input:function(t){return(/input|select|textarea|button/i).test(t.nodeName)
}},setFilters:{first:function(u,t){return t===0},last:function(v,u,t,w){return u===w.length-1},even:function(u,t){return t%2===0
},odd:function(u,t){return t%2===1},lt:function(v,u,t){return u<t[3]-0},gt:function(v,u,t){return u>t[3]-0},nth:function(v,u,t){return t[3]-0===u
},eq:function(v,u,t){return t[3]-0===u}},filter:{PSEUDO:function(v,A,z,B){var t=A[1],u=g.filters[t];if(u){return u(v,z,A,B)
}else{if(t==="contains"){return(v.textContent||v.innerText||c.getText([v])||"").indexOf(A[3])>=0}else{if(t==="not"){var w=A[3];
for(var y=0,x=w.length;y<x;y++){if(w[y]===v){return false}}return true}else{c.error("Syntax error, unrecognized expression: "+t)
}}}},CHILD:function(t,w){var z=w[1],u=t;switch(z){case"only":case"first":while((u=u.previousSibling)){if(u.nodeType===1){return false
}}if(z==="first"){return true}u=t;case"last":while((u=u.nextSibling)){if(u.nodeType===1){return false}}return true;case"nth":var v=w[2],C=w[3];
if(v===1&&C===0){return true}var y=w[0],B=t.parentNode;if(B&&(B.sizcache!==y||!t.nodeIndex)){var x=0;for(u=B.firstChild;u;
u=u.nextSibling){if(u.nodeType===1){u.nodeIndex=++x}}B.sizcache=y}var A=t.nodeIndex-C;if(v===0){return A===0}else{return(A%v===0&&A/v>=0)
}}},ID:function(u,t){return u.nodeType===1&&u.getAttribute("id")===t},TAG:function(u,t){return(t==="*"&&u.nodeType===1)||u.nodeName.toLowerCase()===t
},CLASS:function(u,t){return(" "+(u.className||u.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(y,w){var v=w[1],t=g.attrHandle[v]?g.attrHandle[v](y):y[v]!=null?y[v]:y.getAttribute(v),z=t+"",x=w[2],u=w[4];
return t==null?x==="!=":x==="="?z===u:x==="*="?z.indexOf(u)>=0:x==="~="?(" "+z+" ").indexOf(u)>=0:!u?z&&t!==false:x==="!="?z!==u:x==="^="?z.indexOf(u)===0:x==="$="?z.substr(z.length-u.length)===u:x==="|="?z===u||z.substr(0,u.length+1)===u+"-":false
},POS:function(x,u,v,y){var t=u[2],w=g.setFilters[t];if(w){return w(x,v,u,y)}}}};var m=g.match.POS,h=function(u,t){return"\\"+(t-0+1)
};for(var o in g.match){g.match[o]=new RegExp(g.match[o].source+(/(?![^\[]*\])(?![^\(]*\))/.source));g.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+g.match[o].source.replace(/\\(\d+)/g,h))
}var a=function(u,t){u=Array.prototype.slice.call(u,0);if(t){t.push.apply(t,u);return t}return u};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType
}catch(n){a=function(x,w){var u=w||[],v=0;if(f.call(x)==="[object Array]"){Array.prototype.push.apply(u,x)}else{if(typeof x.length==="number"){for(var t=x.length;
v<t;v++){u.push(x[v])}}else{for(;x[v];v++){u.push(x[v])}}}return u}}var d;if(document.documentElement.compareDocumentPosition){d=function(u,t){if(!u.compareDocumentPosition||!t.compareDocumentPosition){if(u==t){q=true
}return u.compareDocumentPosition?-1:1}var v=u.compareDocumentPosition(t)&4?-1:u===t?0:1;if(v===0){q=true}return v}}else{if("sourceIndex" in document.documentElement){d=function(u,t){if(!u.sourceIndex||!t.sourceIndex){if(u==t){q=true
}return u.sourceIndex?-1:1}var v=u.sourceIndex-t.sourceIndex;if(v===0){q=true}return v}}else{if(document.createRange){d=function(w,u){if(!w.ownerDocument||!u.ownerDocument){if(w==u){q=true
}return w.ownerDocument?-1:1}var v=w.ownerDocument.createRange(),t=u.ownerDocument.createRange();v.setStart(w,0);v.setEnd(w,0);
t.setStart(u,0);t.setEnd(u,0);var x=v.compareBoundaryPoints(Range.START_TO_END,t);if(x===0){q=true}return x}}}}c.getText=function(t){var u="",w;
for(var v=0;t[v];v++){w=t[v];if(w.nodeType===3||w.nodeType===4){u+=w.nodeValue}else{if(w.nodeType!==8){u+=c.getText(w.childNodes)
}}}return u};(function(){var u=document.createElement("div"),v="script"+(new Date()).getTime();u.innerHTML="<a name='"+v+"'/>";
var t=document.documentElement;t.insertBefore(u,t.firstChild);if(document.getElementById(v)){g.find.ID=function(x,y,z){if(typeof y.getElementById!=="undefined"&&!z){var w=y.getElementById(x[1]);
return w?w.id===x[1]||typeof w.getAttributeNode!=="undefined"&&w.getAttributeNode("id").nodeValue===x[1]?[w]:undefined:[]
}};g.filter.ID=function(y,w){var x=typeof y.getAttributeNode!=="undefined"&&y.getAttributeNode("id");return y.nodeType===1&&x&&x.nodeValue===w
}}t.removeChild(u);t=u=null})();(function(){var t=document.createElement("div");t.appendChild(document.createComment(""));
if(t.getElementsByTagName("*").length>0){g.find.TAG=function(u,y){var x=y.getElementsByTagName(u[1]);if(u[1]==="*"){var w=[];
for(var v=0;x[v];v++){if(x[v].nodeType===1){w.push(x[v])}}x=w}return x}}t.innerHTML="<a href='#'></a>";if(t.firstChild&&typeof t.firstChild.getAttribute!=="undefined"&&t.firstChild.getAttribute("href")!=="#"){g.attrHandle.href=function(u){return u.getAttribute("href",2)
}}t=null})();if(document.querySelectorAll){(function(){var t=c,v=document.createElement("div");v.innerHTML="<p class='TEST'></p>";
if(v.querySelectorAll&&v.querySelectorAll(".TEST").length===0){return}c=function(z,y,w,x){y=y||document;if(!x&&y.nodeType===9&&!c.isXML(y)){try{return a(y.querySelectorAll(z),w)
}catch(A){}}return t(z,y,w,x)};for(var u in t){c[u]=t[u]}v=null})()}(function(){var t=document.createElement("div");t.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!t.getElementsByClassName||t.getElementsByClassName("e").length===0){return}t.lastChild.className="e";if(t.getElementsByClassName("e").length===1){return
}g.order.splice(1,0,"CLASS");g.find.CLASS=function(u,v,w){if(typeof v.getElementsByClassName!=="undefined"&&!w){return v.getElementsByClassName(u[1])
}};t=null})();function p(u,z,y,C,A,B){for(var w=0,v=C.length;w<v;w++){var t=C[w];if(t){t=t[u];var x=false;while(t){if(t.sizcache===y){x=C[t.sizset];
break}if(t.nodeType===1&&!B){t.sizcache=y;t.sizset=w}if(t.nodeName.toLowerCase()===z){x=t;break}t=t[u]}C[w]=x}}}function s(u,z,y,C,A,B){for(var w=0,v=C.length;
w<v;w++){var t=C[w];if(t){t=t[u];var x=false;while(t){if(t.sizcache===y){x=C[t.sizset];break}if(t.nodeType===1){if(!B){t.sizcache=y;
t.sizset=w}if(typeof z!=="string"){if(t===z){x=true;break}}else{if(c.filter(z,[t]).length>0){x=t;break}}}t=t[u]}C[w]=x}}}c.contains=document.compareDocumentPosition?function(u,t){return !!(u.compareDocumentPosition(t)&16)
}:function(u,t){return u!==t&&(u.contains?u.contains(t):true)};c.isXML=function(t){var u=(t?t.ownerDocument||t:0).documentElement;
return u?u.nodeName!=="HTML":false};var j=function(t,A){var w=[],x="",y,v=A.nodeType?[A]:A;while((y=g.match.PSEUDO.exec(t))){x+=y[0];
t=t.replace(g.match.PSEUDO,"")}t=g.relative[t]?t+"*":t;for(var z=0,u=v.length;z<u;z++){c(t,v[z],w)}return c.filter(x,w)};
baidu.dom.query=c})();baidu.lang.decontrol=function(c){var a=window[baidu.guid];a._instances&&(delete a._instances[c])};baidu.dom._matchNode=function(a,d,f){a=baidu.dom.g(a);
for(var c=a[f];c;c=c[d]){if(c.nodeType==1){return c}}return null};baidu.lang.isNumber=function(a){return"[object Number]"==Object.prototype.toString.call(a)
};if(/chrome\/(\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.chrome=parseFloat(RegExp["\x241"])}baidu.json.parse=window.JSON&&window.JSON.parse?window.JSON.parse:function(a){if(!/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return null
}return(new Function("return "+a))()};baidu.json.decode=function(a){return baidu.json.parse(a)};baidu.ajax=baidu.ajax||{};
baidu.ajax.request=function(f,r){function m(){if(q.readyState==4){try{var t=q.status}catch(s){g("failure");return}g(t);if((t>=200&&t<300)||t==304||t==1223){g("success")
}else{g("failure")}window.setTimeout(function(){q.onreadystatechange=new Function();if(j){q=null}},0)}}function d(){if(window.ActiveXObject){try{return new ActiveXObject("Msxml2.XMLHTTP")
}catch(s){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(s){}}}if(window.XMLHttpRequest){return new XMLHttpRequest()
}}function g(t){t="on"+t;var s=c[t],u=baidu.ajax[t];if(s){if(t!="onsuccess"){s(q)}else{s(q,q.responseText)}}else{if(u){if(t=="onsuccess"){return
}u(q)}}}r=r||{};var l=r.data||"",j=!(r.async===false),k=r.username||"",p=r.password||"",a=(r.method||"GET").toUpperCase(),h=r.headers||{},c={},o,q;
for(o in r){c[o]=r[o]}h["X-Request-By"]="baidu.ajax";try{q=d();if(a=="GET"){f+=(f.indexOf("?")>=0?"&":"?");if(l){f+=l+"&";
l=null}if(r.noCache){f+="b"+(new Date()).getTime()+"=1"}}if(k){q.open(a,f,j,k,p)}else{q.open(a,f,j)}if(j){q.onreadystatechange=m
}if(a=="POST"){q.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}for(o in h){if(h.hasOwnProperty(o)){q.setRequestHeader(o,h[o])
}}g("beforerequest");q.send(l);if(!j){m()}}catch(n){g("failure")}return q};baidu.event.getPageX=function(c){var a=c.pageX,d=document;
if(!a&&a!==0){a=(c.clientX||0)+(d.documentElement.scrollLeft||d.body.scrollLeft)}return a};baidu.event.getPageY=function(c){var a=c.pageY,d=document;
if(!a&&a!==0){a=(c.clientY||0)+(d.documentElement.scrollTop||d.body.scrollTop)}return a};baidu.swf.version=(function(){var j=navigator;
if(j.plugins&&j.mimeTypes.length){var f=j.plugins["Shockwave Flash"];if(f&&f.description){return f.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"
}}else{if(window.ActiveXObject&&!window.opera){for(var d=10;d>=2;d--){try{var h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+d);
if(h){var a=h.GetVariable("$version");return a.replace(/WIN/g,"").replace(/,/g,".")}}catch(g){}}}}})();baidu.swf.createHTML=function(t){t=t||{};
var m=baidu.swf.version,j=t.ver||"6.0.0",h,f,g,d,l,s,a={};for(d in t){a[d]=t[d]}t=a;if(m){m=m.split(".");j=j.split(".");for(g=0;
g<3;g++){h=parseInt(m[g],10);f=parseInt(j[g],10);if(f<h){break}else{if(f>h){return""}}}}else{return""}var o=t.vars,n=["classid","codebase","id","width","height","align"];
t.align=t.align||"middle";t.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";t.codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";
t.movie=t.url||"";delete t.vars;delete t.url;if("string"==typeof o){t.flashvars=o}else{var q=[];for(d in o){s=o[d];if(s){q.push(d+"="+encodeURIComponent(s))
}}t.flashvars=q.join("&")}var p=["<object "];for(g=0,l=n.length;g<l;g++){s=n[g];p.push(" ",s,'="',t[s],'"')}p.push(">");var c={wmode:1,scale:1,quality:1,play:1,loop:1,menu:1,salign:1,bgcolor:1,base:1,allowscriptaccess:1,allownetworking:1,allowfullscreen:1,seamlesstabbing:1,devicefont:1,swliveconnect:1,flashvars:1,movie:1};
for(d in t){s=t[d];d=d.toLowerCase();if(c[d]&&s){p.push('<param name="'+d+'" value="'+s+'" />')}}t.src=t.movie;t.name=t.id;
delete t.id;delete t.movie;delete t.classid;delete t.codebase;t.type="application/x-shockwave-flash";t.pluginspage="http://www.macromedia.com/go/getflashplayer";
p.push("<embed");var r;for(d in t){s=t[d];if(s){if((new RegExp("^salign\x24","i")).test(d)){r=s;continue}p.push(" ",d,'="',s,'"')
}}if(r){p.push(' salign="',r,'"')}p.push("></embed></object>");return p.join("")};baidu.swf.create=function(a,d){a=a||{};
var c=baidu.swf.createHTML(a)||a.errorMessage||"";if(d&&"string"==typeof d){d=document.getElementById(d)}if(d){d.innerHTML=c
}else{document.write(c)}};baidu.event.getKeyCode=function(a){return a.which||a.keyCode};baidu.lang.createClass=function(h,c){c=c||{};
var g=c.superClass||baidu.lang.Class;var f=function(){if(g!=baidu.lang.Class){g.apply(this,arguments)}else{g.call(this)}h.apply(this,arguments)
};f.options=c.options||{};var k=function(){},j=h.prototype;k.prototype=g.prototype;var a=f.prototype=new k();for(var d in j){a[d]=j[d]
}typeof c.className=="string"&&(a._className=c.className);a.constructor=j.constructor;f.extend=function(m){for(var l in m){f.prototype[l]=m[l]
}return f};return f};baidu.cookie=baidu.cookie||{};baidu.cookie._isValidKey=function(a){return(new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(a)
};baidu.cookie.getRaw=function(c){if(baidu.cookie._isValidKey(c)){var d=new RegExp("(^| )"+c+"=([^;]*)(;|\x24)"),a=d.exec(document.cookie);
if(a){return a[2]||null}}return null};baidu.cookie.get=function(a){var c=baidu.cookie.getRaw(a);if("string"==typeof c){c=decodeURIComponent(c);
return c}return null};baidu.lang.Class.prototype.addEventListeners=function(d,f){if(typeof f=="undefined"){for(var c in d){this.addEventListener(c,d[c])
}}else{d=d.split(",");var c=0,a=d.length,g;for(;c<a;c++){this.addEventListener(baidu.trim(d[c]),f)}}};baidu.object.clone=(function(a){return function(h){var d=h,f,c;
if(!h||h instanceof Number||h instanceof String||h instanceof Boolean){return d}else{if(h instanceof Array){d=[];var g=0;
for(f=0,c=h.length;f<c;f++){d[g++]=baidu.object.clone(h[f])}}else{if("object"==typeof h){if(a[Object.prototype.toString.call(h)]){return d
}d={};for(f in h){if(h.hasOwnProperty(f)){d[f]=baidu.object.clone(h[f])}}}}}return d}})({"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1});
baidu.event.stopPropagation=function(a){if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}};baidu.event.stop=function(a){var c=baidu.event;
c.stopPropagation(a);c.preventDefault(a)};baidu.event.getTarget=function(a){return a.target||a.srcElement};baidu.page.loadCssFile=function(c){var a=document.createElement("link");
a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href",c);document.getElementsByTagName("head")[0].appendChild(a)
};baidu.sio=baidu.sio||{};baidu.sio._removeScriptTag=function(c){if(c.clearAttributes){c.clearAttributes()}else{for(var a in c){if(c.hasOwnProperty(a)){delete c[a]
}}}if(c&&c.parentNode){c.parentNode.removeChild(c)}c=null};baidu.sio.callByBrowser=function(f,j,d){d=d||{};var g=document.createElement("SCRIPT"),c=0,a,h=d.charset;
g.onload=g.onreadystatechange=function(){if(c){return}var k=g.readyState;if("undefined"==typeof k||k=="loaded"||k=="complete"){c=1;
try{("function"==typeof j)&&j()}finally{baidu.sio._removeScriptTag(g)}}};g.setAttribute("type","text/javascript");h&&g.setAttribute("charset",h);
g.setAttribute("src",f);document.getElementsByTagName("head")[0].appendChild(g)};baidu.dom._styleFilter[baidu.dom._styleFilter.length]={get:function(d,f){if(/color/i.test(d)&&f.indexOf("rgb(")!=-1){var g=f.split(",");
f="#";for(var c=0,a;a=g[c];c++){a=parseInt(a.replace(/[^\d]/gi,""),10).toString(16);f+=a.length==1?"0"+a:a}f=f.toUpperCase()
}return f}};baidu.dom.show=function(a){a=baidu.dom.g(a);a.style.display="";return a};baidu.show=baidu.dom.show;baidu.fx=baidu.fx||{};
baidu.fx.Timeline=baidu.lang.createClass(function(a){baidu.object.extend(this,baidu.fx.Timeline.options);baidu.object.extend(this,a)
},{className:"baidu.fx.Timeline",options:{interval:16,duration:500,dynamic:true}}).extend({launch:function(){var a=this;a.dispatchEvent("onbeforestart");
typeof a.initialize=="function"&&a.initialize();a["\x06btime"]=new Date().getTime();a["\x06etime"]=a["\x06btime"]+(a.dynamic?a.duration:0);
a["\x06pulsed"]();return a},"\x06pulsed":function(){var c=this;var a=new Date().getTime();c.percent=(a-c["\x06btime"])/c.duration;
c.dispatchEvent("onbeforeupdate");if(a>=c["\x06etime"]){typeof c.render=="function"&&c.render(c.transition(c.percent=1));
typeof c.finish=="function"&&c.finish();c.dispatchEvent("onafterfinish");c.dispose();return}typeof c.render=="function"&&c.render(c.transition(c.percent));
c.dispatchEvent("onafterupdate");c["\x06timer"]=setTimeout(function(){c["\x06pulsed"]()},c.interval)},transition:function(a){return a
},cancel:function(){this["\x06timer"]&&clearTimeout(this["\x06timer"]);this["\x06etime"]=this["\x06btime"];typeof this.restore=="function"&&this.restore();
this.dispatchEvent("oncancel");this.dispose()},end:function(){this["\x06timer"]&&clearTimeout(this["\x06timer"]);this["\x06etime"]=this["\x06btime"];
this["\x06pulsed"]()}});baidu.fx.create=function(f,c,d){var g=new baidu.fx.Timeline(c);g.element=f;g._className=d||g._className;
g["\x06original"]={};var a="baidu_current_effect";g.addEventListener("onbeforestart",function(){var j=this,h;j.attribName="att_"+j._className.replace(/\W/g,"_");
h=j.element.getAttribute(a);j.element.setAttribute(a,(h||"")+"|"+j.guid+"|",0);if(!j.overlapping){(h=j.element.getAttribute(j.attribName))&&window[baidu.guid]._instances[h].cancel();
j.element.setAttribute(j.attribName,j.guid,0)}});g["\x06clean"]=function(h){if(h=this.element){h.removeAttribute(this.attribName);
guid=h.getAttribute(a);guid=guid.replace("|"+this.guid+"|","");if(!guid){h.removeAttribute(a)}else{h.setAttribute(a,guid,0)
}}};g.addEventListener("oncancel",function(){this["\x06clean"]();this["\x06restore"]()});g.addEventListener("onafterfinish",function(){this["\x06clean"]();
this.restoreAfterFinish&&this["\x06restore"]()});g.protect=function(h){this["\x06original"][h]=this.element.style[h]};g["\x06restore"]=function(){var l=this["\x06original"],k=this.element.style,h;
for(var j in l){h=l[j];if(typeof h=="undefined"){continue}k[j]=h;if(!h&&k.removeAttribute){k.removeAttribute(j)}else{if(!h&&k.removeProperty){k.removeProperty(j)
}}}};return g};baidu.fx.scale=function(d,a){if(!(d=baidu.dom.g(d))){return null}a=baidu.object.extend({from:0.1,to:1},a||{});
var g=/^(-?\d+px|\d?\d(\.\d+)?%|100%|left|center|right)(\s+(-?\d+px|\d?\d(\.\d+)?%|100%|top|center|bottom))?/i;!g.test(a.transformOrigin)&&(a.transformOrigin="0px 0px");
var c={},f=baidu.fx.create(d,baidu.object.extend({initialize:function(){baidu.dom.show(d);var n=this,h=c,t=d.style,m=function(o){n.protect(o)
};if(baidu.browser.ie){m("top");m("left");m("position");m("zoom");m("filter");this.offsetX=parseInt(baidu.dom.getStyle(d,"left"))||0;
this.offsetY=parseInt(baidu.dom.getStyle(d,"top"))||0;if(baidu.dom.getStyle(d,"position")=="static"){t.position="relative"
}g.test(this.transformOrigin);var l=RegExp["\x241"].toLowerCase(),k=RegExp["\x244"].toLowerCase(),p=this.element.offsetWidth,j=this.element.offsetHeight,r,q;
if(/\d+%/.test(l)){r=parseInt(l,10)/100*p}else{if(/\d+px/.test(l)){r=parseInt(l)}else{if(l=="left"){r=0}else{if(l=="center"){r=p/2
}else{if(l=="right"){r=p}}}}}if(!k){q=j/2}else{if(/\d+%/.test(k)){q=parseInt(k,10)/100*j}else{if(/\d+px/.test(k)){q=parseInt(k)
}else{if(k=="top"){q=0}else{if(k=="center"){q=j/2}else{if(k=="bottom"){q=j}}}}}}t.zoom=this.from;h.cx=r;h.cy=q}else{m("WebkitTransform");
m("WebkitTransformOrigin");m("MozTransform");m("MozTransformOrigin");m("OTransform");m("OTransformOrigin");m("transform");
m("transformOrigin");m("opacity");m("KHTMLOpacity");t.WebkitTransform=t.MozTransform=t.OTransform=t.transform="scale("+this.from+")";
t.WebkitTransformOrigin=t.MozTransformOrigin=t.OTransformOrigin=t.transformOrigin=this.transformOrigin}},render:function(l){var j=d.style,h=this.to==1,h=typeof this.opacityTrend=="boolean"?this.opacityTrend:h,k=h?this.percent:1-this.percent,m=this.to*l+this.from*(1-l);
if(baidu.browser.ie){j.zoom=m;j.filter="progid:DXImageTransform.Microsoft.Alpha(opacity:"+Math.floor(k*100)+")";j.top=this.offsetY+c.cy*(1-m);
j.left=this.offsetX+c.cx*(1-m)}else{j.WebkitTransform=j.MozTransform=j.OTransform=j.transform="scale("+m+")";j.KHTMLOpacity=j.opacity=k
}}},a),"baidu.fx.scale");return f.launch()};baidu.page.loadJsFile=function(c){var a=document.createElement("script");a.setAttribute("type","text/javascript");
a.setAttribute("src",c);a.setAttribute("defer","defer");document.getElementsByTagName("head")[0].appendChild(a)};baidu.dom.getAttr=function(c,a){c=baidu.dom.g(c);
if("style"==a){return c.style.cssText}a=baidu.dom._NAME_ATTRS[a]||a;return c.getAttribute(a)};baidu.getAttr=baidu.dom.getAttr;
baidu.array.removeAt=function(c,a){return c.splice(a,1)[0]};baidu.dom.insertBefore=function(f,d){var c,a;c=baidu.dom._g;f=c(f);
d=c(d);a=d.parentNode;if(a){a.insertBefore(f,d)}return f};baidu.sio.callByServer=function(a,l,m){m=m||{};var h=document.createElement("SCRIPT"),g="bd__cbs__",f=typeof l,k,j,c=m.charset,d=m.queryField||"callback";
if("string"==f){k=l}else{if("function"==f){while(1){k=g+Math.floor(Math.random()*2147483648).toString(36);if(!window[k]){window[k]=function(){try{l.apply(window,arguments)
}finally{baidu.sio._removeScriptTag(h);window[k]=null}};break}}}}if("string"==typeof k){a=a.replace((new RegExp("(\\?|&)callback=[^&]*")),"\x241"+d+"="+k);
if(a.search(new RegExp("(\\?|&)"+d+"=/"))<0){a+=(a.indexOf("?")<0?"?":"&")+d+"="+k}}h.setAttribute("type","text/javascript");
c&&h.setAttribute("charset",c);h.setAttribute("src",a);document.getElementsByTagName("head")[0].appendChild(h)};baidu.fx.highlight=function(c,a){if(!(c=baidu.dom.g(c))){return null
}var f=c;var d=baidu.fx.create(f,baidu.object.extend({initialize:function(){var m=this,l=baidu.dom.getStyle,k=baidu.string.formatColor,h=k(l(f,"color"))||"#000000",g=k(l(f,"backgroundColor"));
m.beginColor=m.beginColor||g||"#FFFF00";m.endColor=m.endColor||g||"#FFFFFF";m.finalColor=m.finalColor||m.endColor||m.element.style.backgroundColor;
m.textColor==h&&(m.textColor="");this.protect("color");this.protect("backgroundColor");m.c_b=[];m.c_d=[];m.t_b=[];m.t_d=[];
for(var o,j=0;j<3;j++){o=2*j+1;m.c_b[j]=parseInt(m.beginColor.substr(o,2),16);m.c_d[j]=parseInt(m.endColor.substr(o,2),16)-m.c_b[j];
if(m.textColor){m.t_b[j]=parseInt(h.substr(o,2),16);m.t_d[j]=parseInt(m.textColor.substr(o,2),16)-m.t_b[j]}}},render:function(l){for(var k=this,h="#",g="#",m,j=0;
j<3;j++){m=Math.round(k.c_b[j]+k.c_d[j]*l).toString(16);h+=("00"+m).substr(m.length);if(k.textColor){m=Math.round(k.t_b[j]+k.t_d[j]*l).toString(16);
g+=("00"+m).substr(m.length)}}f.style.backgroundColor=h;k.textColor&&(f.style.color=g)},finish:function(){this.textColor&&(f.style.color=this.textColor);
f.style.backgroundColor=this.finalColor}},a||{}),"baidu.fx.highlight");return d.launch()};if((/(\d+\.\d)(\.\d)?\s+safari/i.test(navigator.userAgent)&&!/chrome/i.test(navigator.userAgent))){baidu.browser.safari=parseFloat(RegExp["\x241"])
}baidu.url=baidu.url||{};baidu.url.queryToJson=function(a){var g=a.substr(a.indexOf("?")+1),d=g.split("&"),f=d.length,l={},j,h,k,c;
for(i=0;i<f;i++){c=d[i].split("=");j=c[0];h=c[1];k=l[j];if("undefined"==typeof k){l[j]=h}else{if(Object.prototype.toString.call(k)=="[object Array]"){k.push(h)
}else{l[j]=[k,h]}}}return l};baidu.array.find=function(g,d){var f,c,a=g.length;if("function"==typeof d){for(c=0;c<a;c++){f=g[c];
if(true===d.call(g,f,c)){return f}}}return null};if(/opera\/(\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.opera=parseFloat(RegExp["\x241"])
}baidu.browser.isWebkit=/webkit/i.test(navigator.userAgent);baidu.browser.isStrict=document.compatMode=="CSS1Compat";baidu.dom.getPosition=function(d){var n=baidu.dom.getDocument(d),h=baidu.browser,k=baidu.dom.getStyle;
d=baidu.dom.g(d);var g=h.isGecko>0&&n.getBoxObjectFor&&k(d,"position")=="absolute"&&(d.style.top===""||d.style.left==="");
var l={left:0,top:0};var j=(h.ie&&!h.isStrict)?n.body:n.documentElement;if(d==j){return l}var o=null;var f,m,c,p;if(d.getBoundingClientRect){f=d.getBoundingClientRect();
l.left=Math.floor(f.left)+Math.max(n.documentElement.scrollLeft,n.body.scrollLeft);l.top=Math.floor(f.top)+Math.max(n.documentElement.scrollTop,n.body.scrollTop);
l.left-=n.documentElement.clientLeft;l.top-=n.documentElement.clientTop;m=n.body;c=parseInt(k(m,"borderLeftWidth"));p=parseInt(k(m,"borderTopWidth"));
if(h.ie&&!h.isStrict){l.left-=isNaN(c)?2:c;l.top-=isNaN(p)?2:p}}else{if(n.getBoxObjectFor&&!g){f=n.getBoxObjectFor(d);var a=n.getBoxObjectFor(j);
l.left=f.screenX-a.screenX;l.top=f.screenY-a.screenY}else{o=d;do{l.left+=o.offsetLeft;l.top+=o.offsetTop;if(h.isWebkit>0&&k(o,"position")=="fixed"){l.left+=n.body.scrollLeft;
l.top+=n.body.scrollTop;break}o=o.offsetParent}while(o&&o!=d);if(h.opera>0||(h.isWebkit>0&&k(d,"position")=="absolute")){l.top-=n.body.offsetTop
}o=d.offsetParent;while(o&&o!=n.body){l.left-=o.scrollLeft;if(!b.opera||o.tagName!="TR"){l.top-=o.scrollTop}o=o.offsetParent
}}}return l};baidu.dom.intersect=function(l,k){var j=baidu.dom.g,h=baidu.dom.getPosition,a=Math.max,d=Math.min;l=j(l);k=j(k);
var f=h(l),c=h(k);return a(f.left,c.left)<=d(f.left+l.offsetWidth,c.left+k.offsetWidth)&&a(f.top,c.top)<=d(f.top+l.offsetHeight,c.top+k.offsetHeight)
};baidu.object.each=function(g,d){var c,a,f;if("function"==typeof d){for(a in g){if(g.hasOwnProperty(a)){f=g[a];c=d.call(g,f,a);
if(c===false){break}}}}return g};baidu.dom.removeStyle=function(){var c=document.createElement("DIV"),a;if(c.style.removeProperty){a=function(f,d){return f.style.removeProperty(d)
}}else{if(c.style.removeAttribute){a=function(f,d){return f.style.removeAttribute(baidu.string.toCamelCase(d))}}}c=null;return a
}();baidu.number=baidu.number||{};baidu.number.pad=function(f,d){var g="",c=(f<0),a=String(Math.abs(f));if(a.length<d){g=(new Array(d-a.length+1)).join("0")
}return(c?"-":"")+g+a};baidu.string.decodeHTML=function(a){var c=String(a).replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
return c.replace(/&#([\d]+);/g,function(f,d){return String.fromCharCode(parseInt(d,10))})};baidu.decodeHTML=baidu.string.decodeHTML;
baidu.string.filterFormat.escapeJs=function(g){if(!g||"string"!=typeof g){return g}var f,a,c,d=[];for(f=0,a=g.length;f<a;
++f){c=g.charCodeAt(f);if(c>255){d.push(g.charAt(f))}else{d.push("\\x"+c.toString(16))}}return d.join("")};baidu.string.filterFormat.js=baidu.string.filterFormat.escapeJs;
baidu.dom._styleFixer.opacity=baidu.browser.ie?{get:function(a){var c=a.style.filter;c&&c.indexOf("opacity=")>=0?(parseFloat(c.match(/opacity=([^)]*)/)[1])/100)+"":"1"
},set:function(a,d){var c=a.style;c.filter=(c.filter||"").replace(/alpha\([^\)]*\)/gi,"")+(d==1?"":"alpha(opacity="+d*100+")");
c.zoom=1}}:null;baidu.dom.prev=function(a){return baidu.dom._matchNode(a,"previousSibling","previousSibling")};baidu.cookie.setRaw=function(d,f,c){if(!baidu.cookie._isValidKey(d)){return
}c=c||{};var a=c.expires;if("number"==typeof c.expires){a=new Date();a.setTime(a.getTime()+c.expires)}document.cookie=d+"="+f+(c.path?"; path="+c.path:"")+(a?"; expires="+a.toGMTString():"")+(c.domain?"; domain="+c.domain:"")+(c.secure?"; secure":"")
};baidu.dom.removeClass=function(f,g){f=baidu.dom.g(f);var c=f.className.split(/\s+/).sort(),h=g.split(/\s+/).sort(),d=c.length,a=h.length;
for(;d&&a;){if(c[d-1]==h[a-1]){c.splice(--d,1)}else{if(c[d-1]<h[a-1]){a--}else{d--}}}f.className=c.join(" ");return f};baidu.removeClass=baidu.dom.removeClass;
baidu.ui.button=baidu.ui.button||{};baidu.ui.button.Button=baidu.ui.create(new Function).extend({uiType:"button",tplBody:'<div id="#{id}" class="#{class}" onmouseover="#{onmouseover}" onmousedown="#{onmousedown}" onmouseup="#{onmouseup}" onmouseout="#{onmouseout}" onclick="#{onclick}">#{content}</div>',disabled:false,getString:function(){var a=this;
return baidu.format(a.tplBody,{id:a.getId(),onmouseover:a.getCallString("_onMouseOver"),onmousedown:a.getCallString("_onMouseDown"),onmouseup:a.getCallString("_onMouseUp"),onmouseout:a.getCallString("_onMouseOut"),onclick:a.getCallString("_onClick"),content:a.content,"class":a.getClass(a.isDisabled()?"disable":"")})
},render:function(c){var a=this;baidu.dom.insertHTML(a.renderMain(c),"beforeEnd",a.getString())},_onMouseOver:function(){var a=this;
if(a.isDisabled()){return}a._changeStyle("hover");a.dispatchEvent("onmouseover")},_onMouseDown:function(){var a=this;if(a.isDisabled()){return
}a._changeStyle("press");a.dispatchEvent("onmousedown")},_onMouseUp:function(){var a=this;if(a.isDisabled()){return}a._changeStyle();
a.dispatchEvent("onmouseup")},_onClick:function(){var a=this;if(a.isDisabled()){return}a._changeStyle();a.dispatchEvent("onclick")
},_onMouseOut:function(){var a=this;if(a.isDisabled()){return}a._changeStyle();a.dispatchEvent("onmouseout")},_changeStyle:function(d){var c=this,a=c.getBody();
baidu.dom.removeClass(a,c.getClass("hover")+" "+c.getClass("press")+" "+c.getClass("disable"));d&&baidu.addClass(a,c.getClass(d))
},isDisabled:function(){return this.disabled},enable:function(){var a=this;a._changeStyle();a.disabled=false;a.dispatchEvent("onenable")
},disable:function(){var a=this;a._changeStyle("disable");a.disabled=true;a.dispatchEvent("ondisable")},dispose:function(){var a=this;
baidu.dom.remove(a.getBody());baidu.lang.Class.prototype.dispose.call(a)}});baidu.ui.dialog.Dialog.prototype.closeText="";
baidu.ui.dialog.Dialog.register(function(a){a.addEventListener("onload",function(){var d=this,c=new baidu.ui.button.Button({classPrefix:d.getClass("close")});
d.buttonInstance=c;c.onclick=function(){d.close()};c.render(d.getTitle())})});baidu.date=baidu.date||{};baidu.date.parse=function(f){var a=new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+\x24");
if("string"==typeof f){if(a.test(f)||isNaN(Date.parse(f))){var h=f.split(/ |T/),c=h.length>1?h[1].split(/[^\d]/):[0,0,0],g=h[0].split(/[^\d]/);
return new Date(g[0]-0,g[1]-1,g[2]-0,c[0]-0,c[1]-0,c[2]-0)}else{return new Date(f)}}return new Date()};baidu.dom.hasClass=function(d,f){d=baidu.dom.g(d);
var c=baidu.string.trim(f).split(/\s+/),a=c.length;f=d.className.split(/\s+/).join(" ");while(a--){if(!(new RegExp("(^| )"+c[a]+"( |\x24)")).test(f)){return false
}}return true};baidu.dom.toggleClass=function(a,c){if(baidu.dom.hasClass(a,c)){baidu.dom.removeClass(a,c)}else{baidu.dom.addClass(a,c)
}};baidu.lang.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)};baidu.string.toHalfWidth=function(a){return String(a).replace(/[\uFF01-\uFF5E]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-65248)
}).replace(/\u3000/g," ")};baidu.fx.scrollBy=function(c,j,a){if(!(c=baidu.dom.g(c))||typeof j!="object"){return null}var h={},g={};
h.x=j[0]||j.x||0;h.y=j[1]||j.y||0;var f=baidu.fx.create(c,baidu.object.extend({initialize:function(){var k=g.sTop=c.scrollTop;
var d=g.sLeft=c.scrollLeft;g.sx=Math.min(c.scrollWidth-c.clientWidth-d,h.x);g.sy=Math.min(c.scrollHeight-c.clientHeight-k,h.y)
},transition:function(d){return 1-Math.pow(1-d,2)},render:function(d){c.scrollTop=(g.sy*d+g.sTop);c.scrollLeft=(g.sx*d+g.sLeft)
},restore:function(){c.scrollTop=g.sTop;c.scrollLeft=g.sLeft}},a),"baidu.fx.scroll");return f.launch()};baidu.fx.scrollTo=function(f,a,c){if(!(f=baidu.dom.g(f))||typeof a!="object"){return null
}var g={};g.x=(a[0]||a.x||0)-f.scrollLeft;g.y=(a[1]||a.y||0)-f.scrollTop;return baidu.fx.scrollBy(f,g,c)};baidu.lang.isFunction=function(a){return"[object Function]"==Object.prototype.toString.call(a)
};baidu.dom.getAncestorBy=function(a,c){a=baidu.dom.g(a);while((a=a.parentNode)&&a.nodeType==1){if(c(a)){return a}}return null
};baidu.fx.move=function(c,a){if(!(c=baidu.dom.g(c))||baidu.dom.getStyle(c,"position")=="static"){return null}a=baidu.object.extend({x:0,y:0},a||{});
if(a.x==0&&a.y==0){return null}var d=baidu.fx.create(c,baidu.object.extend({initialize:function(){this.protect("top");this.protect("left");
this.originX=parseInt(baidu.dom.getStyle(c,"left"))||0;this.originY=parseInt(baidu.dom.getStyle(c,"top"))||0},transition:function(f){return 1-Math.pow(1-f,2)
},render:function(f){c.style.top=(this.y*f+this.originY)+"px";c.style.left=(this.x*f+this.originX)+"px"}},a),"baidu.fx.move");
return d.launch()};baidu.fx.moveTo=function(f,c,d){if(!(f=baidu.dom.g(f))||baidu.dom.getStyle(f,"position")=="static"||typeof c!="object"){return null
}var h=[c[0]||c.x||0,c[1]||c.y||0];var a=parseInt(baidu.dom.getStyle(f,"left"))||0;var j=parseInt(baidu.dom.getStyle(f,"top"))||0;
var g=baidu.fx.move(f,baidu.object.extend({x:h[0]-a,y:h[1]-j},d||{}));return g};baidu.event.EventArg=function(d,g){g=g||window;
d=d||g.event;var f=g.document;this.target=d.target||d.srcElement;this.keyCode=d.which||d.keyCode;for(var a in d){var c=d[a];
if("function"!=typeof c){this[a]=c}}if(!this.pageX&&this.pageX!==0){this.pageX=(d.clientX||0)+(f.documentElement.scrollLeft||f.body.scrollLeft);
this.pageY=(d.clientY||0)+(f.documentElement.scrollTop||f.body.scrollTop)}this._event=d};baidu.event.EventArg.prototype.preventDefault=function(){if(this._event.preventDefault){this._event.preventDefault()
}else{this._event.returnValue=false}return this};baidu.event.EventArg.prototype.stopPropagation=function(){if(this._event.stopPropagation){this._event.stopPropagation()
}else{this._event.cancelBubble=true}return this};baidu.event.EventArg.prototype.stop=function(){return this.stopPropagation().preventDefault()
};baidu.event.get=function(a,c){return new baidu.event.EventArg(a,c)};baidu.ajax.get=function(c,a){return baidu.ajax.request(c,{onsuccess:a})
};baidu.object.values=function(f){var a=[],d=0,c;for(c in f){if(f.hasOwnProperty(c)){a[d++]=f[c]}}return a};baidu.lang.instance=function(a){return window[baidu.guid]._instances[a]||null
};baidu.ui.dialog.Dialog.prototype.closeOnEscape=true;baidu.ui.dialog.Dialog.register(function(a){function c(g){g=window.event||g;
var f=g.keyCode||g.which,h,d;if(f==27){baidu.object.each(baidu.ui.dialog.instances,function(k,j){if(k=="show"){d=baidu.lang.instance(j);
if(!h||d.zIndex>h.zIndex){h=d}}});if(h){h.close()}}}if(a.closeOnEscape){if(!baidu.ui.dialog.keyboardEventReady){baidu.on(document,"keyup",c);
baidu.ui.dialog.keyboardEventReady=true;a.addEventListener("ondispose",function(){var d=true;baidu.object.each(baidu.ui.dialog.instances,function(g,f){d=false;
return false});if(d){baidu.event.un(document,"keyup",c);baidu.ui.dialog.keyboardEventReady=false}})}}});baidu.array.unique=function(g,h){var c=g.length,a=g.slice(0),f,d;
if("function"!=typeof h){h=function(k,j){return k===j}}while(--c>0){d=a[c];f=c;while(f--){if(h(d,a[f])){a.splice(c,1);break
}}}return a};baidu.url.escapeSymbol=function(a){return String(a).replace(/\%/g,"%25").replace(/&/g,"%26").replace(/\+/g,"%2B").replace(/\ /g,"%20").replace(/\//g,"%2F").replace(/\#/g,"%23").replace(/\=/g,"%3D")
};baidu.dom.hasAttr=function(d,c){d=baidu.g(d);var a=d.attributes.getNamedItem(c);return !!(a&&a.specified)};baidu.ui.get=function(a){var c;
if(baidu.lang.isString(a)){return baidu.lang.instance(a)}else{while((a=a.parentNode)!=document.body){if(!a||a.nodeType==9){return null
}if(c=baidu.dom.getAttr(a,"data-guid")){return baidu.lang.instance(c)}}}};baidu.ui.smartPosition=baidu.ui.smartPosition||{};
baidu.dom.getWindow=function(a){a=baidu.dom.g(a);var c=baidu.dom.getDocument(a);return c.parentWindow||c.defaultView||null
};baidu.dom._styleFilter[baidu.dom._styleFilter.length]={set:function(a,c){if(c.constructor==Number&&!/zIndex|fontWeight|opacity|zoom|lineHeight/i.test(a)){c=c+"px"
}return c}};baidu.ui.smartPosition.setBorderBoxStyles=function(d,f){var g=["marginTop","marginLeft","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth","paddingLeft","paddingRight","paddingTop","paddingBottom"],a={},c=g.length-1;
for(;c>=0;c--){a[g[c]]=parseFloat(baidu.getStyle(d,g[c]))||0}if(f.top){f.top-=a.marginTop}if(f.left){f.left-=a.marginLeft
}if(document.compatMode!="BackCompat"){if(f.width){f.width-=a.paddingLeft+a.paddingRight+a.borderLeftWidth+a.borderRightWidth
}if(f.height){f.height-=a.paddingTop+a.paddingBottom+a.borderTopWidth+a.borderBottomWidth}}return baidu.dom.setStyles(d,f)
};baidu.ui.smartPosition.SmartPosition=baidu.ui.create(function(a){var c=this;if(!this.once){baidu.event.on(baidu.dom.getWindow(c.source),"resize",function(){c.update()
})}}).extend({position:"bottomRight",insideScreen:"surround",update:function(n,m){var d=this,k={},a=d.source,h=baidu.page.getViewHeight(),l=baidu.page.getViewWidth(),f=a.offsetWidth,g=a.offsetHeight,c=a.offsetParent,j=(!c||c==document.body)?{left:0,top:0}:baidu.dom.getPosition(c);
baidu.object.extend(this,n||{});d.position=d.position.toLowerCase();d.coordinate.x=d.coordinate[0]||d.coordinate.x||d.coordinate.left||0;
d.coordinate.y=d.coordinate[1]||d.coordinate.y||d.coordinate.top||0;d.dispatchEvent("onbeforeupdate");k.left=d.coordinate.x-j.left-(d.position.indexOf("left")>=0?f:0);
k.top=d.coordinate.y-j.top-(d.position.indexOf("top")>=0?g:0);switch(d.insideScreen){case"surround":k.left=d.coordinate.x-j.left-(d.position.indexOf("right")>=0&&l-d.coordinate.x<f?f:0);
k.top=d.coordinate.y-j.top-(d.position.indexOf("bottom")>=0&&h-d.coordinate.y<g?g:0);break;case"fix":k.left=Math.max(0-parseFloat(baidu.dom.getStyle(a,"marginLeft"))||0,Math.min(k.left,baidu.page.getViewWidth()-f-j.left));
k.top=Math.max(0-parseFloat(baidu.dom.getStyle(a,"marginTop"))||0,Math.min(k.top,baidu.page.getViewHeight()-g-j.top));break;
default:}baidu.ui.smartPosition.setBorderBoxStyles(a,k);if(!m&&(h!=baidu.page.getViewHeight()||l!=baidu.page.getViewWidth())){d.update({},true)
}if(!m){d.dispatchEvent("onupdate")}}});baidu.ui.smartPosition.set=function(c,f,a){a=a||{};a.source=baidu.g(c);a.coordinate=f||[0,0];
var d=new baidu.ui.smartPosition.SmartPosition(a);d.update();return d};(function(){function f(l){var p=[],o=l.length-1,n,m;
for(;o>=0;o--){m=document.getElementsByTagName(l[o]);for(n=m.length-1;n>=0;n--){if(m[n]){p.push([m[n],null])}}}return p}function a(s,v){var t=[],p={};
baidu.object.extend(p,g.options);baidu.object.extend(p,v||{});p.hideFlash&&t.push("object");p.hideSelect&&t.push("select");
d.elementsToHide=f(t);var q=d.elementsToHide.length,n,o,m=s.getMain(),r=baidu.dom.getPosition(m),l=s.getId(),u=g.iframes[l];
if(baidu.ie&&!p.hideSelect){if(!u){u=g.iframes[l]=document.createElement("IFRAME");s.getMain().appendChild(u);u.style.display="none"
}u.src="javascript:void(0)";baidu.dom.setStyles(u,{zIndex:-1,display:"block",border:"none",position:"absolute",width:m.offsetWidth,height:m.offsetHeight,top:0,left:0})
}if(!d.elementsToHide){return}for(o=0;o<q;o++){n=d.elementsToHide[o];if(baidu.ui.get(n[0])!=s){h(n)}}}function k(m){if(baidu.ie){var l=m.getMain(),n=m.getId();
if(!g.iframes[n]){return}baidu.dom.setStyles(g.iframes[n],{width:l.offsetWidth,height:l.offsetHeight})}}function c(p){d.elementsToHide=d.elementsToHide||f(["object","select"]);
var l=d.elementsToHide.length,o,n,m=g.iframes[p.getId()];if(baidu.ie&&m){m.style.display="none"}if(!d.elementsToHide){return
}for(n=0;n<l;n++){o=d.elementsToHide[n];if(baidu.ui.get(o[0])!=p){j(o)}d.elementsToHide[n][0]=null}delete (d.elementsToHide)
}function h(l){if(l[1]===null){l[1]=l[0].style.visibility;l[0].style.visibility="hidden"}}function j(l){if(l[1]!==null){l[0].style.visibility=l[1];
l[1]=null}}var g={show:a,hide:c,update:k,iframes:[],options:{hideSelect:false,hideFlash:false}};baidu.ui.smartCover=baidu.ui.smartCover||g;
var d=baidu.ui.smartCover})();baidu.ui.dialog.Dialog.register(function(a){a.addEventListener("onopen",function(){baidu.ui.smartCover.show(this)
});a.addEventListener("onclose",function(){baidu.ui.smartCover.hide(this)});a.addEventListener("onupdate",function(){baidu.ui.smartCover.update(this)
})});baidu.ui.dialog.iframe=function(g,a){a=a||{};var c=new baidu.ui.dialog.Dialog(a),d="iframe",f;c.contentText=baidu.format(c.tplIframe,g,c.getId(d),c.getClass(d),c.iframeName?c.iframeName:c.getId(d));
c.render();f=c.getContent().firstChild;f.src=c.getContent().firstChild.src;baidu.on(f,"onload",function(){c.update(c)});c.open();
return c};baidu.ui.dialog.Dialog.extend({tplIframe:"<iframe width='100%' height='100%' frameborder='0' scrolling='no' src='#{0}' name='#{3}' id='#{1}' class='#{2}'></iframe>"});
baidu.array.hash=function(f,a){var g={},d=a&&a.length,c=0;for(;f[c++];){g[f[c]]=(d&&d>c)?a[c]:true}return g};baidu.dom.toggle=function(a){a=baidu.dom.g(a);
a.style.display=a.style.display=="none"?"":"none";return a};baidu.fx.current=function(f){if(!(f=baidu.dom.g(f))){return null
}var c,h,g=/\|([^\|]+)\|/g;do{if(h=f.getAttribute("baidu_current_effect")){break}}while((f=f.parentNode)&&f.nodeType==1);
if(!h){return null}if((c=h.match(g))){g=/\|([^\|]+)\|/;for(var d=0;d<c.length;d++){g.test(c[d]);c[d]=window[baidu.guid]._instances[RegExp["\x241"]]
}}return c};baidu.dom.children=function(c){c=baidu.dom.g(c);for(var a=[],d=c.firstChild;d;d=d.nextSibling){if(d.nodeType==1){a.push(d)
}}return a};baidu.ui.dialog.login=function(options){options=options||{};options=baidu.extend({titleText:"登录",loginURL:"http://passport.rdtest.baidu.com/api/?login&time=&token=&tpl=pp",regURL:"http://passport.rdtest.baidu.com/api/?reg&time=&token=&tpl=pp",loginJumpURL:window.location.href,regJumpURL:window.location.href,initialStatus:"login",onLoginSuccess:function(obj,json){},onLoginFailure:function(obj,json){},onRegisterSuccess:function(obj,json){},onRegisterFailure:function(obj,json){},loginContainerId:"loginContainer",regContainerId:"regContainer",loginPanelId:"loginPanel",regPanelId:"regPanel",tabId:"navTab",currentTabClass:"act",tplContainer:'		<div id="nav" class="passport-nav">            <ul id="#{tabId}" class="passport-nav-tab">                <li class="#{currentTabClass}" ><a href="##{idLoginPanel}" onclick="#{clickTabLogin};return false;" hidefocus="true" >登录</a></li>                <li><a href="##{idRegPanel}" onclick="#{clickTabReg};return false;" hidefocus="true" >注册</a></li>            </ul>            <p class="clear"></p>        </div>        <div id="content" class="passport-content">            <div id="#{idLoginPanel}" class="passport-login-panel">	            <div id="#{idLoginContainer}"></div>	            <div id="regDiv">                    <hr size="0" style="border-top:1px solid #AAAAAA">                    <div class="reg">没有百度账号？<a href="##{idRegPanel}" onclick="#{clickTabReg};return false;">立即注册百度账号</a></div>                </div>            </div>            <div id="#{idRegPanel}" class="passport-reg-panel" style="display:none">                <div id="#{idRegContainer}" class="passport-reg-container"></div>            </div>        </div>'},options);
options.changeTab=options.changeTab||function(type){var panelIds=[options.loginPanelId,options.regPanelId],tabs=baidu.dom.children(options.tabId),className=options.currentTabClass,curIndex=type=="login"?0:1;
for(var i=0;i<panelIds.length;++i){baidu.dom.removeClass(tabs[i],className);baidu.g(panelIds[i]).style.display="none"}baidu.dom.addClass(tabs[curIndex],className);
baidu.g(panelIds[curIndex]).style.display="";(type=="reg")?this.renderReg():this.renderLogin()};var dialogInstance=new baidu.ui.dialog.Dialog(options);
dialogInstance.render();dialogInstance.update({contentText:options.contentText||baidu.string.format(options.tplContainer,{clickTabLogin:dialogInstance.getCallRef()+".changeTab('login')",clickTabReg:dialogInstance.getCallRef()+".changeTab('reg')",idLoginContainer:options.loginContainerId,idRegContainer:options.regContainerId,idLoginPanel:options.loginPanelId,idRegPanel:options.regPanelId,tabId:options.tabId,currentTabClass:options.currentTabClass})});
baidu.extend(dialogInstance,{open:function(){var me=this;(me.initialStatus=="login")?me.renderLogin():me.changeTab("reg");
me.dispatchEvent("onopen")},close:function(){var me=this;me.loginJson=me.regJson=null;baidu.ui.dialog.Dialog.prototype.close.call(me)
},renderLogin:function(){var me=this;if(me.loginJson){return}baidu.sio.callByServer(me.loginURL,function(value){var json=me.loginJson=eval(value);
baidu.sio.callByBrowser(json.jslink,function(value){baidu.ui.dialog.Dialog.prototype.open.call(me);dialogInstance.loginDom=bdPass.LoginTemplate.render(json,options.loginContainerId,{renderSafeflg:true,onSuccess:options.onLoginSuccess,jumpUrl:options.loginJumpURL,onFailure:options.onLoginFailure});
dialogInstance.update()})})},renderReg:function(){var me=this;if(me.regJson){return}baidu.sio.callByServer(me.regURL,function(value){var json=me.regJson=eval(value);
baidu.sio.callByBrowser(json.jslink,function(value){baidu.ui.dialog.Dialog.prototype.open.call(me);dialogInstance.registerDom=bdPass.RegTemplate.render(json,options.regContainerId,{renderSafeflg:true,onSuccess:options.onRegisterSuccess,jumpUrl:options.regJumpURL,onFailure:options.onRegisterFailure});
dialogInstance.update()})})}});return dialogInstance};baidu.dom.last=function(a){return baidu.dom._matchNode(a,"previousSibling","lastChild")
};baidu.dom.hide=function(a){a=baidu.dom.g(a);a.style.display="none";return a};baidu.hide=baidu.dom.hide;baidu.lang.isElement=function(a){return !!(a&&a.nodeName&&a.nodeType==1)
};baidu.json.encode=function(a){return baidu.json.stringify(a)};baidu.array.each=function(h,f){var d,g,c,a=h.length;if("function"==typeof f){for(c=0;
c<a;c++){g=h[c];d=f.call(h,g,c);if(d===false){break}}}return h};baidu.each=baidu.array.each;baidu.array.lastIndexOf=function(d,f){var a=d.length,c=f;
if("function"!=typeof f){c=function(g){return f===g}}while(a--){if(true===c.call(d,d[a],a)){return a}}return -1};baidu.fx.zoomIn=function(c,a){if(!(c=baidu.dom.g(c))){return null
}a=baidu.object.extend({to:1,from:0.1,restoreAfterFinish:true,transition:function(d){return Math.pow(d,2)}},a||{});return baidu.fx.scale(c,a)
};baidu.dom.contains=function(a,c){var d=baidu.dom.g;a=d(a);c=d(c);return a.contains?a!=c&&a.contains(c):!!(a.compareDocumentPosition(c)&16)
};baidu.lang.isBoolean=function(a){return typeof a==="boolean"};baidu.lang.isDate=function(a){return{}.toString.call(a)==="[object Date]"&&a.toString()!=="Invalid Date"&&!isNaN(a)
};baidu.dom._styleFixer.textOverflow=(function(){var c={};function a(g){var h=g.length;if(h>0){h=g[h-1];g.length--}else{h=null
}return h}function d(g,h){g[baidu.browser.firefox?"textContent":"innerText"]=h}function f(q,k,u){var m=baidu.browser.ie?q.currentStyle||q.style:getComputedStyle(q,null),t=m.fontWeight,s="font-family:"+m.fontFamily+";font-size:"+m.fontSize+";word-spacing:"+m.wordSpacing+";font-weight:"+((parseInt(t)||0)==401?700:t)+";font-style:"+m.fontStyle+";font-variant:"+m.fontVariant,g=c[s];
if(!g){m=q.appendChild(document.createElement("div"));m.style.cssText="float:left;"+s;g=c[s]=[];for(p=0;p<256;p++){p==32?(m.innerHTML="&nbsp;"):d(m,String.fromCharCode(p));
g[p]=m.offsetWidth}d(m,"一");g[256]=m.offsetWidth;d(m,"一一");g[257]=m.offsetWidth-g[256]*2;g[258]=g[".".charCodeAt(0)]*3+g[257]*3;
q.removeChild(m)}for(var n=q.firstChild,r=g[256],j=g[257],h=g[258],w=[],u=u?h:0;n;n=n.nextSibling){if(k<u){q.removeChild(n)
}else{if(n.nodeType==3){for(var p=0,v=n.nodeValue,l=v.length;p<l;p++){m=v.charCodeAt(p);w[w.length]=[k,n,p];k-=(p?j:0)+(m<256?g[m]:r);
if(k<u){break}}}else{m=n.tagName;if(m=="IMG"||m=="TABLE"){m=n;n=n.previousSibling;q.removeChild(m)}else{w[w.length]=[k,n];
k-=n.offsetWidth}}}}if(k<u){while(m=a(w)){k=m[0];n=m[1];m=m[2];if(n.nodeType==3){if(k>=h){n.nodeValue=n.nodeValue.substring(0,m)+"...";
return true}else{if(!m){q.removeChild(n)}}}else{if(f(n,k,true)){return true}else{q.removeChild(n)}}}q.innerHTML=""}}return{get:function(h,j){var g=baidu.browser;
return(g.opera?j.OTextOverflow:g.firefox?h._baiduOverflow:j.textOverflow)||"clip"},set:function(h,k){var g=baidu.browser;
if(h.tagName=="TD"||h.tagName=="TH"||g.firefox){h._baiduHTML&&(h.innerHTML=h._baiduHTML);if(k=="ellipsis"){h._baiduHTML=h.innerHTML;
var l=document.createElement("div"),j=h.appendChild(l).offsetWidth;h.removeChild(l);f(h,j)}else{h._baiduHTML=""}}l=h.style;
g.opera?(l.OTextOverflow=k):g.firefox?(h._baiduOverflow=k):(l.textOverflow=k)}}})();baidu.fx.opacity=function(c,a){if(!(c=baidu.dom.g(c))){return null
}a=baidu.object.extend({from:0,to:1},a||{});var f=c;var d=baidu.fx.create(f,baidu.object.extend({initialize:function(){baidu.dom.show(c);
if(baidu.browser.ie){this.protect("filter")}else{this.protect("opacity");this.protect("KHTMLOpacity")}this.distance=this.to-this.from
},render:function(g){var h=this.distance*g+this.from;if(!baidu.browser.ie){f.style.opacity=h;f.style.KHTMLOpacity=h}else{f.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity:"+Math.floor(h*100)+")"
}}},a),"baidu.fx.opacity");return d.launch()};baidu.fx.fadeIn=function(c,a){if(!(c=baidu.dom.g(c))){return null}var d=baidu.fx.opacity(c,baidu.object.extend({from:0,to:1,restoreAfterFinish:true},a||{}));
d._className="baidu.fx.fadeIn";return d};baidu.string.encodeHTML=function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
};baidu.encodeHTML=baidu.string.encodeHTML;baidu.date.format=function(a,h){if("string"!=typeof h){return a.toString()}function f(o,n){h=h.replace(o,n)
}var c=baidu.number.pad,j=a.getFullYear(),g=a.getMonth()+1,m=a.getDate(),k=a.getHours(),d=a.getMinutes(),l=a.getSeconds();
f(/yyyy/g,c(j,4));f(/yy/g,c(j.toString().slice(2),2));f(/MM/g,c(g,2));f(/M/g,g);f(/dd/g,c(m,2));f(/d/g,m);f(/HH/g,c(k,2));
f(/H/g,k);f(/hh/g,c(k%12,2));f(/h/g,k%12);f(/mm/g,c(d,2));f(/m/g,d);f(/ss/g,c(l,2));f(/s/g,l);return h};baidu.fx.collapse=function(d,c){if(!(d=baidu.dom.g(d))){return null
}var g=d,a;var f=baidu.fx.create(g,baidu.object.extend({initialize:function(){this.protect("height");this.protect("overflow");
this.restoreAfterFinish=true;a=g.offsetHeight;g.style.overflow="hidden"},transition:function(h){return Math.pow(1-h,2)},render:function(h){g.style.height=Math.floor(h*a)+"px"
},finish:function(){baidu.dom.hide(g)}},c||{}),"baidu.fx.expand_collapse");return f.launch()};baidu.ui.dialog.create=function(a){var c=new baidu.ui.dialog.Dialog(a);
c.render();return c};baidu.lang.inherits=function(j,g,f){var d,h,a=j.prototype,c=new Function();c.prototype=g.prototype;h=j.prototype=new c();
for(d in a){h[d]=a[d]}j.prototype.constructor=j;j.superClass=g.prototype;if("string"==typeof f){h._className=f}};baidu.inherits=baidu.lang.inherits;
baidu.url.jsonToQuery=function(g,f){var c=[],a=0,d,j,h;f=f||function(k){return baidu.url.escapeSymbol(k)};for(d in g){if(g.hasOwnProperty(d)){j=g[d];
if(Object.prototype.toString.call(j)=="[object Array]"){h=j.length;while(h--){c[a++]=d+"="+f(j[h],d)}}else{c[a++]=d+"="+f(j,d)
}}}return c.join("&")};baidu.fx.zoomOut=function(c,a){if(!(c=baidu.dom.g(c))){return null}a=baidu.object.extend({to:0.1,from:1,opacityTrend:false,restoreAfterFinish:true,transition:function(f){return 1-Math.pow(1-f,2)
}},a||{});var d=baidu.fx.scale(c,a);d.addEventListener("onafterfinish",function(){baidu.dom.hide(this.element)});return d
};baidu.lang.createSingle=function(d){var f=new baidu.lang.Class();for(var a in d){f[a]=d[a]}return f};baidu.dom.ddManager=baidu.lang.createSingle({_targetsDroppingOver:{}});
baidu.dom.droppable=function(f,c){c=c||{};var d=baidu.dom.ddManager,h=baidu.dom.g(f),g=function(k){var j=d._targetsDroppingOver;
if(baidu.dom.intersect(h,k.DOM)){if(!j[h]){(typeof c.ondropover=="function")&&c.ondropover.call(h,k.DOM);d.dispatchEvent("ondropover",{trigger:k.DOM,reciever:h});
j[h]=true}}else{if(j[h]){(typeof c.ondropout=="function")&&c.ondropout.call(h,k.DOM);d.dispatchEvent("ondropout",{trigger:k.DOM,reciever:h})
}delete j[h]}},a=function(j){if(baidu.dom.intersect(h,j.DOM)){typeof c.ondrop=="function"&&c.ondrop.call(h,j.DOM);d.dispatchEvent("ondrop",{trigger:j.DOM,reciever:h})
}delete d._targetsDroppingOver[h]};d.addEventListener("ondrag",g);d.addEventListener("ondragend",a);return{cancel:function(){d.removeEventListener("ondrag",g);
d.removeEventListener("ondragend",a)}}};baidu.fx.fadeOut=function(c,a){if(!(c=baidu.dom.g(c))){return null}var d=baidu.fx.opacity(c,baidu.object.extend({from:1,to:0,restoreAfterFinish:true},a||{}));
d.addEventListener("onafterfinish",function(){baidu.dom.hide(this.element)});d._className="baidu.fx.fadeOut";return d};baidu.fx.remove=function(c,a){return baidu.fx.fadeOut(c,baidu.object.extend(a||{},{onafterfinish:function(){baidu.dom.remove(this.element)
}}))};baidu.ajax.form=function(a,d){d=d||{};var h=a.elements,p=h.length,c=a.getAttribute("method"),g=a.getAttribute("action"),v=d.replacer||function(x,w){return x
},s={},u=[],n,r,t,o,f,j,k,m,l;function q(w,x){u.push(w+"="+x)}for(n in d){if(d.hasOwnProperty(n)){s[n]=d[n]}}for(n=0;n<p;
n++){r=h[n];o=r.name;if(!r.disabled&&o){t=r.type;f=r.value;switch(t){case"radio":case"checkbox":if(!r.checked){break}case"textarea":case"text":case"password":case"hidden":case"select-one":q(o,v(f,o));
break;case"select-multiple":j=r.options;m=j.length;for(k=0;k<m;k++){l=j[k];if(l.selected){q(o,v(l.value,o))}}break}}}s.data=u.join("&");
s.method=a.getAttribute("method")||"POST";return baidu.ajax.request(g,s)};baidu.object.keys=function(f){var a=[],d=0,c;for(c in f){if(f.hasOwnProperty(c)){a[d++]=c
}}return a};baidu.string.escapeReg=function(a){return String(a).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])","g"),"\\\x241")
};baidu.dom.q=function(k,g,c){var l=[],f=baidu.string.trim,j,h,a,d;if(!(k=f(k))){return null}if("undefined"==typeof g){g=document
}else{g=baidu.dom.g(g);if(!g){return l}}c&&(c=f(c).toUpperCase());if(g.getElementsByClassName){a=g.getElementsByClassName(k);
j=a.length;for(h=0;h<j;h++){d=a[h];if(c&&d.tagName!=c){continue}l[l.length]=d}}else{k=new RegExp("(^|\\s)"+baidu.string.escapeReg(k)+"(\\s|\x24)");
a=c?g.getElementsByTagName(c):(g.all||g.getElementsByTagName("*"));j=a.length;for(h=0;h<j;h++){d=a[h];k.test(d.className)&&(l[l.length]=d)
}}return l};baidu.q=baidu.Q=baidu.dom.q;baidu.fx.moveBy=function(c,h,a){if(!(c=baidu.dom.g(c))||baidu.dom.getStyle(c,"position")=="static"||typeof h!="object"){return null
}var g={};g.x=h[0]||h.x||0;g.y=h[1]||h.y||0;var f=baidu.fx.move(c,baidu.object.extend(g,a||{}));return f};baidu.string.wbr=function(a){return String(a).replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi,"$&<wbr>").replace(/><wbr>/g,">")
};baidu.array.indexOf=function(f,g,c){var a=f.length,d=g;c=Number(c)||0;c=c<0?Math.ceil(c):Math.floor(c);c=Math.min(Math.max(c,0),a);
if("function"!=typeof g){d=function(h){return g===h}}for(;c<a;c++){if(true===d.call(f,f[c],c)){return c}}return -1};baidu.dom.insertAfter=function(f,d){var c,a;
c=baidu.dom._g;f=c(f);d=c(d);a=d.parentNode;if(a){a.insertBefore(f,d.nextSibling)}return f};baidu.dom.first=function(a){return baidu.dom._matchNode(a,"nextSibling","firstChild")
};baidu.lang.module=function(name,module,owner){var packages=name.split("."),len=packages.length-1,packageName,i=0;if(!owner){try{if(!(new RegExp("^[a-zA-Z_\x24][a-zA-Z0-9_\x24]*\x24")).test(packages[0])){throw""
}owner=eval(packages[0]);i=1}catch(e){owner=window}}for(;i<len;i++){packageName=packages[i];if(!owner[packageName]){owner[packageName]={}
}owner=owner[packageName]}if(!owner[packages[len]]){owner[packages[len]]=module}};baidu.fx.expand=function(d,c){if(!(d=baidu.dom.g(d))){return null
}var g=d,a;var f=baidu.fx.create(g,baidu.object.extend({initialize:function(){baidu.dom.show(g);this.protect("height");this.protect("overflow");
a=g.offsetHeight;g.style.overflow="hidden";g.style.height="1px"},transition:function(h){return Math.sqrt(h)},render:function(h){g.style.height=Math.floor(h*a)+"px"
}},c||{}),"baidu.fx.expand_collapse");return f.launch()};try{if(/(\d+\.\d)/.test(external.max_version)){baidu.browser.maxthon=parseFloat(RegExp["\x241"])
}}catch(e){}baidu.dom.empty=function(a){a=baidu.dom.g(a);while(a.firstChild){a.removeChild(a.firstChild)}return a};baidu.dom.getText=function(f){var c="",g,d=0,a;
f=baidu._g(f);if(f.nodeType===3||f.nodeType===4){c+=f.nodeValue}else{if(f.nodeType!==8){g=f.childNodes;for(a=g.length;d<a;
d++){c+=baidu.dom.getText(g[d])}}}return c};baidu.cookie.set=function(c,d,a){baidu.cookie.setRaw(c,encodeURIComponent(d),a)
};baidu.ui.dialog.Dialog.extend({acceptText:"确定",cancelText:"取消",onaccept:function(){},oncancel:function(){},accept:function(){if(this.dispatchEvent("onaccept")){this.close()
}},cancel:function(){if(this.dispatchEvent("oncancel")){this.close()}},tplConfirm:"<div id='#{id}' class='#{class}' onclick=#{onclick}>#{content}</div>"});
baidu.ui.dialog.Dialog.register(function(a){a.addEventListener("onload",function(){var f=this,d="accept",g="cancel",h="dispatchEvent";
function c(j){return baidu.format(f.tplConfirm,{id:f.getId(j),"class":f.getClass(j),onclick:f.getCallString(j),content:f[j+"Text"]})
}if(f.type=="confirm"){baidu.dom.insertHTML(f.getId("footer"),"beforeEnd",c(d)+c(g))}})});baidu.ui.dialog.confirm=function(c,a){a=a||{};
a.type="confirm";if(baidu.isString(c)){a.contentText=c}else{a.content=c}var d=new baidu.ui.dialog.Dialog(a);if(typeof a.autoDispose=="undefined"||a.autoDispose){d.addEventListener("onclose",function(){this.dispose()
})}d.render();if(typeof a.autoOpen=="undefined"||a.autoOpen){d.open()}return d};baidu.page.createStyleSheet=function(a){var h=a||{},f=h.document||document,d;
if(baidu.browser.ie){if(!h.url){h.url=""}return f.createStyleSheet(h.url,h.index)}else{d="<style type='text/css'></style>";
h.url&&(d="<link type='text/css' rel='stylesheet' href='"+h.url+"'/>");baidu.dom.insertHTML(f.getElementsByTagName("HEAD")[0],"beforeEnd",d);
if(h.url){return null}var c=f.styleSheets[f.styleSheets.length-1],g=c.rules||c.cssRules;return{self:c,rules:c.rules||c.cssRules,addRule:function(j,l,k){if(c.addRule){return c.addRule(j,l,k)
}else{if(c.insertRule){isNaN(k)&&(k=g.length);return c.insertRule(j+"{"+l+"}",k)}}},removeRule:function(j){if(c.removeRule){c.removeRule(j)
}else{if(c.deleteRule){isNaN(j)&&(j=0);c.deleteRule(j)}}}}}};baidu.lang.toArray=function(c){if(c===null||c===undefined){return[]
}if(baidu.lang.isArray(c)){return c}if(typeof c.length!=="number"||typeof c==="string"||baidu.lang.isFunction(c)){return[c]
}if(c.item){var a=c.length,d=new Array(a);while(a--){d[a]=c[a]}return d}return[].slice.call(c)};baidu.cookie.remove=function(c,a){a=a||{};
a.expires=new Date(0);baidu.cookie.setRaw(c,"",a)};baidu.string.filterFormat.escapeString=function(a){if(!a||"string"!=typeof a){return a
}return a.replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;").replace(/>/g,"&#62;").replace(/\\/g,"&#92;").replace(/\//g,"&#47;")
};baidu.string.filterFormat.e=baidu.string.filterFormat.escapeString;baidu.number.comma=function(c,a){if(!a||a<1){a=3}c=String(c).split(".");
c[0]=c[0].replace(new RegExp("(\\d)(?=(\\d{"+a+"})+$)","ig"),"$1,");return c.join(".")};baidu.url.getQueryValue=function(c,d){var f=new RegExp("(^|&|\\?|#)"+baidu.string.escapeReg(d)+"=([^&]*)(&|\x24)","");
var a=c.match(f);if(a){return a[2]}return null};baidu.ui.modal=baidu.ui.modal||{mainId:null,showing:[],instances:{}};baidu.ui.modal.Modal=baidu.ui.create(function(a){}).extend({uiType:"MODAL",color:"#000000",opacity:0.6,zIndex:1000,tplDOM:"<div id='#{id}' class='#{class}'></div>",getString:function(){var a=this;
return baidu.format(a.tplDOM,{id:a.getId(),"class":a.getClass()})},render:function(){var d=this,c={width:"100%",height:"100%",left:0,top:0,display:"none"},a;
if(baidu.ui.modal.mainId){d.mainId=baidu.ui.modal.mainId;return}a=d.renderMain();if(baidu.browser.ie&&baidu.browser.ie<=6||document.compatMode=="BackCompat"){c={width:baidu.page.getViewWidth(),height:baidu.page.getViewHeight(),left:baidu.page.getScrollLeft(),top:baidu.page.getScrollTop(),position:"absolute",display:"none"};
if(!d._alreadyBindEvent){baidu.on(window,"resize",function(f){a.style.width=baidu.page.getViewWidth();a.style.height=baidu.page.getViewHeight()
});baidu.on(window,"scroll",function(f){a.style.left=baidu.page.getScrollLeft()+"px";a.style.top=baidu.page.getScrollTop()+"px"
});d._alreadyBindEvent=true}}baidu.dom.setStyles(a,c);baidu.ui.modal.mainId=d.mainId},update:function(c){c=c||{};var d=this,a=d.getMain();
a.innerHTML=d.getString();a.setAttribute("data-guid",d.guid);baidu.object.extend(d,c);baidu.dom.setStyles(d.getMain(),{opacity:d.opacity,"background-color":d.color,"z-index":d.zIndex})
},show:function(c){var d=this,a=this.getMain(),f=baidu.ui.modal.instances;if(f[d.guid]!="show"){baidu.ui.modal.showing.push(this);
f[d.guid]="show"}d.update(c);a.style.display="block";if((!baidu.browser.ie||baidu.browser.ie>=7)&&document.compatMode!="BackCompat"){a.style.position="fixed"
}if(d.targetUI){baidu.ui.smartCover.show(d.targetUI,baidu.ie?{hideSelect:true}:{})}},hide:function(){var c=this,a=baidu.ui.modal.showing;
a.pop();baidu.ui.modal.instances[c.guid]="hide";if(!c.getBody()){return}c.getMain().style.display="none";if(c.targetUI){baidu.ui.smartCover.hide(c.targetUI)
}if(a[0]){a[0].show()}},getBody:function(){return baidu.g(this.getId())}});baidu.ui.modal.create=function(a){a=a||{};var c=new baidu.ui.modal.Modal(a);
c.render();return c};baidu.object.extend(baidu.ui.dialog.Dialog.prototype,{modal:true,modalColor:"#000000",modalOpacity:0.4});
baidu.ui.dialog.Dialog.register(function(a){a.addEventListener("onopen",function(){var d=this;if(d.modal){if(!d.modalInstance){d.modalInstance=baidu.ui.modal.create({targetUI:d,color:d.modalColor,opacity:d.modalOpacity,zIndex:d.modalZIndex?d.modalZIndex:d.zIndex-1})
}d.modalInstance.show()}});function c(){if(a.modal&&a.modalInstance){a.modalInstance.hide()}}a.addEventListener("onclose",c);
a.addEventListener("ondispose",c)});baidu.dom.next=function(a){return baidu.dom._matchNode(a,"nextSibling","nextSibling")
};baidu.ajax.post=function(c,d,a){return baidu.ajax.request(c,{onsuccess:a,method:"POST",data:d})};baidu.array.remove=function(d,f){var a=d.length,c=f;
if("function"!=typeof f){c=function(g){return f===g}}while(a--){if(true===c.call(d,d[a],a)){d.splice(a,1)}}};baidu.dom.ready=function(){var d=false,g=false,f=[];
function a(){if(!d){d=true;for(var k=0,h=f.length;k<h;k++){f[k]()}}}function c(){if(g){return}g=true;var l=document,j=window,h=baidu.browser.opera;
if(l.addEventListener&&!h){l.addEventListener("DOMContentLoaded",h?function(){if(d){return}for(var m=0;m<l.styleSheets.length;
m++){if(l.styleSheets[m].disabled){setTimeout(arguments.callee,0);return}}a()}:a,false)}else{if(baidu.browser.ie&&j==top){(function(){if(d){return
}try{l.documentElement.doScroll("left")}catch(m){setTimeout(arguments.callee,0);return}a()})()}else{if(baidu.browser.safari){var k;
(function(){if(d){return}if(l.readyState!="loaded"&&l.readyState!="complete"){setTimeout(arguments.callee,0);return}if(k===undefined){k=0;
var p=l.getElementsByTagName("style");var n=l.getElementsByTagName("link");if(p){k+=p.length}if(n){for(var o=0,m=n.length;
o<m;o++){if(n[o].getAttribute("rel")=="stylesheet"){k++}}}}if(l.styleSheets.length!=k){setTimeout(arguments.callee,0);return
}a()})()}}}j.attachEvent?j.attachEvent("onload",a):j.addEventListener("load",a,false)}return function(h){c();d?h():(f[f.length]=h)
}}();baidu.dom.getAncestorByTag=function(c,a){c=baidu.dom.g(c);a=a.toUpperCase();while((c=c.parentNode)&&c.nodeType==1){if(c.tagName==a){return c
}}return null};baidu.dom._styleFixer["float"]=baidu.browser.ie?"styleFloat":"cssFloat";