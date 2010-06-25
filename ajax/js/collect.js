/**
 * @author zhangyi
 */

//声明命名空间
(function() {
	var namespaces = ["FWK","System","FWKElement","FWKBrowser","FWKEvent","FWKUtil","FWKAjax","FWKString"];
	for(var i = 0,j = namespaces.length; i < j; i++) {
		if(window[namespaces[i]] != 'object') window[namespaces[i]] = {};
	}
})();

//追加方法
(function() {
	var ua = navigator.userAgent.toLowerCase();
	
	/**
	 * compatMode 设置或获取表明此对象是否应用标准兼容模式的值 
	 * BackCompat Standards-compliant mode is not switched on. 
	 * CSS1Compat Standards-compliant mode is switched on. 
	 * ie只要包含<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">就认为是标准型的，其它相反
	 */
	var isStrict = document.compatMode == "CSS1Compat",
		isOpera  = ua.indexOf("opera")>-1,
		isSafari = (/webkit|khtml/).test(ua),
		isSafari3 = isSafari && ua.indexOf("webkit/5") != -1,
		isIE = !isOpera && ua.indexOf("msie") > -1,
		isIE6 = !isOpera && ua.indexOf("msie 6")>-1,
		isIE7 = !isOpera && ua.indexOf("msie 7")>-1,
		isGecko = !isSafari && ua.indexOf("gecko") > -1,
		isBorderBox = isIE && !isStrict,
		isWindows = (ua.indexOf("windows") != -1 || ua.indexOf("win32") != -1),
		isMac = (ua.indexOf("macintosh") != -1 || ua.indexOf("mac os x") != -1),
		isAir = (ua.indexOf("adobeair") != -1),
		isLinux = (ua.indexOf("linux") != -1),
		isSecure = window.location.href.toLowerCase().indexOf("https") === 0;
		
		/**
		 * execCommand 在当前文档、当前选中区或给定范围上执行命令
		 * document.execCommand("ForeColor","false","#FF0033");
		 * bSuccess = object.execCommand(sCommand [, bUserInterface] [, vValue])
		 */
		if(isIE && !isIE7) {
			try{
				document.execCommand("BackgroundImageCache",false,true);
			}catch(ex) {}
		}
		
		var Browsers = {
			isOpera : isOpera,
			isSafari : isSafari,
			isSafari3 : isSafari3,
			isSafari2 : isSafari && !isSafari3,
			isIE : isIE,
			isIE7 : isIE7,
			isIE6 : isIE6,
			isGecko : isGecko,
			isBorderBox : isBorderBox,
			isLinux : isLinux,
			isWindows : isWindows,
			isMac : isMac,
			isAir : isAir
		}
		
		for(var p in Browsers) {
			FWK[p] = FWKBrowser[p] = Browsers[p];
		}
		
		/*FWKElement　作用范围*/
		window.FWK$ = window.$ = FWKElement.$ = function(id) {
			return typeof id == 'string'?document.getElementById(id):id;
		}
		
		FWKElement.removeNode = isIE?function() {
			var d;
			return function(node) {
				if(node && node.tagName != 'BODY') {
					d = d || document.createElement('DIV');
					d.appendChild(node);
					d.innerHTML = '';
				}
			}
		}():function(node) {
			if(node && node.parentNode && node.tagName!='BODY') {
				node.parentNode.removeChild(node);
			}
		}
		
		/*FWKEvent 作用范围*/
		FWKEvent.addEvent = function(el,fn,handler) {
			if(isIE) {
				el.attachEvent("on"+fn,handler);
			} else {
				el.addEventListener(fn,handler,false);
			}
		}
		
		FWKEvent.removeEvent = function(el,fn,handler) {
			if(isIE) {
				el.detachEvent("on"+fn,handler);
			} else {
				el.removeEventListener(fn,handler,false);
			}
		}
		
		/*DOM加载完成以后回调的方法*/
		FWKEvent.addDomLoadEvent = function(_fn){
			try{
				document.addEventListener("DOMContentLoaded", _fn, false);
			}
			catch(e){
				document.attachEvent("onreadystatechange", function(){
					if (document.readyState == "complete" || document.readyState == "loaded") {
						_fn.call();
					}
				});
			}
		}
		
		FWKUtil.insertWBR = (function() {
			var textAreaCache = null;
			
			function getContainer() {
				var textarea = document.getElementById('insertWBR_container');
				if(!textarea) {
					textarea = document.createElement('TEXTAREA');
					textarea.id = 'insertWBR_container';
					textarea.style.display = 'none';
					document.body.insertBefore(textarea,document.body.firstChild);
				}
				return (textAreaCache = textarea)
			}
			
			return function(text,step) {
				var textarea = textAreaCache || getContainer();
				if(!textarea) return text;
				
				textarea.innerHTML = text.replace(/&/g,'&amp;').replace(/</g,"&lt;").replace(/>/g,"&gt;");
				var string = textarea.value;
				
				var step = (step || 5), reg = new RegExp("(\\S{" + step + "})", "gi");
				var result = string.replace(/(<[^>]+>)/gi,"$1<wbr/>").replace(/(>|^)([^<]+)(<|$)/gi, function(a,b,c,d){
					if(c.length < step) return a;
					return b + c.replace(reg, "$1<wbr/>") + d;
				}).replace(/&([^;]*)(<wbr\/?>)([^;]*);/g,'&$1$3;');
				return result;
			}
		})();
		
		/*FWKAjax作用范围*/
		FWKAjax.getXHR = function() {
			var xhr = null;
			try {
				return (xhr = new XMLHttpRequest());
			} catch(ex) {
				for(var i = 0,a = ['MSXML3','MSXML2','Microsoft'];i<a.length;i++) {
					try {
						xhr = new ActiveXObject(a[i]+'.XMLHTTP');
						break;
					} catch(ex) {}
				}
			}
			return xhr;
		}
		
		/**
		 * 异步的ajax请求
		 * @param {Object} url
		 * @param {Object} json
		 */
		FWKAjax.request = function(url,json) {
			var xhr = this.getXHR();
			if(!xhr) {
				throw new Error("cant't initialize xhr instance.");
			}
			
			var options = {};
			options.method    =  (json.method || 'get').toLowerCase();
			options.asyn 	  =  true;
			options.onSuccess =  json.onSuccess || function() {};
			options.onFailure =  json.onFailure || function() {new Image().src="";};
			
			options.postData = json.postData || null;
			
			xhr.open(options.method,url,options.asyn);
			
			if("post" == options.method.toLowerCase()) {
				xhr.setRequestHeader("Content-Type","application/x-www-form-urllencoded");
			}
			
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4) {
					if(xhr.status == 0 || xhr.status == 200) {
						var rText = xhr.responseText;
						xhr = FWKAjax.loadXML(rText);
						options.onSuccess(xhr);
					} else {
						options.onFailure(xhr);
					}
				}
			}
			xhr.send(options.postData);
		}
		
		
		FWKAjax.loadXML = function(xmlString) {
			try {
				XMLDoc = new ActiveXObject("Microsoft.XMLDOM");
			} catch(e) {
				try {
					XMLDoc = document.implementation.createDocument("text/xml", "", null); 
				}catch(e){
					return null;
				}
			}
			
			if(FWKBrowser.isIE){
				var flag = XMLDoc.loadXML(xmlString);
				if(flag){
					return XMLDoc;
				}
				else{
					return null;
				}
			}
			else{
				try
				{
					var childNodes = XMLDoc.childNodes;
					for (var i = childNodes.length - 1; i >= 0; i--)
						XMLDoc.removeChild(childNodes[i]);
	
					var dp = new DOMParser();
					var newDOM = dp.parseFromString(xmlString, "text/xml");
					var newElt = XMLDoc.importNode(newDOM.documentElement, true);
					XMLDoc.appendChild(newElt);
					return XMLDoc;
				}
				catch (ex)
				{
					return null;
				}
			}
		}
		
		/*异步加载JS*/
		FWKAjax.loadJS = (function() {
			var head;
			return function(jsUrl) {
				head = head || document.getElementsByTagName("head")[0];
				var s = document.createElement("script");
				s.type = "text/javascript";
				s.src = jsUrl;
				head.appendChild(s);
			}
		})();
		
		FWK.isUndefined = function(obj) {
			return typeof obj == 'undefined';
		}
		
		FWK.isString = function(str) {
			return typeof str == 'string';
		}
		
		FWK.isElement = function(obj) {
			return obj && obj.nodeType == 1;
		}
		
		FWK.isFunction = function(fn) {
			return typeof fn == 'function';
		}
		
		FWK.isObject = function(obj) {
			return typeof obj == 'object';
		}
		
		FWK.isArray = function(arr) {
			return arr !== null && typeof arr == 'object' && 'splice' in arr && 'join' in arr;
		}
		
		FWK.isNumber = function(obj) {
			return typeof obj == 'number';
		}
		
		FWK.isJSON = function(str) {
			if(!isString(str) || str === '') return false;
			str = str.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
			return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
		}
		
		/*字符串操作和判断方法*/
		FWKString  = {
			n12br:function(str) {
				return str.replace(/[^>]/g,'$1<br/>');
			},
			trim:function(str) {
				return str.replace(/^\s+|\s+$/g,"");
			},
			ltrim:function(str) {
				return str.replace(/^\s+/,"");
			},
			rtrim:function(str) {
				return str.replace(/\s+$/,"");
			},
			strip:function(str) {
				return str.replace(/^\s+/, '').replace(/\s+$/, '');
			},
			stripTags: function(str) {
				return str.replace(/<\/?[^>]+>/gi, '');
			},
			escapeHTML: function(str) {
				return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
			},
			unescapeHTML: function(str) {
				return str.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').replace(/&quot;/g,'"');
			},
			contains:function(str,key){
				return str.indexOf(key) > -1;
			},
			startsWith:function(str,key){
				return str.indexOf(key) === 0;
			},
			endsWith:function(str,key){
			    var d = str.length - key.length;
			    return d >= 0 && str.lastIndexOf(key) === d;	
			},
			isBlank:function(str){
				return FWKString.strip(str) == '';
			},
			isEmail:function(str){
				return /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/.test(str);
			},
			isPhone:function(str){
				return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/.test(str);
			},
			isMobile:function(str){
				return /^((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(15[389]\d{8}))$/.test(str);
			},
			isUrl:function(str){
				return /^(http:|ftp:)\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/.test(str);
			},
			isIp:function(str){
				return /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/.test(str);
			},
			isNum:function(str){
				return /^\d+$/.test(str);
			},
			isZip:function(str){
				return /^[1-9]\d{5}$/.test(str);
			},
			isEN:function(str){
				return /^[A-Za-z]+$/.test(str);
			}
		}
})()


