/**
*　事件处理  树状　http://www.softcomplex.com/products/tigra_tree_menu/
*/
var Event = function(event) {   
        this.event = event || window.event;   
        this.target = (function() {   
            this.event.target || this.event.srcElement;   
            while (this.target && this.target.nodeType == 3) {   
                this.target = this.target.parentNode;   
            }   
        })();   
           
        this.stop = function(){   
            return this.stopPropagation().preventDefault();   
        }   
           
        this.stopPropagation = function(){   
            if (this.event.stopPropagation) this.event.stopPropagation();   
            else this.event.cancelBubble = true;   
            return this;   
        }   
       
        this.preventDefault = function(){   
            if (this.event.preventDefault) this.event.preventDefault();   
            else this.event.returnValue = false;   
            return this;   
        }   
}

/**
* 取消事件冒泡
*/
function testEvent() {
	var parent = function(e) {   
		var event = new Event(e);   
		alert('parent');   
	};   
	var child = function(e) {   
		var event = new Event(e);   
		alert('child');   
		event.stopPropagation();   
	}; 
}

//显示和隐藏DIV
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

//增加事件
function addEvent(C,A,B){
	if(document.all){
		C.attachEvent(A,B)
	}
	else{
		A=A.toString().replace(/on(.*)/i,"$1");
		C.addEventListener(A,B,true)
	}
}

//获取flash对象
function thisMovie(A){
	try{
		if(navigator.appName.indexOf("Microsoft")!=-1){
			return window[A]
		}else{
			return document[A]
		}
	}catch(B){}
}

//按下回车键，触发另一个事件
//searchInfo.onkeydown = function(ev) {
//	if(!ev) {
//		ev = window.event;
//	}
//	var evt = ev.which||ev.keyCode
//	if(evt==13) {
//		evt=9;
//		search.click();
//	}
//}

//IE与FF的blur与focus事件
function focus() {
	var el = $('test');

	// all browsers
	el.onmouseover = handleEvent;
	el.onmouseout = handleEvent;

	// IE
	el.onfocusin = handleEvent;
	el.onfocusout = handleEvent;

	// FF, Saf, Op
	if (el.addEventListener) {
		el.addEventListener('focus',handleEvent,true);
		el.addEventListener('blur',handleEvent,true);
	}
}

//colorPicker调色板
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

//全局变量与局部变量的使用,他们的执行效率比较
//t0 = new Date();   
//var i;   
//for (i=0; i<1000000; i++);   
//t1 = new Date();  
//function count() {
//	var i;
//	for(i=0;i<1000000;i++);
//}
//count();
//t2 = new Date();
//d = document;
//d.write('without local variables='+t1-t0+',<br/>');
//d.write('without local variables='+t2-t1+',<br/>');

/**
* 分为几位返回数据
*/
function PathParse(resId){
	var userRootStr = "";			
	var gene = 1;
	var LevelNum = 2;
	var PerNum = 1000;

	for (var i = 1; i < LevelNum; i++) {
		gene *= PerNum;
	}

	var tempUserID = parseInt(resId);

	for (var i = 0; i < LevelNum; i++) {
		if (LevelNum != i + 1) {			
			var temp = Math.floor(tempUserID / gene);							
			tempUserID = tempUserID % gene;
			userRootStr += temp + "/";
			gene /= PerNum;
		} else {
			userRootStr += resId;
		}
	}

	return userRootStr;
}

/**
* 获取实际位置
*/
function getPos(el,sProp) {
	var iPos = 0
	while (el!=null) {
		iPos+=el['offset' + sProp]
		el = el.offsetParent
	}
	return iPos

}

/**
* 检测是否是IE浏览器
*/
function isIE(){
  var detect = navigator.userAgent.toLowerCase();
  if(detect.indexOf('msie') > 0){
    return true;
  }
  return false;
}

/**
* 获取DOM对象
*/
function element(id){
 if(document.getElementById != null){
  return document.getElementById(id);
 }
 if(document.all != null){
  return document.all[id];
 }
 if(document.layers != null){
  return document.layers[id];
 }
 return null;
}

