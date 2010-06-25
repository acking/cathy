/**
 * @author zhangyi
 */


(function() {
	var namespaces = [ "GD"];
	for(var i = 0, j = namespaces.length; i < j; i ++){
		if(window[namespaces[i]] != 'object')
			window[namespaces[i]] = {};
	}
})();

GD.buffer = [];

GD.$extend = function(object,src){
	if(!src)return object;
	for (var p in src){
		object[p] = src[p];
	}
	return object;
}

/**
 * 创建DOM
 * @param {Object} tagName
 * @param {Object} attrs
 * @param {Attr}	childDomsAttr	子节点属性集合
 * @param {Object} bindDom
 * @param {Object} ref	返回变量引用，必须为object或array
 */
GD.createElement = function(tagName, attrs, childDomsAttr, bindDom, ref) {
	var dom = null;
	if (!ref) {
		ref = GD.createElement.bindRefCache;
	}
	GD.createElement.level++;
	
	if (tagName=="input" && document.all) {
		var iptStr = "<"+tagName;
		if (attrs["name"]) {
			iptStr += " name=" + attrs["name"];
		}
		if (attrs["type"]) {
			iptStr += " type=" + attrs["type"];
		}
		if (attrs["hideFocus"]) {
			iptStr += " hideFocus=" + attrs["type"];
		}
		
		iptStr += ">";
		dom = document.createElement(iptStr);
	} else {
		dom = document.createElement(tagName);
	}
	
	for (var aName in attrs) {
		var attr = attrs[aName];

		if (typeof(attr) == "object") {
			if (aName == "style") {
				for (var styleName in attr) {
					dom.style[styleName] = attr[styleName].replace(/;$/,"");
				}
			} else {
				dom[aName] = attr;
			}
		} else {
			var matchReg = new RegExp("\\b"+aName+"\\b", "i"); 	//eval("/\\b"+aName+"\\b/");
			if (typeof(attr) == "string" && (!GD.createElement.filter.match(matchReg))) {
				dom.setAttribute(aName, attr);
			} else {
				try {
					dom[aName] = attr;
				}catch(ex){
					dom["_"+aName] = attr;
				}
			}
			
			if (attr && (GD.createElement.extra.match(matchReg))) {
				switch(aName) {
					case "text":
						try {
							dom.appendChild(document.createTextNode(attr));
						}catch(ex){}
						break;
					case "ref":
						break;
					default:
						break;
				}
			}
		}
	}
	
	if (childDomsAttr) {
		if (childDomsAttr instanceof Array) {
			for (var j=0; j<childDomsAttr.length; j++) {
				if (childDomsAttr[j] && (childDomsAttr[j].nodeType == 1 || childDomsAttr[j].nodeType == 3)) {		//如果当前是节点
					dom.appendChild(childDomsAttr[j]);
				} else {	//正常情况参数数组
					var tmpDom = GD.createElement(childDomsAttr[j][0], childDomsAttr[j][1], childDomsAttr[j][2], dom, ref);
					if (childDomsAttr[j][1] && childDomsAttr[j][1]["ref"] && ref) {
						ref[childDomsAttr[j][1]["ref"]] = tmpDom;
					}
					delete tmpDom;
				}
			}
		} else {	//如果第四个参数是dom
			childDomsAttr.appendChild(dom);
		}		
	}
	
	if (bindDom) {
		bindDom.appendChild(dom);
	}
	GD.createElement.level--;
	if (GD.createElement.level<1) {
		dom.refs = {};
		for (var i in GD.createElement.bindRefCache) {
			dom.refs[i] = GD.createElement.bindRefCache[i];
		}
		GD.createElement.bindRefCache = {};
	}
	return dom;
}
GD.createElement.filter = "className, innerHTML, textContent";
GD.createElement.extra = "text, ref";
GD.createElement.bindRefCache = {};
GD.createElement.level = 0;

/**
 * 清除DOM下面的所有子节点，不包含本身
 * @param {Object} dom	一个DOM
 */
GD.clearChildNodes = function(dom) {
	this.tmpDom = null;
	
	while (dom && dom.lastChild) {
		this.tmpDom = dom.removeChild(dom.lastChild);
		if (this.tmpDom.refs) {		//used in IE
			for (var i in this.tmpDom.refs) {
				if (this.tmpDom.refs[i].parentNode) {
					var tmpChildDom = this.tmpDom.refs[i].parentNode.removeChild(this.tmpDom.refs[i]);
					delete this.tmpChildDom;
					delete tmpDom.refs[i];
				}
			}
		}
		delete this.tmpDom;
	}
}
/**
 * 在指定的DOM后插入DOM
 * @param {Object} $element
 * @param {Object} targetElement
 */
GD.insertAfter = function($element, targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild($element);
	}else{
		parent.insertBefore($element, targetElement.nextSibling);
	}
}
/**
 * 返回指定DOM下含某样式的DOM数组
 * @param {Object} className
 * @param {Object} element
 * @param {Object} tagName
 */