/*为object增加属性*/
function $extend(object,src){
	if(!src)return object;
	for (var p in src){
		object[p] = src[p];
	}
	return object;
}

/*增加bind*/
if(!Function.prototype.bind){
	Function.prototype.bind = function(object) { 
		var method = this; 
		return function() { 
			method.apply(object, arguments); 
		} 
	}
}

/*
 * 事件处理 树状 　http://www.softcomplex.com/products/tigra_tree_menu/
 */
var Event = function(event) {
	this.event = event || window.event;
	this.target = (function() {
		this.event.target || this.event.srcElement;
		while(this.target && this.target.nodeType == 3) {
			this.target = this.target.parentNode;
		}
	})();
	
	this.stop = function() {
		return this.stopPropagation().preventDefault();
	}
	
	this.stopPropagation = function() {
		if(this.event.stopPropagation) this.event.stopPropagation();
		else this.event.cancelBubble = true;
		return this;
	}
}

/*
 * function testEvent() {
 * 	   var parent = function(e) {
 * 			var event = new Event(e);
 * 			alert('parent');
 * 	    };
 * 		var child = function(e) {
 * 			var event = new Event(e);
 * 			alert('child');
 * 			event.stopPropagation();
 * 		}
 * }
 */

/*
 * 显示与隐藏DIV
 */