/**
* 过滤特殊符号
*/
//text = text.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
//case ' ':  token = 'space';             break;
//case '1':  token = 'one';               break;          case '2':  token = 'two';               break;
//case '3':  token = 'three';             break;          case '4':  token = 'four';              break;
//case '5':  token = 'five';              break;          case '6':  token = 'six';               break;
//case '7':  token = 'seven';             break;          case '8':  token = 'eight';             break;
//case '9':  token = 'nine';              break;          case '0':  token = 'zero';              break;
//
//case '!':  token = 'exclaimationPoint'; break;          case '@':  token = 'at';                break;
//case '#':  token = 'hash';              break;          case '$':  token = 'dollar';            break;
//case '%':  token = 'percentage';        break;          case '^':  token = 'caret';             break;
//case '&':  token = 'ampersand';         break;          case '*':  token = 'star';              break;
//case '(':  token = 'leftParen';         break;          case ')':  token = 'rightParen';        break;
//case '_':  token = 'underscore';        break;          case '-':  token = 'dash';              break;
//case '+':  token = 'plus';              break;          case '=':  token = 'equals';            break;
//case '`':  token = 'backtick';          break;          case '~':  token = 'tilde';             break;
//case '[':  token = 'leftBracket';       break;          case ']':  token = 'rightBracket';      break;
//case '\\': token = 'leftSlash';         break;          case '{':  token = 'leftCurlyBracket';  break;
//case '}':  token = 'rightCurlyBracket'; break;          case '|':  token = 'pipe';              break;
//case ';':  token = 'semiColon';         break;          case ':':  token = 'colon';             break;
//case '\'': token = 'singleQuote';       break;          case '"':  token = 'doubleQuote';       break;
//case ',':  token = 'comma';             break;          case '.':  token = 'period';            break;
//case '/':  token = 'rightSlash';        break;          case '<':  token = 'leftAngleBracket';  break;
//case '>':  token = 'rightAngleBracket'; break;          case '?':  token = 'questionMark';      break;
//default:   token = ''; 

/**
* 在window.onload之前
* http://dean.edwards.name/weblog/2006/06/again/
*/
// for Internet Explorer (using conditional comments)
///*@cc_on @*/
///*@if (@_win32)
//document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
//var script = document.getElementById("__ie_onload");
//script.onreadystatechange = function() {  
//	if (this.readyState == "complete") {init();}
//};
///*@end @*/
//
///**
//* for Safari
//*/
//if (/WebKit/i.test(navigator.userAgent)) { // sniff  
//	var _timer = setInterval(function() { 
//		if (/loaded|complete/.test(document.readyState)) {  
//			clearInterval(_timer);      
//			init(); // call the onload handler    
//		}  
//	}, 10);
//}
//
///* for Mozilla/Opera9 */
//if (document.addEventListener) {
//    document.addEventListener("DOMContentLoaded", mtInit, false);
//}

/**
* 复制到剪切板上
*/
function copyToClipboard(txt)
{
	if (window.clipboardData)
	{
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", txt);
	}
	else if (navigator.userAgent.indexOf("Opera") != -1)
	{
		window.location = txt;
	}
	else if (window.netscape)
	{
		try
		{
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		}
		catch (e)
		{
			alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试");
			return false;
		}
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip)
			return false;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans)
			return false;
		trans.addDataFlavor('text/unicode');
		var str = new Object();
		var len = new Object();
		var str = Components.classes['@mozilla.org/supports-string;1'].createInstance(Components.interfaces.nsISupportsString);
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
* 获取天数，某一年的某一月的天数
*/
function getDays(year , month)
{
	var dayarr = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

	if(month == 2)
	{
		if((year%4 == 0 && year%100 != 0) || year%400 == 0 || year < 1900)
			return 29;
		else
			return dayarr[month-1];
	}
	else
	{
		return dayarr[month-1];
	}
}

/**
* JS树状  http://dancewithnet.com/2007/04/30/dwntree/
*/
//过滤字符串的一些特殊字符
String.prototype.htmlEncode=function(){
    return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&#34;").replace(/\'/g,"&#39;");
}
String.prototype.htmlDecode=function(){
    return this.replace(/\&amp\;/g, '\&').replace(/\&gt\;/g, '\>').replace(/\&lt\;/g, '\<').replace(/\&quot\;/g, '\'').replace(/\&\#39\;/g, '\'');
}
//获取给定的字符串的年、月、日
function getYMD(_str) {
	var re = /\d{6}([12]\d{3})([01]\d)([0123]\d)\d{4}/;
	var id = re.exec(_str); 
	var str = id[1] + "-" + id[2] + "-" +id[3];
}
//获取样式
function getNextElement(node) {//获取当前元素的元素节点
  if(node.nodeType == 1) {
	return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);//如果不是，继续查询下一个，直到  if(node.nodeType == 1) .
  }
  return null;
}

