/**
 * @author caojj
 * @sdoc FireFox兼容IE下XPath的用法
 * @version 1.0.1.5
 * @history
 * 		1.0.1.1	# 修正了loadXml返回	@ 20080417
 */

/**
 * 之间将 _xml  转换成 Object对象
 * @param {Object} _xml
 * 属性节点，前加$
 * Text 节点 $_
 * 返回的 Object结构和XML结构类似
 */
FWK.xmlObj = function(xml) {
	if(FWK.isNum(xml.length)){
		var rV = {};
		for(var i=0;i<xml.length;i+=1){
			if(FWK.isArr(rV[xml[i].nodeName])){
				rV[xml[i].nodeName].push(FWK.xmlObj(xml[i]));
			}
			else if(rV[xml[i].nodeName]){
				rV[xml[i].nodeName] = [rV[xml[i].nodeName],FWK.xmlObj(xml[i])];
			}
			else{
				rV[xml[i].nodeName] = FWK.xmlObj(xml[i]);
			}
		}
		return rV;
	}
	else{
		xml = xml.documentElement || xml;
		var items = xml.selectNodes("*");
		var atts = xml.selectNodes("@*");
		var rV = {};
		for(j=0;j<atts.length;j+=1){
			rV["$" + atts[j].nodeName] = atts[j].nodeValue;
		}
		if(items.length==0){
			if(xml.text!=""){
				rV.$_ = xml.text;
			}
		}
		else{
			FWK.extend(rV,FWK.xmlObj(items));
		}
		return rV;
	}
}


/**
 * 生成空的文档对象
*/
function GenXmlDocument(){
	var XMLDoc = null;
	try {
		XMLDoc = new ActiveXObject("Microsoft.XMLDOM");
	} catch(e) {
		try {
			XMLDoc = document.implementation.createDocument("text/xml", "", null);;
		}catch(e){
			XMLDoc = false;
		}
	}
	return XMLDoc;
}

if(!window.ActiveXObject) {
	var ex;
	XMLDocument.prototype.__proto__.__defineGetter__("xml", function(){
		try {
			return new XMLSerializer().serializeToString(this);
		} catch (ex) {
			var d = document.createElement("div");
			d.appendChild(this.cloneNode(true));
			return d.innerHTML;
		}
	});
	Element.prototype.__proto__.__defineGetter__("xml", function(){
		try {
			return new XMLSerializer().serializeToString(this);
		} catch (ex) {
			var d = document.createElement("div");
			d.appendChild(this.cloneNode(true));
			return d.innerHTML;
		}
	});
	XMLDocument.prototype.__proto__.__defineGetter__("text", function(){
		return this.firstChild.textContent
	});
	Element.prototype.__proto__.__defineGetter__("text", function(){
		return this.textContent
	});

	if (document.implementation && document.implementation.createDocument) {
		XMLDocument.prototype.loadXML = function(xmlString){
			try {
				var childNodes = this.childNodes;
				for (var i = childNodes.length - 1; i >= 0; i--)
					this.removeChild(childNodes[i]);

				var dp = new DOMParser();
				var newDOM = dp.parseFromString(xmlString, "text/xml");
				var newElt = this.importNode(newDOM.documentElement, true);
				this.appendChild(newElt);
				return true;
			} catch (ex) {
				return false;
			}
		};

		// check for XPath implementation
		if (document.implementation.hasFeature("XPath", "3.0")) {
			// prototying the XMLDocument
			XMLDocument.prototype.selectNodes = function(cXPathString, xNode){
				if (!xNode) {
					xNode = this;
				}
				var oNSResolver = this.createNSResolver(this.documentElement)
				var aItems = this.evaluate(cXPathString, xNode, oNSResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
				var aResult = [];
				for (var i = 0; i < aItems.snapshotLength; i++) {
					aResult[i] = aItems.snapshotItem(i);
				}
				return aResult;
			}

			// prototying the Element
			Element.prototype.selectNodes = function(cXPathString){
				if (this.ownerDocument.selectNodes) {
					return this.ownerDocument.selectNodes(cXPathString, this);
				} else {
					throw "For XML Elements Only";
				}
			}
		}

		// check for XPath implementation
		if (document.implementation.hasFeature("XPath", "3.0")) {
			// prototying the XMLDocument
			XMLDocument.prototype.selectSingleNode = function(cXPathString, xNode){
				if (!xNode) {
					xNode = this;
				}
				var xItems = this.selectNodes(cXPathString, xNode);
				if (xItems.length > 0) {
					return xItems[0];
				} else {
					return null;
				}
			}

			// prototying the Element
			Element.prototype.selectSingleNode = function(cXPathString){
				if (this.ownerDocument.selectSingleNode) {
					return this.ownerDocument.selectSingleNode(cXPathString, this);
				} else {
					throw "For XML Elements Only";
				}
			}
		}
	}
}

/**
 * 获取节点值
 * @param {Object} xmlDom
 * @param {Object} nodeName
 */
FWK.getNodeValue = function(xmlDom, nodeName) {
	var ret = "...";
	var node = xmlDom.selectNodes(".//"+nodeName+"");
	if (node.length) {
		node = node[0];
		ret = node.text;
	} 
	return ret;
}
/**
 * 将xml解析为简单对象
 * @param {Object} _xml
 */
FWK.xml2EnumObj = function(_xml) {
		
	var attrs = _xml.attributes || [];
	var nodes = _xml.childNodes || [];
	
	var para = {}
	
	for (var i=0;i<attrs.length; i++) {
		var attr = attrs[i];
		para[attr.nodeName] = attr.nodeValue;
	}
	
	for (var i=0;i<nodes.length; i++) {
		var node = nodes[i];
		para[node.nodeName] = node.text;
	}
	
	return para;
}