var toggle = {
	show:function() {
		for(var i=0,j=arguments.length;i<j;i++) {
			arguments[i].style.display = "";
		}	
	},
	hide:function() {
		for(var i=0,j=arguments.length;i<j;i++) {
			arguments[i].style.display = "none";
		}
	} 
}

/*
基本非IE的浏览器的私有属性都会以-xxx-这样开始，
-o-就是以Presto为引擎的 Opera私有的、-icab-是iCab私有的，
-khtml-就是以KHTML为引擎的浏览器（如Konqueror Safari）、
-moz-就是以mozilla的Gecko为引擎的浏览器（如Firefox，mozilla）、
-webkit-就是以Webkit 渲染引擎（是KHTML的衍生产品）的浏览器（如Safari、Swift）。
*/

/*
 * 增加事件
 */
function addEvent(C,A,B) {
	if(document.all) {
		C.attachEvent(A,B);
	} else {
		A = A.toString().replace(/on(.*)/i,"$1");
		C.addEventListener(A,B,true);
	}
}

/*
 * 获取flash对象
 */
function thisMovie(A) {
	try {
		if(navigator.appName.indexOf("Microsoft") != -1) {
			return window[A];
		} else {
			return document[A];
		}
	} catch(ex) {
		
	}
}

/*
 * ColorPicker
 */