//除法函数，用来得到精确的除法结果 
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。 
//调用：accDiv(arg1,arg2) 
//返回值：arg1除以arg2的精确结果
function accDiv(arg1,arg2){ 
	var t1=0,t2=0,r1,r2; 
	try{t1=arg1.toString().split(".")[1].length}catch(e){} 
	try{t2=arg2.toString().split(".")[1].length}catch(e){} 
	with(Math){ 
		r1=Number(arg1.toString().replace(".","")) 
		r2=Number(arg2.toString().replace(".","")) 
		return (r1/r2)*pow(10,t2-t1); 
	} 
}  
//乘法函数，用来得到精确的乘法结果 
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。 
//调用：accMul(arg1,arg2) 
//返回值：arg1乘以arg2的精确结果 
function accMul(arg1,arg2) 
{ 
	var m=0,s1=arg1.toString(),s2=arg2.toString(); 
	try{m+=s1.split(".")[1].length}catch(e){} 
	try{m+=s2.split(".")[1].length}catch(e){} 
	return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m); 
} 
//加法函数，用来得到精确的加法结果 
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。 
//调用：accAdd(arg1,arg2) 
//返回值：arg1加上arg2的精确结果 
function accAdd(arg1,arg2){ 
	var r1,r2,m; 
	try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
	try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
	m=Math.pow(10,Math.max(r1,r2)) 
	return (arg1*m+arg2*m)/m; 
}
/**************
函数 ： 文本框得到与失去焦点 操作。
这个方法经常在文本框搜索的时候出现。
文本里显示 “ 搜索 ”，然后当用户鼠标点击此文本，
文本框内容清空。如果用户没填写内容，那么文本的值又复原。
如果填写了，就显示用户填写的。
 用法:
 <input type="" value="关键字搜索" name="a" onfocus="clearTxt('a','关键字搜索')" onblur="fillTxt('a','关键字搜索')"/>
<input type="text" value="test" name="test" />
**************/
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
//得到字符串的长度
function ByteLength(string){
	return string.replace(/[^\x00-\xff]/g,"00").length;	
}
/**************
*实时检测输入框的字数
*用法：
 <input type="text" name="explain" id="explain" onkeyup="check_input_Length(this)" >
 <small>文字最大长度: 20. 还剩: <span id="chLeft">20</span>.</small>
**************/
	function check_input_Length(which)
{
	var maxChars = 20;
	if (which.value.length > maxChars)
		which.value = which.value.substring(0,maxChars);
		var curr = maxChars - which.value.length;
		document.getElementById("chLeft").innerHTML = curr.toString();
}
/**************
* 不被浏览器拦截的弹出窗口JS代码:
* 程序弹出的窗口将不会被广告拦截软件拦截，但有一个缺点：你无法象对window.open弹出的窗口那样对外观进行定制。
* 用法：<input type=button onclick='window.force.open("a.html")' />
* 定义ForceWindow类构造函数
* 无参数
* 无返回值.
* 实例化一个ForceWindow对象并做为window对象的一个子对象以方便调用
* 定义后可以这样来使用：window.force.open("URL");
* 你当然也可以在使用前实例化一个ForceWindow对象：
* var myWindow = new ForceWindow();
* 这样来使用：
* myWindow.open("URL");
* 本程序测试通过的浏览器：IE 5+、Firefox 1.0、Mozilla 1.7.5、Netscape 7.2、Opera 7.23
**************/
function ForceWindow ()
{
	this.r = document.documentElement;
	this.f = document.createElement("FORM");
	this.f.target = "_blank";
	this.f.method = "post";
	this.r.insertBefore(this.f, this.r.childNodes[0]);
}
ForceWindow.prototype.open = function (sUrl) //定义open方法 , 参数sUrl：字符串，要打开窗口的URL, 无返回值
{
	this.f.action = sUrl;
	this.f.submit();
}
//运行代码
//用法：
//<textarea id="a">aaaaaaaa</textarea>
//<input type="button" value="运行" onclick="runEx('a')" />
function runEx(cod1)  {
	 cod=document.getElementById(cod1)
	  var code=cod.value;
	  if (code!=""){
		  var newwin=window.open('','','');  
		  newwin.opener = null 
		  newwin.document.write(code);  
		  newwin.document.close();
	}
}

/*
GD.clearChildNodes = function(dom) {
	while (dom.lastChild) {
		var tmpDom = dom.removeChild(dom.lastChild);
		if (tmpDom.refs) {		//used in IE
			for (var i in tmpDom.refs) {
				if (tmpDom.refs[i].parentNode) {
					var tmpChildDom = tmpDom.refs[i].parentNode.removeChild(tmpDom.refs[i]);
					GD.sendTrash(tmpChildDom);
				}
			}
		}
		GD.sendTrash(tmpDom);
	}
}
//垃圾箱
GD.trashCtn = null;
GD.sendTrash=function(el){
   if(!GD.trashCtn) {
	   GD.trashCtn=document.createElement("div");
	   GD.trashCtn.style.display="none";
	   var B = document.body;
	   B.insertBefore(GD.trashCtn,B.firstChild);
   };
   GD.trashCtn.appendChild(el);
};*/
//removeNode : isIE ? function(){   
//    var d;   
//    return function(n){   
//       if(n && n.tagName != 'BODY'){   
//           d = d || document.createElement('div');   
//           d.appendChild(n);   
//           d.innerHTML = '';   
//       }   
//    }   
//}() : function(n){   
//    if(n && n.parentNode && n.tagName != 'BODY'){   
//        n.parentNode.removeChild(n);   
//    }   
//}