GD.getElementsByClassName = function(className,element,tagName) { 
	var children = (element || document).getElementsByTagName( tagName || '*' ) || document.all; 
	var elements = []; 
	var _exp = new RegExp('\\b' + className +'\\b');
	for ( var i = 0,child; child = children[i]; i++) { 
		if (_exp.test(child.className)){
			elements.push(child);
		}
	}   
	return elements; 
}

/**
 * 有待测试，缺少flash的支持
 * @param {Object} str
 */
GD.copy = function(str) {
	var s;
	if(isString(str)){
		s = str;
	}else if(isElement(str)){
		s = str.value;
	}else{
		return false;
	}
	if(window.clipboardData && clipboardData.setData){
		clipboardData.setData("text", s);
	}else{
		if(!XN.BROWSER.flashcopyer){
			var div = $element('div');
			this.flashcopyer = div;
			document.body.appendChild(div);
		}
		this.flashcopyer.innerHTML = '<embed src="' + XN.ENV.swfRoot + 'swf/clipboard.swf" FlashVars="clipboard='+encodeURIComponent(s)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
	}
	return true;
}

/**
 * 将页面设置为首页
 * @param {Object} url
 */
GD.addHomePage = function(url) {
	var myURL = window.location.href;
	
	if(FWK.isIE) {
		 document.body.style.behavior='url(#default#homepage)';
		 document.body.setHomePage(myURL);
	} else if(window.sidebar) {
		if(window.netscape) {
	         try {  
	            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  
	         } catch (e) {  
	    		alert( "该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true" );  
				return;
	         }
	    }
		
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage',myURL); 
	}
}
/**
 * 添加到书签
 */
GD.addBookMark = function() {
	var title = document.title;
	var url = window.location.href;
	
	if (window.sidebar) {
		window.sidebar.addPanel(title, url,"");
	} else if( document.all ) {
		window.external.AddFavorite( url, title);
	} else if( window.opera && window.print ) {
		return true;
	}
}

/**
 * 新建cookie
 * @param {Object} name    名称
 * @param {Object} value	值
 * @param {Object} expires 过期时间，时间要是字符串才可以
 * @param {Object} path    路径
 * @param {Object} domain	域名
 */
GD.Cookie = function(name,value,expires,path,domain) {
	this.name = name;
	this.value = value;
	this.path = path?path:'/';
	this.domain = domain?domain:'google.com';
	if (expires) {
		if (typeof(expires)=="string") {
			var d = new Date();
			d.setTime(new Date().getTime() + parseInt(expires));
			this.expires = d.toGMTString();
		}else{
			var date = new Date();
			date.setTime(date.getTime() + expires);
			this.expires = date.toGMTString();
		}
	}
}
/**
 * 设置Cookie
 * @param {Object} _c
 */
GD.Cookie.set = function(_c) {
	if (!navigator.cookieEnabled) {} else {
		if (_c) {
			document.cookie = _c.name + '=' + encodeURIComponent(_c.value) + (_c.expires ? (';expires=' + _c.expires):"") + ';path=' + _c.path + ';domaim=' + _c.domain + ':secure';
		}
	}
}
/**
 * 获取Cookie
 * @param {Object} name
 */
GD.Cookie.get = function(name) {
	var reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	var arr = document.cookie.match(reg);
	return arr==null? null : decodeURIComponent(arr[2]);
}
/**
 * 删除Cookie
 * @param {Object} name
 */
GD.Cookie.del = function(name) {
  	var _c = new GD.Cookie(name,"",-1);
  	GD.Cookie.set(_c);
}
/**
 * 增加指定DOM样式
 * @param {Object} element		一个DOM对象或是DOM的ID
 * @param {Object} className
 */
GD.addClass =function(element,className){
	var currentClass = element.className;
	if (!new RegExp(("(^|\\s)" + className + "(\\s|$)"), "i").test(currentClass)) {
		element.className = currentClass + (currentClass.length? " " : "") + className;
	}
}
/**
 * 删除指定DOM的样式
 * @param {Object} element
 * @param {Object} className
 */
GD.removeClass = function(element,className){
	var classToRemove = new RegExp(("(^|\\s)" + className + "(\\s|$)"), "i");
	element.className = element.className.replace(classToRemove, function (match) {
		var retVal = "";
		if (new RegExp("^\\s+.*\\s+$").test(match)) {
			retVal = match.replace(/(\s+).+/, "$1");
		}
		return retVal;
	}).replace(/^\s+|\s+$/g, "");
} 
/**
 * 是否开启了大写锁定
 */ 
GD.isCapsLockOn = function(e) {
	var c = e.keyCode || e.which;
	var s = e.shiftKey;
	if(((c >= 65 && c <= 90) && !s) || ((c >=97 && c <= 122) && s)){
		return true;
	}
	return false;
}
/**
 * 判断用户浏览器
 */
var isIE = /*@cc_on!@*/false;

/**
 * 获取浏览器地址中的参数
 * @param {Object} sName
 */
GD.getQuery =function(sName){
	var sRE = "[?& ]+" + sName + "=([^(&)]*)[&]?";
    var oRE = new RegExp(sRE);
    if(oRE.test(document.location.search)) {
        return decodeURIComponent(RegExp["$1"]);
    } else {
        return null;
    }
}

 
 
 