var colorPicker=[
	"#000000","#003300","#006600","#009900","#00CC00","#00FF00","#330000","#333300","#336600","#339900","#33CC00","#33FF00","#660000","#663300","#666600","#669900","#66CC00","#66FF00"
	,"#000033","#003333","#006633","#009933","#00CC33","#00FF33","#330033","#333333","#336633","#339933","#33CC33","#33FF33","#660033","#663333","#666633","#669933","#66CC33","#66FF33"
	,"#000066","#003366","#006666","#009966","#00CC66","#00FF66","#330066","#333366","#336666","#339966","#33CC66","#33FF66","#660066","#663366","#666666","#669966","#66CC66","#66FF66"
	,"#000099","#003399","#006699","#009999","#00CC99","#00FF99","#330099","#333399","#336699","#339999","#33CC99","#33FF99","#660099","#663399","#666699","#669999","#66CC99","#66FF99"
	,"#0000CC","#0033CC","#0066CC","#0099CC","#00CCCC","#00FFCC","#3300CC","#3333CC","#3366CC","#3399CC","#33CCCC","#33FFCC","#6600CC","#6633CC","#6666CC","#6699CC","#66CCCC","#66FFCC"
	,"#0000FF","#0033FF","#0066FF","#0099FF","#00CCFF","#00FFFF","#3300FF","#3333FF","#3366FF","#3399FF","#33CCFF","#33FFFF","#6600FF","#6633FF","#6666FF","#6699FF","#66CCFF","#66FFFF"
	,"#990000","#993300","#996600","#999900","#99CC00","#99FF00","#CC0000","#CC3300","#CC6600","#CC9900","#CCCC00","#CCFF00","#FF0000","#FF3300","#FF6600","#FF9900","#FFCC00","#FFFF00"
	,"#990033","#993333","#996633","#999933","#99CC33","#99FF33","#CC0033","#CC3333","#CC6633","#CC9933","#CCCC33","#CCFF33","#FF0033","#FF3333","#FF6633","#FF9933","#FFCC33","#FFFF33"
	,"#990066","#993366","#996666","#999966","#99CC66","#99FF66","#CC0066","#CC3366","#CC6666","#CC9966","#CCCC66","#CCFF66","#FF0066","#FF3366","#FF6666","#FF9966","#FFCC66","#FFFF66"
	,"#990099","#993399","#996699","#999999","#99CC99","#99FF99","#CC0099","#CC3399","#CC6699","#CC9999","#CCCC99","#CCFF99","#FF0099","#FF3399","#FF6699","#FF9999","#FFCC99","#FFFF99"
	,"#9900CC","#9933CC","#9966CC","#9999CC","#99CCCC","#99FFCC","#CC00CC","#CC33CC","#CC66CC","#CC99CC","#CCCCCC","#CCFFCC","#FF00CC","#FF33CC","#FF66CC","#FF99CC","#FFCCCC","#FFFFCC"
	,"#9900FF","#9933FF","#9966FF","#9999FF","#99CCFF","#99FFFF","#CC00FF","#CC33FF","#CC66FF","#CC99FF","#CCCCFF","#CCFFFF","#FF00FF","#FF33FF","#FF66FF","#FF99FF","#FFCCFF","#FFFFFF"
];


/*
 * 获得页面scrollPos　滚动条居顶、居左值
 */
var getScrollPos = function(oDocument) {
	oDocument = oDocument || document;
	return [
		Math.max(oDocument.documentElement.scrollTop,oDocument.body.scrollTop),
		Math.max(oDocument.documentElement.scrollLeft,oDocument.body.scrollLeft),
		Math.max(oDocument.documentElement.scrollWidth,oDocument.body.scrollWidth),
		Math.max(oDocument.documentElement.scrollHeight,oDocument.body.scrollHeight)
	];
}

/*
收藏到书签.(兼容IE和FF)。
用法:<input type="button" value="收藏" onclick="addBookmark('cssrain(前端开发)','http://www.cssrain.cn')"/> 
*/
function addBookmark(title,url) {
	if (window.sidebar) {
		window.sidebar.addPanel(title, url,"");
	} else if( document.all ) {
		window.external.AddFavorite( url, title);
	} else if( window.opera && window.print ) {
		return true;
	}
}

/*
函数 ： 文本框得到与失去焦点 操作。
这个方法经常在文本框搜索的时候出现。
文本里显示 “ 搜索 ”，然后当用户鼠标点击此文本，
文本框内容清空。如果用户没填写内容，那么文本的值又复原。
如果填写了，就显示用户填写的。
用法:
<input type="" value="关键字搜索" name="a" onfocus="clearTxt('a','关键字搜索')" onblur="fillTxt('a','关键字搜索')"/>
<input type="text" value="test" name="test" />
*/
function clearTxt(id,txt) {
  if (document.getElementById(id).value == txt)
    document.getElementById(id).value="" ;
  return ;
}

function fillTxt(id,txt) {
  if ( document.getElementById(id).value == "" )
    document.getElementById(id).value=txt;
  return ;
}

/*
函数 ： 用来判断鼠标按的是左键还是右键。(兼容IE和ff)
用法:
onmousedown="mouse_keycode(event)"
*/
function mouse_keycode(event){
    var event=event||window.event;
    var nav=window.navigator.userAgent;
    if (nav.indexOf("MSIE")>=1) //如果浏览器为IE.解释：因为 document.all 是 IE 的特有属性，所以通常用这个方法来判断客户端是否是IE浏览器 ,document.all?1:0; 
  { 
   if(event.button==1){alert("左键")}
   else if(event.button==2){alert("右键")}
  }
  else if(nav.indexOf("Firefox")>=1) ////如果浏览器为Firefox 
  {
   if(event.button==0){alert("左键");}
   else if(event.button==2){alert("右键");}
  }
   else{ //如果浏览器为其他 
    alert("other");
   } 
}

/*
回车提交。
用法:
<input type=text  onkeydown="keysubmit()">   
*/
function keySubmit()
{
	var ev = arguments[0];
	ev = ev || window.event;
	var evt = ev.which || ev.keyCode;
	if(evt == 13) {
		evt = 9;
		//alert("dosomething");
	}
}

/*
实现Ctrl+Enter 提交的效果.(兼容IE和FF)
在做这个效果时，发现一个问题，
当表单中如果只有一个文本框时，
回车会默认提交。(没有提交按钮也一样。)
用法:
<form action="#"  name="a">
<input   type="text" />   
<input   type="text"   onkeydown="QuickPost(event , document.a )" />   
</form>
*/
 function QuickPost(event,form){
    var event=event||window.event;
	if((event.ctrlKey && event.keyCode == 13)||(event.altKey && event.keyCode == 83)){
 	//alert("K");
	}
}

/*
回车自动跳到下一个文本框。
注;此方法不兼容FF，
因为在FF下，event.keycode是只读属性，不能赋值。
用法:
<form action="#"  name="a" onkeydown="QuickNext()">
<input   type="text" />   
<input   type="text"   />   
<input   type="button" value="test"  />  
</form>
*/
function  QuickNext()   
{  
//判断是否为button, 是因为在HTML上会有type="button"
//判断是否为submit,是因为HTML上会有type="submit"
//判断是否为reset,是因为HTML上的"重置"应该要被执行
//判断是否为空,是因为对于HTML上的"<a>链接"也应该被执行,
//这种情况发生的情况不多,可以使用"tabindex=-1"的方式来取消链接获得焦点.
  if(event.keyCode==13 && event.srcElement.type!='button' && event.srcElement.type!='submit' && event.srcElement.type!='reset' && event.srcElement.type!='textarea' && event.srcElement.type!=''){  
	    event.keyCode = 9; 
   }
}   

/*
判断cookie是否开启
返回 boolean类型
*/
function open_cookie(){
	 //判断cookie是否开启
    var cookieEnabled=(navigator.cookieEnabled)? true : false;
   //如果浏览器不是ie4+或ns6+
    if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){
        document.cookie="testcookie";
        cookieEnabled=(document.cookie=="testcookie")? true : falsedocument.cookie="";
    }
	
    if(cookieEnabled){
        return true;
    }else{
        return false;
    }
}

/*
* 子窗口刷新父窗口.(写在子窗口里)
*/
function opener_reload()
{
window.opener.location.reload();
}

/*
拷贝/复制文本框内容。（兼容IE和FF）
用法:
1，<input type="text"  name="d" id="d" value="&lt;http://www.cssrain.cn&gt;&lt;http://www.cssrain.cn&gt;" /><input id="Button1" type="button" onclick="copyText(document.getElementById('d'));" value="复制" />  <br/>
2，<textarea name="c"  id="c" rows="4" cols="20">&lt;http://www.cssrain.cn&gt;</textarea>
<input id="Button2" type="button" onclick="copyText(document.getElementById('c'));" value="复制" />
*/
function copyText(obj)
{
    if( obj.type !="hidden" )
    {
        obj.focus();
    }
    obj.select(); 
    copyToClipboard(obj.value);
    alert("拷贝成功！");
}
function copyToClipboard(txt) {  
    if(window.clipboardData)  
    {  
        window.clipboardData.clearData();  
        window.clipboardData.setData("Text", txt);  
    }  
    else if(navigator.userAgent.indexOf("Opera") != -1)  
    {  
        window.location = txt;  
    }  
    else if (window.netscape)  
    {  
        try {  
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  
        }  
        catch (e)  
        {  
            alert("您使用的浏览器不支持此复制功能，请使用ctrl+c或者浏览器右键复制");  
        }  
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);  
        if (!clip)  
            return;  
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);  
        if (!trans)  
            return;  
        trans.addDataFlavor('text/unicode');  
        var str = new Object();  
        var len = new Object();  
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);  
        var copytext = txt;  
        str.data = copytext;  
        trans.setTransferData("text/unicode",str,copytext.length*2);  
        var clipid = Components.interfaces.nsIClipboard;  
        if (!clip)  
            return false;  
        clip.setData(trans,null,clipid.kGlobalClipboard);  
    }  
    return true;  
}


/*
插入Flash文件
在你要插入的位置 。
 <script>
  document.write( GetFlashStr("pro.swf","400px","100px",true) );
 </script>
*/
function GetFlashStr(Path,Width,Height,Transparent){
	 var Temp,T="";
	 Temp='<object classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" id="FlashH" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" border="0" width="'+Width+'" height="'+Height+'">'
	 Temp+='<param name="movie" value="'+Path+'"/>'
	 Temp+='<param name="quality" value="High"/>'
	 Temp+='<param name="scale" value="ExactFit"/>'
	 if (Transparent) {Temp+=' <param name="wmode" value="transparent"/>';T='wmode="transparent"'}
	 Temp+='<embed src="'+Path+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="FlashH" width="'+Width+'" height="'+Height+'" quality="High"'+T+' scale="ExactFit"/>'
	 Temp+='</object>'
	 return Temp;
}

/*
 * 图片自动缩小方法。
 * 用法：
<div id="d">
<img src="http://www.baidu.com/img/logo-yy.gif" width="300" height="300"/>
<img src="http://www.baidu.com/img/logo-yy.gif" />
</div>

window.onload=function(){
resizeImg(50,'d');
}
*/
function resizeImg(maxWidth,contentId){
	var imgs=document.getElementById(contentId).getElementsByTagName("img");
	for(var i=0;i<imgs.length;i++){
		if(imgs[i].width>maxWidth){
			imgs[i].removeAttribute('width');
			imgs[i].removeAttribute('height');
			imgs[i].removeAttribute('style');
			imgs[i].width=maxWidth;
			imgs[i].style.cursor="hand";
			imgs[i].onclick = function(){
				window.open(this.src);
			}
		}
	}
}

/*
得到选中的多选框值的Array
用法：
window.onload = function(){
    var a = document.getElementsByName("a");
	var get_a =  getCheckBoxArray(a);
    alert(get_a +  " |  "  + get_a[1] )
}
<input type="checkbox" value="1" name="a" checked/>
<input type="checkbox" value="2" name="a" />
<input type="checkbox" value="3" name="a" checked/>
*/
function getCheckBoxArray(element){
    var values = new Array();
    if(null == element){
        //alert("no data!");
    }else if(null == element.length){
        if(element.checked){
            values.push(element.value);
        }
    }else{
        for(i=0; i<element.length; i++){
            if(element[i].checked){
                 values.push(element[i].value);
            }
        }
    }
    return values;
}


/*
DOM没有提供insertAfter(),只提供了一个insertBefore()方法。
在这里，我们自己编写一个 insertAfter().

用法：
插入到 div   b 的后面 
window.onload=function(){
   var a =document.createElement("span");
   var b =document.createTextNode("cssrain");
   a.appendChild(b);
   
   var mubiao = document.getElementById("b");
   insertAfter(a,mubiao);	 
}

<div id="b">bbbbbbbbb</div>
<div>dddddd</div>
*/
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {// 如果最后的节点是目标元素，则直接添加。因为默认是最后
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);//如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面。
  }
}

/*
 * 以document.write的方式向页面中写入js
 * 参数 ： 
 o {
   id : id of the created tag, 
   url : String,
   script  : String
  }
 用法： dwScript({id : 'cssrain'  , url :  'js/fl.js' });
 */
function dwScript(o){
  o.id = o.id || "";
  o.charset = o.charset || "utf-8";
  if (o.script && o.script != ""){
    document.write("<script id='" + o.id + "'>" + o.script + "<\/script>");
  } else if (o.url && o.url != ""){
    document.write("<script id='" + o.id + "' src='" + o.url + "' charset='" + o.charset + "'><\/script>");
  } else throw new Error("no script content or url specified");
}

/*
 * 以document.write的方式向页面中写入css
 * @param o {
 *    id : id of the created tag, 
 *    url : String,
 *    styles  : styles text
 *  }
用法：dwCSS({ id :  'cssrain'  , url:'css/default.template.css?'});
 */
function dwCSS(o){
  o.id = o.id || "";
  if (o.url){
    document.write('<link id="' + o.id + '" rel="stylesheet" type="text/css" href="' + o.url + '" />');
  } else if (o.styles){
    document.write('<style id="' + o.id + '" >'+o.styles+'<\/style>');
  } 
}

/*
 * 得到单选框选中的值。
 * 用法：
 *<input type="radio"  value="1" name="cssrain"/>
 *<input type="radio"  value="2" name="cssrain" checked/>
 *<input type="radio"  value="3" name="cssrain"/>
 *<input type="button" onclick="alert(getRadioValue('cssrain'))" value="test"/>
*/
function getRadioValue(radioName){
	var obj=document.getElementsByName(radioName);
	for(var i=0;i<obj.length;i++){
		if(obj[i].checked){
			return obj[i].value;
		}
	}
} 

/*
 * 复选框全选/不选/反选
 * 用法：
<form id="form_a">
<input type="checkbox"  value="1" name="a"/>
<input type="checkbox"  value="2" name="a" checked/>
<input type="checkbox"  value="3" name="a"/>
<input type="button" value="全选" onclick="checkAll(document.getElementById('form_a'),'all')"/>
<input type="button" value="不选" onclick="checkAll(document.getElementById('form_a'),'none')"/>
<input type="button" value="反选" onclick="checkAll(document.getElementById('form_a'),'')"/>
*/
function checkAll(form, sel) {
	for (i = 0, n = form.elements.length; i < n; i++) {
		if(form.elements[i].type == "checkbox") {
			if(form.elements[i].checked == true) {
				form.elements[i].checked = (sel == "all" ? true : false);
			} else {
				form.elements[i].checked = (sel == "none" ? false : true);
			}
		}
	}
}

/*
 * 复选框检查是否选中。
 * 如果没一个选中，会返回false.
 * 用法：
 <form id="form_a" name="form_a">
<input type="checkbox"  value="1" name="a"/>
<input type="checkbox"  value="2" name="a" checked/>
<input type="checkbox"  value="3" name="a"/>
<input type="button" value="全选" onclick="alert( SCheckBox('form_a','a') )"/>
</form>
*/
function SCheckBox(_formName,_checkboxName){
	var selflag = {'checked':0,'cvalues':[]};
	_scheckbox = eval('document.'+_formName+'.'+_checkboxName);
	if(_scheckbox){
		if(eval(_scheckbox.length)){
			for(i=0;i<_scheckbox.length;i++){
				if(_scheckbox[i].checked){
					selflag.checked++;
					selflag.cvalues.push(_scheckbox[i].value);
				}
			};
		}else if(_scheckbox.checked){
			selflag.checked++;
			selflag.cvalues.push(_scheckbox.value);
		}
		if(selflag.checked){
			return selflag;
		}
	}
	return false;
}

/*
 * 增加样式
 */
function addClass(elm, className) {
	var currentClass = elm.className;
	if (!new RegExp(("(^|\\s)" + className + "(\\s|$)"), "i").test(currentClass)) {
		elm.className = currentClass + (currentClass.length? " " : "") + className;
	}
}

/*
 * 移除样式
 */
function removeClass(elm, className) {
	var classToRemove = new RegExp(("(^|\\s)" + className + "(\\s|$)"), "i");
	elm.className = elm.className.replace(classToRemove, function (match) {
		var retVal = "";
		if (new RegExp("^\\s+.*\\s+$").test(match)) {
			retVal = match.replace(/(\s+).+/, "$1");
		}
		return retVal;
	}).replace(/^\s+|\s+$/g, "");
}






