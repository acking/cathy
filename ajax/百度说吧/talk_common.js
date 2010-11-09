/*
 * 声明baiduTalk包
 */
var baiduTalk = baiduTalk || {};

/*
 * 基础方法
 */

/**
 * 增量计时器方法
 * 第一次执行func在delay秒之后，从第二次开始间隔时间每次递增decay秒
 * 
 * @param {int}         delay    延迟时间初始值
 * @decay {int}         decay    延迟衰减周期, 每次递增的时间
 * @maxDelay {int}      maxDelay 最大周期
 * @func  {function}    func     要执行的方法
 */
baiduTalk.setDecayInterval = function(delay, decay, maxDelay, func){
	var currentTime = 0; //计时器(当前时钟时间)
	var loopTime = 0; //计时周期(第几个循环)
	var setClock = function(){
		currentTime += decay; //更新计时器
		if(currentTime == maxDelay || currentTime == (delay + loopTime * decay)){
			func();
			currentTime = 0; //重置计时器
			loopTime += 1; //计时周期加1
		}
	}
	var timer = setInterval(setClock, 1000 * decay);
	return timer;
}
//建立快捷方法
var setDecayInterval = baiduTalk.setDecayInterval;

//url转换
baiduTalk.nameToUrl = function(name){
	if (typeof name == "string") {
		var value = name.replace(/@([\u4E00-\u9FA5]+)\((\d+)\)/g, '<a href="/$2" onmouseover="baiduTalk.tip.show(this,\'$1($2)\')" onmouseout="baiduTalk.tip.hide()">@$1</a>');
		return value;
	}
}

//url过滤
baiduTalk.urlFilter = function(value){
	var regUrl = /https?:\/\/([\w-]+\.)+[\w]+(:[0-9]{1,5})?(\/+[\w-:;!$%_\+\.~#\?&\/\|=]*)?/gi;
	var num = 0;
	var url_length = 0;
	var url = value.match(regUrl);
	if (url == null) {
		num = value.length;
	} else {
		baidu.each(url, function(item,i){
			url_length += item.length;
		});
		num = value.length - url_length + url.length*21;
	}
	return num;
}

//光标取位
baiduTalk.getTextPos = function(t){
	var start = 0, end = 0;
	var value = t.value;
	if(typeof(t.selectionStart) == "number"){
		start = t.selectionStart;
		end = t.selectionEnd;
	} else if(document.selection && t.offsetWidth>0) {
		t.focus();
		var range = document.selection.createRange();
		if (range.parentElement() == t) {
			var range_all = document.body.createTextRange();
			range_all.moveToElementText(t);
			for (start = 0; range_all.compareEndPoints("StartToStart", range) < 0; start++) {
				range_all.moveStart('character', 1);
			}
			for (var i = 0; i <= start; i++) {
				if (t.value.charAt(i) == '\n') {
					start++;
				}
			}
			range_all.moveToElementText(t);
			for (end = 0; range_all.compareEndPoints('StartToEnd', range) < 0; end++) {
				range_all.moveStart('character', 1);
			}
			for (var i = 0; i <= end; i++) {
				if (t.value.charAt(i) == '\n') {
					end++;
				}
			}
		}
	} else {
		start = value.length;
		end = value.length;
	}
	return {
		start: start,
		end: end
	}
}

//光标定位
baiduTalk.selectText = function(textbox,start,stop){
	if (!textbox){ return false; }
	if(textbox.setSelectionRange){
		textbox.setSelectionRange(start,stop);
	} else {
		var range = textbox.createTextRange();
		range.collapse(true);
		range.moveStart("character",start);
		range.moveEnd("character",stop-start);
		range.select();
	}
	textbox.focus();
}

//光标文本替换
baiduTalk.rangeText = function(t, val, num){
	if (!t){ return false; }
	if (baidu.browser.ie && t.nodeName.toLocaleLowerCase() != 'textarea'){
		t.value = val;
		t.focus;
		return;
	}
	var value = t.value;
	var pos = baiduTalk.getTextPos(t);
	var start = pos.start
	var end = pos.end;
	if (num && typeof(num) == "number"){
		start = start - num;
	}
	var val_start = value.substring(0, start);
	var val_end = value.substring(end);
	t.value = val_start + val + val_end;
	if (num && typeof(num) == "number"){
		end = end - num;
	}
	baiduTalk.selectText(t,end+val.length,end+val.length);
}

//baiduid过滤
baiduTalk.atFilter = function(t){
	if (!t){ return false; }
	var regAt = /@([0-9]{5,10})\s/g;
	var value = t.value;
	var pos = baiduTalk.getTextPos(t);
	var start = pos.start
	var end = pos.end;
	var val_start = value.substring(0, start);
	var val_end = value.substring(end);
	if(regAt.test(val_start)){
		var strAt = val_start.match(regAt);
		baidu.each(strAt,function(item,i){
			var baiduid = item.substring(1,item.length-1);
			baidu.ajax.post("/user/getnamebybaiduid?rn="+ 100 * Math.random(), 'baiduid=' + baiduid, function(xhr,responseText){
				var response = baidu.json.parse(responseText);
				var valueNew = val_start;
				if (response.status == 1) {
					var name = response.name;
					t.value = valueNew.replace(item,'@'+ name + '(' + baiduid + ') ') + val_end;
				}else{
					t.value = valueNew.replace(item,'@('+ baiduid + ') ') + val_end;
				}
				var valPos = t.value.length - val_end.length;
				baiduTalk.selectText(t,valPos,valPos);
			});
		});
	}else{
		return false;
	}
}

//文本获取
baiduTalk.getText = function(element){
	return (typeof element.textContent == "string") ? element.textContent : element.innerText;
}

//文本设置
baiduTalk.setText = function(element, text){
	if (typeof element.textContent == "string"){
		element.textContent = text;
	} else {
		element.innerText = text;
	}
}

//清空节点
baiduTalk.empty = function(element){
	while ( element.firstChild ) {
		element.removeChild( element.firstChild );
	}
}

//生成element
baiduTalk.createElement = function(tag, id, cla){
	var elem = document.createElement(tag);
	if (id && id !== "") {
		elem.id = id;
	}
	if (cla && cla !== "") {
		elem.className = cla;
	}
	return elem;
}

/*
 * 基于tangram的扩展
 */

//字符串截取
baiduTalk.substr = function(str,num){
	var str = str;
	var len = baidu.string.getByteLength(str);
	if (len > num){
		str = baidu.string.subByte(str, num-3) + '...';
	}
	return str;
}

//姓名联想
baiduTalk.suggestion = function($){
	var createDom = function(){
		var div = baiduTalk.createElement('div','baiduTalk_suggestion','suggestion');
		var ul = baiduTalk.createElement('ul','baiduTalk_suggestion_ul','list');
		div.appendChild(ul);
		div.style.display = 'none';
		document.body.appendChild(div);
		return div;
	}
	var createText = function(){
		if (!document.selection){
			var div = baiduTalk.createElement('div','textarea_copy','textarea-copy');
			var span1 = baiduTalk.createElement('span','textarea_text');
			var span2 = baiduTalk.createElement('span','textarea_empty');
			span2.textContent = '0';
			div.appendChild(span1);
			div.appendChild(span2);
			document.body.appendChild(div);
			return div;
		} else {
			return false;
		}
	}
	var adjustScroll = function(elem){
		var elemTop = elem.offsetTop;
		var scrollTop = elem.parentNode.scrollTop;
		var maxHeight = 180;
		if (elemTop >= scrollTop + 180){
			elem.parentNode.scrollTop = elemTop + 30 - maxHeight;
		} else if (elemTop < scrollTop){
			elem.parentNode.scrollTop = scrollTop - 30;
		}
	}
	var bindEvent = function(ul){
		var li_all = ul.getElementsByTagName('li');
		$.each(li_all, function(item,i){
			$.event.on(item, 'mouseover', function(e){
				if ($.dom.hasClass(item,'selected')){
					return false;
				} else {
					var li_selected = $.dom.q('selected',ul,'li')[0];
					$.dom.removeClass(li_selected, 'selected');
					$.dom.addClass(item, 'selected');
				}
			});
		});
	}
	return{
		data: {},
		dataKey: '',
		timer: null,
		close: 0,
		onshow: false,
		element: null,
		output: function(target){
			var elem = this.element;
			var length = this.dataKey.length;
			baiduTalk.rangeText(elem,baiduTalk.getText(target),length);
			this.hide();
		},
		init: function(){
			var that = this;
			var sugbox = createDom();
			$.event.on(sugbox, 'mouseover', function(){
				that.close = 1;
			});
			$.event.on(sugbox, 'mouseout', function(){
				that.close = 0;
			});
			$.event.on(sugbox, 'click', function(e){
				var e = e || window.event;
				var target = e.target || e.srcElement;
				while (target){
					if (target.nodeName.toLocaleLowerCase() == 'li'){
						that.output(target);
						break;
					}
					target = target.parentNode;
				}
			});
			return sugbox;
		},
		show: function(){
			$.show('baiduTalk_suggestion');
			if ($.browser.ie == 6) {
				var sug_ul = $.G('baiduTalk_suggestion_ul');
				var sug_li = sug_ul.getElementsByTagName('li');
				var liWidth = 170;
				if (sug_li.length > 0) {
					$.each(sug_li,function(item,i){
						if (item.scrollWidth > liWidth){
							liWidth = item.scrollWidth;
						}
					});
					sug_ul.style.width = liWidth + 'px';
				}
				if (sug_ul.scrollHeight > 180) {
					$.dom.setStyles(baidu.G('baiduTalk_suggestion_ul'), {
						'height': '180px',
						'overflow-y': 'scroll'
					});
				} else {
					$.dom.setStyles(baidu.G('baiduTalk_suggestion_ul'), {
						'height': 'auto',
						'overflow-y': 'auto'
					});
				}
			}
			this.onshow = true;
		},
		hide: function(){
			$.G('baiduTalk_suggestion_ul').scrollTop = 0;
			$.hide('baiduTalk_suggestion');
			this.onshow = false;
			this.close = 0;
			this.dataKey = '';
		},
		post: function(str,elem,type){
			var that = this;
			var html = '';
			if(!that.data[str]){
				that.hide();
				$.ajax.post("/user/getname?rn="+ 100 * Math.random(), 'name=' + str + '&type=' + type, function(xhr,responseText){
					var response = $.json.parse(responseText);
					if (response && response.status == 0) {
						$.each(response.results, function(item, i){
							if (i == 0) {
								html += '<li class="selected">' + item + '</li>';
							} else {
								html += '<li>' + item + '</li>';
							}
						});
						$.G('baiduTalk_suggestion_ul').innerHTML = html;
						bindEvent($.G('baiduTalk_suggestion_ul'));
						that.dataKey = str;
						that.data[str] = response.results;
						that.show();
					}
				});
			} else {
				$.each(that.data[str],function(item,i){
					if (i==0){
						html += '<li class="selected">' + item + '</li>';
					} else {
						html += '<li>' + item + '</li>';
					}
				});
				$.G('baiduTalk_suggestion_ul').innerHTML = html;
				bindEvent($.G('baiduTalk_suggestion_ul'));
				that.dataKey = str;
				that.show();
			}
		},
		create: function(element,o){
			if (!element){ return false; }
			var elem = element;
			var that = this;
			var opts = {
				top: 0,
				left: 0,
				maxHeight: 0,
				fontSize: 12,
				tag: 'textarea',
				type: 0,
				regExp: /@[\u4E00-\u9FA5]{1,6}$/
			}
			$.object.extend(opts, o || {});
			var regAt = opts.regExp;
			var sugbox = $.G('baiduTalk_suggestion');
			if (!sugbox){ sugbox = that.init(); }
			$.event.on(elem, 'keydown', function(e){
				var e = e || window.event;
				if (that.onshow === false){ return; }
				that.element = elem;
				var li_selected = $.dom.q('selected',sugbox,'li')[0];
				var keyCode = $.event.getKeyCode(e);
				switch (keyCode){
					case 13: //enter
						$.event.preventDefault(e);
						that.output(li_selected);
						break;
					case 27: //esc
						$.event.preventDefault(e);
						that.hide();
						break;
					case 38: //up
						$.event.preventDefault(e);
						if ($.dom.prev(li_selected)){
							adjustScroll($.dom.prev(li_selected));
							$.dom.removeClass(li_selected, 'selected');
							$.dom.addClass($.dom.prev(li_selected), 'selected');
						}
						break;
					case 40: //down
						$.event.preventDefault(e);
						if ($.dom.next(li_selected)){
							adjustScroll($.dom.next(li_selected));
							$.dom.removeClass(li_selected, 'selected');
							$.dom.addClass($.dom.next(li_selected), 'selected');
						}
						break;
					default:
						return;
				}
			});
			if ($.browser.opera){
				$.event.on(elem, 'keypress', function(e){
					var e = e || window.event;
					if (that.onshow === false){ return; }
					var keyCode = $.event.getKeyCode(e);
					switch (keyCode){
						case 38: //up
							$.event.preventDefault(e);
							break;
						case 40: //down
							$.event.preventDefault(e);
							break;
						default:
							return;
					}
				});
			}
			if ($.browser.ie == 6){
				$.event.on(elem, 'keypress', function(e){
					var e = e || window.event;
					if (that.onshow === false){ return; }
					that.element = elem;
					var li_selected = $.dom.q('selected',sugbox,'li')[0];
					var keyCode = $.event.getKeyCode(e);
					if (keyCode == 13){
						$.event.preventDefault(e);
						that.output(li_selected);
					}
				});
			}
			if ($.browser.ie){
				$.event.on(elem, 'propertychange', function(){
					if (that.timer != null) {
						clearTimeout(that.timer);
					}
					that.timer = setTimeout(function(){
						var pos = {};
						var arrPos = $.dom.getPosition(elem);
						var range = document.selection.createRange();
						var text = elem.value;
						if (opts.tag == 'textarea') {
							var range_all = document.body.createTextRange();
							range_all.moveToElementText(elem);
							var start = 0;
							for (start = 0; range_all.compareEndPoints("StartToStart", range) < 0; start++) {
								range_all.moveStart('character', 1);
							}
							for (var i = 0; i <= start; i++) {
								if (elem.value.charAt(i) == '\n') {
									start++;
								}
							}
							text = elem.value.substring(0,start);
						}
						if (regAt.test(text)){
							var strAt = text.match(regAt)[0];
							range.moveEnd('character',-strAt.length);
							pos.top = range.offsetTop + 18 + $.page.getScrollTop();
							pos.left = range.offsetLeft;
							if (opts.maxHeight > 0 && pos.top > arrPos.top + opts.maxHeight){
								pos.top = arrPos.top + opts.maxHeight;
							}
							if (opts.tag != 'textarea') {
								pos.top = arrPos.top + opts.maxHeight;
								pos.left = arrPos.left + 4;
							}
							$.dom.setStyles(sugbox,{top: pos.top + opts.top, left: pos.left + opts.left});
							var strName = /@/.test(strAt) ? strAt.substring(1) : strAt;
							that.post(strName,elem,opts.type);
						} else {
							that.hide();
						}
					},100);
				});
			}else{
				$.event.on(elem, 'input', function(){
					if (that.timer != null) {
						clearTimeout(that.timer);
					}
					that.timer = setTimeout(function(){
						var pos = {};
						var arrPos = $.dom.getPosition(elem);
						if (elem.value == ''){
							that.hide();
						} else {
							var textbox = $.G('textarea_copy');
							if (!textbox){ textbox = createText(); }
							var copyWidth = elem.offsetWidth - 11;
							if (opts.maxHeight > 0 && elem.scrollHeight > opts.maxHeight){
								copyWidth -= 10;
							}
							$.dom.setStyles(textbox,{width:copyWidth,fontSize:opts.fontSize + 'px'});
							var text = elem.value.substring(0,elem.selectionStart);
							if (regAt.test(text)){
								var strAt = text.match(regAt)[0];
								var textCopy = $.string.encodeHTML(text.slice(0,-strAt.length));
								textCopy = textCopy.replace(/\n/g, '<br/>');
								textCopy = textCopy.replace(/\s/g,'&nbsp;');
								$.G('textarea_text').innerHTML = textCopy;
								var textPos = $.dom.getPosition($.G('textarea_empty'));
								pos.top = arrPos.top + textPos.top + 18 + 3 + 2;
								pos.left = arrPos.left + textPos.left + 3 + 4 + 1000;
								if (opts.maxHeight > 0 && pos.top > arrPos.top + opts.maxHeight){
									pos.top = arrPos.top + opts.maxHeight;
								}
								$.dom.setStyles(sugbox,{top: pos.top + opts.top, left: pos.left + opts.left});
								var strName = /@/.test(strAt) ? strAt.substring(1) : strAt;
								that.post(strName,elem,opts.type);
							} else {
								that.hide();
							}
						}
					},100);
				});
			}
			$.event.on(elem, 'focus', function(){
				that.element = elem;
			});
			$.event.on(elem, 'blur', function(){
				if (that.close != 1){
					that.hide();
				}
			});
			$.event.on(elem, 'click', function(){
				that.hide();
			});
		}
	}
}(baidu);

//图片旋转
baiduTalk.imgScale = function($){
	var rotate = function(canvas,img,rot){
		//获取图片的高宽
		var w = img.width;
		var h = img.height;
		if($.browser.ie && h > 430){
			if(rot == 90 || rot == 270){
				w = 430*w/h;
				h = 430;
			}
		}
		//角度转为弧度
		if(!rot){ rot = 0; }
		var rotation = Math.PI * rot / 180;
		var c = Math.round(Math.cos(rotation) * 1000) / 1000;
		var s = Math.round(Math.sin(rotation) * 1000) / 1000;
		//旋转后canvas标签的大小
		canvas.height = Math.abs(c * h) + Math.abs(s * w);
		canvas.width = Math.abs(c * w) + Math.abs(s * h);
		//绘图开始
		var context = canvas.getContext("2d");
		context.save();
		//改变中心点
		if (rotation <= Math.PI / 2) {
			context.translate(s * h, 0);
		}
		else
			if (rotation <= Math.PI) {
				context.translate(canvas.width, -c * h);
			}
			else
				if (rotation <= 1.5 * Math.PI) {
					context.translate(-c * w, canvas.height);
				}
				else {
					context.translate(0, -s * w);
				}
		//旋转90°
		context.rotate(rotation);
		//绘制
		context.drawImage(img, 0, 0, w, h);
		context.restore();
		canvas.style.display = "";
		img.style.display = "none";
	}
	var fun = function(param){
		return{
			left: function(){
				param.rot -= 90;
				if(param.rot === -180){
					param.rot = 180;
				}
				if(param.rot === -90){
					param.rot = 270;
				}
				rotate(param.cv, param.img, param.rot);
			},
			right: function(){
				param.rot += 90;
				if(param.rot === 360){
					param.rot = 0;
				}
				rotate(param.cv, param.img, param.rot);
			}
		}
	}
	var loadImg = function (url, fn){
		var img = new Image();
		img.className = 'img-reduce';
		img.src = url;
		if (img.complete){
			fn(img);
		}else{
			img.onload = function(){
				fn(img);
			}
		}
	}
	return function(element,url){
		if (!$.lang.isElement(element)){ return false; }
		var that = element;
		var that_imgpre = that.parentNode;
		var that_imgbox = $.dom.next(that_imgpre);
		var reduce = function(){
			$.hide(that_imgbox);
			$.show(that_imgpre);
		}
		var param = {
			left: $.dom.q('turn-left',that_imgbox,'a')[0],
			right: $.dom.q('turn-right',that_imgbox,'a')[0],
			img: null,
			cv: $.dom.q('img-reduce',that_imgbox,'canvas')[0],
			rot: 0
		}
		if (baidu.browser.ie) {
			var cv_reduce = param.cv;
			if(!cv_reduce.getContext){
				var cv_new = document.createElement('canvas');
				cv_new.className = 'img-reduce';
				cv_new.style.display = 'none';
				that_imgbox.replaceChild(cv_new,cv_reduce);
				window.G_vmlCanvasManager.initElement(cv_new);
				param.cv = cv_new;
			}
			//rotate(param.cv, param.img, param.rot);
		}
		var fn = function(img){
			var imgNow = that_imgbox.getElementsByTagName('img');
			if(imgNow.length>0) { return false; }
			that_imgbox.appendChild(img);
			param.img = img;
			param.img.onclick = function(){
				reduce();
			}
			param.cv.onclick = function(){
				reduce();
			}
			var func = fun(param);
			param.left.onclick = function(){
				func.left();
				return false;
			}
			param.right.onclick = function(){
				func.right();
				return false;
			}
			baiduTalk.loading.end(that_imgpre);
			$.hide(that_imgpre);
			$.show(that_imgbox);
		}
		var imgMax = $.dom.q('img-reduce',that_imgbox,'img');
		if (imgMax.length>0){
			$.hide(that_imgpre);
			$.show(that_imgbox);
		} else {
			baiduTalk.loading.start(that_imgpre,{size:24,txt:''});
			loadImg(url, fn);
		}
	}
}(baidu);

//视频显示
baiduTalk.videoShow = function($){
	var createPop = function(){
		var popbox = baiduTalk.createElement('div','popVideo','pop-box');
		popbox.style.display = 'none';
		var popwrap = baiduTalk.createElement('table','','pop-wrapper');
		var tbody = document.createElement('tbody');
		popwrap.appendChild(tbody);
		tbody.insertRow(0);
		tbody.rows[0].insertCell(0);
		tbody.rows[0].cells[0].className = 'pop-lt';
		tbody.rows[0].insertCell(1);
		tbody.rows[0].cells[1].className = 'pop-ct';
		tbody.rows[0].insertCell(2);
		tbody.rows[0].cells[2].className = 'pop-rt';
		tbody.insertRow(1);
		tbody.rows[1].insertCell(0);
		tbody.rows[1].cells[0].className = 'pop-lm';
		tbody.rows[1].cells[0].innerHTML = '&nbsp;';
		tbody.rows[1].insertCell(1);
		tbody.rows[1].cells[1].className = 'pop-cm';
		var popcon = baiduTalk.createElement('div','videoCon','pop-content');
		var popclose = baiduTalk.createElement('div','','video-close');
		popclose.innerHTML = '<a class="f-l" href="javascript:void(0)" id="videoClose">关闭</a>';
		tbody.rows[1].cells[1].appendChild(popclose);
		tbody.rows[1].cells[1].appendChild(popcon);
		tbody.rows[1].insertCell(2);
		tbody.rows[1].cells[2].className = 'pop-rm';
		tbody.rows[1].cells[2].innerHTML = '&nbsp;';
		tbody.insertRow(2);
		tbody.rows[2].insertCell(0);
		tbody.rows[2].cells[0].className = 'pop-lb';
		tbody.rows[2].insertCell(1);
		tbody.rows[2].cells[1].className = 'pop-cb';
		tbody.rows[2].insertCell(2);
		tbody.rows[2].cells[2].className = 'pop-rb';
		popbox.appendChild(popwrap);
		document.body.appendChild(popbox);
		if ($.browser.ie == 6) {
			var setPositionTop = function(){
				var objHeight = 375;
				var pageScroll = $.page.getScrollTop();
				var pageHeight = $.page.getViewHeight();
				var positionTop = pageHeight + pageScroll - objHeight;
				$.setStyle(popbox, 'top', positionTop);
			}
			setPositionTop();
			$.event.on(window, 'resize', function(){
				setPositionTop();
			});
			$.event.on(window, 'scroll', function(){
				setPositionTop();
			});
		}
		return popbox;
	}
	var createVideo = function(elem){
		var imgwrapper = baidu.dom.q('talk-img',elem,'div');
		if (imgwrapper.length>0){
			imgwrapper = imgwrapper[0];
		} else {
			imgwrapper = baiduTalk.createElement('div','','talk-img');
			$.dom.insertAfter(imgwrapper,$.dom.first(elem));
		}
		var video = baiduTalk.createElement('div','','video-show');
		video.innerHTML = '<p class="img-handle"><span class="img-turn"><a href="javascript:void(0)" class="video-hide">收起</a> | <a href="javascript:void(0)" class="video-pop">弹出</a></span><span class="img-source"></span></p>';
		video.style.display = 'none';
		imgwrapper.appendChild(video);
		return video;
	}
	return function(element,swf,url,title){
		if (!$.lang.isElement(element)){ return false; }
		var swf = decodeURIComponent(swf);
		var url = decodeURIComponent(url);
		var title = decodeURIComponent(title);
		var that = element;
		var that_td = baidu.dom.getAncestorByTag(that,'td');
		if (!that_td){
			that_td = baidu.dom.getAncestorByClass(that,'msg-single');
		}
		var that_id = that_td.id ? that_td.id.substring(8) : 'swfmessage';
		var that_imgpre = null,that_imgbox = null,that_videobox = null;
		var imgpre =  $.dom.q('img-pre',that_td,'div');
		var imgbox = $.dom.q('img-scale',that_td,'div');
		var videobox = $.dom.q('video-show',that_td,'div');
		if (imgpre.length>0){
			that_imgpre = imgpre[0];
		}
		if (imgbox.length>0){
			that_imgbox = imgbox[0];
		}
		if (videobox.length>0){
			that_videobox = videobox[0];
		} else {
			that_videobox = createVideo(that_td);
		}
		var reduce = function(){
			$.hide(that_videobox);
			if (that_imgpre){ $.show(that_imgpre); }
			var swfwrapper = baidu.dom.q('swf',that_videobox,'div')[0];
			swfwrapper.innerHTML = '';
			$.dom.remove(swfwrapper);
		}
		if (that_videobox.style.display != 'none'){
			reduce();
		}
		var videoHide = baidu.dom.q('video-hide',that_videobox,'a')[0];
		videoHide.onclick = function(){
			reduce();
		}
		var pop = function(u,t){
			var popbox = baidu.G('backTop').parentNode;
			var popvideo = baidu.G('popVideo');
			if (!popvideo){
				popvideo = createPop();
				baidu.G('videoClose').onclick = function(){
					baidu.hide(popvideo);
					baiduTalk.empty(baidu.G('videoCon'));
					if(_VideoSetPosition){_VideoSetPosition();}
				}
				var sourceLink = baiduTalk.createElement('a','videoLink','f-r');
				sourceLink.target = "_blank";
				baidu.G('videoClose').parentNode.appendChild(sourceLink);
			}
			var vLink = baidu.G('videoLink');
			vLink.href = u;
			vLink.innerHTML = baiduTalk.substr(t,24);
			vLink.title = t;
			baiduTalk.empty(baidu.G('videoCon'));
			baidu.swf.create({
				id:'swfpop',
				url:swf,
				width:430,
				height:340,
				wmode: "transparent",
				allowscriptaccess: "always",
				allowfullscreen: true,
				vars: "playMovie=true&isAutoPlay=true"
			}, baidu.G('videoCon'));
			baidu.show(popvideo);
			if(_VideoSetPosition){_VideoSetPosition();}
		}
		var videoPop = baidu.dom.q('video-pop',that_videobox,'a')[0];
		videoPop.onclick = function(){
			reduce();
			pop(url,title);
		}
		var videoSource = baidu.dom.q('img-source',that_videobox,'span')[0];
		videoSource.innerHTML = '<a title="' + title + '" href="' + url + '" target="_blank">' + baiduTalk.substr(title,24) + '</a>';
		var container = document.createElement('div');
		container.className = 'swf';
		that_videobox.appendChild(container);
		baidu.swf.create({
			id:'swf'+that_id,
			url:swf,
			width:430,
			height:340,
			wmode: "transparent",
			allowscriptaccess: "always",
			allowfullscreen: true,
			vars: "playMovie=true&isAutoPlay=true"
		}, container);
		if (that_imgpre){ $.hide(that_imgpre); }
		if (that_imgbox){ $.hide(that_imgbox); }
		$.show(that_videobox);
	}
}(baidu);

//为ie下的按钮添加hover和active伪类
baiduTalk.buttonIE = function($){
	return function(element,o){
		if (!element || !$.browser.ie){ return false; }
		var opts = {
			hover: 'hover',
			active: 'active'
		}
		$.object.extend(opts, o || {});
		var hover = opts.hover;
		var active = opts.active;
		var elements = [];
		$.lang.isArray(element) ? elements = element : elements[0] = element;
		$.each(elements, function(item,i){
			if ($.browser.ie === 6){
				$.event.on(item, 'mouseover', function(e){
					$.addClass(item, hover);
				});
				$.event.on(item, 'mouseout', function(e){
					$.removeClass(item, hover);
				});
			}
			$.event.on(item, 'mousedown', function(e){
				$.addClass(item, active);
			});
			$.event.on(item, 'mouseup', function(e){
				$.removeClass(item, active);
			});
		});
	}
}(baidu);

//为input框添加焦点样式
baiduTalk.inputFocus = function($){
	return function(element){
		if (!element){ return false; }
		var elements = [];
		$.lang.isArray(element) ? elements = element : elements[0] = element;
		$.each(elements,function(item,i){
			$.event.on(item,'focus',function(){
				$.addClass(item,'hov');
			});
			$.event.on(item,'blur',function(){
				$.removeClass(item,'hov');
			});
		});
	}
}(baidu);

//textarea自适应高度
baiduTalk.textareaAuto = function($){
	var autoHeight = function(obj, height){
		var scrollHeight = $.browser.ie || $.browser.isWebkit ? (obj.scrollHeight-5) : obj.scrollHeight;
		if (height && scrollHeight < height){ return false; }
		$.setStyle(obj,'height',scrollHeight);
	}
	return function(element){
		if (!element){ return false; }
		var elements = [];
		$.lang.isArray(element) ? elements = element : elements[0] = element;
		$.each(elements,function(item,i){
			var eleHeight = ($.browser.ie) ? item.currentStyle.height : item.scrollHeight;
			eleHeight = parseFloat(eleHeight);
			$.event.on(item, 'focus', function(){
				autoHeight(item, eleHeight);
			});
			if ($.browser.ie){
				$.event.on(item, 'propertychange', function(){
					autoHeight(item, eleHeight);
				});
			}else{
				$.event.on(item, 'input', function(){
					autoHeight(item, eleHeight);
				});
				$.event.on(item,'blur',function(){
					$.setStyle(item, 'height', eleHeight);
					autoHeight(item, eleHeight);
				});
			}
		});
	}
}(baidu);

//搜索框初始化
baiduTalk.searchInput = function($){
	return function(element,str){
		if (!element){ return false; }
		var str = str;
		var elem = element;
		$.event.on(elem, "focus", function(e){
			baidu.dom.addClass(elem,'color333');
			var tex = this.value;
			if(tex === str){
				this.value="";
			}
		});
		$.event.on(elem, "blur", function(e){
			var tex = this.value;
			if(tex === ""){
				this.value = str;
				baidu.dom.removeClass(elem,'color333');
			}
		});
	}
}(baidu);

//ajax loading
baiduTalk.loading = function($){
	var loadingCreate = function(){
		var loading = baiduTalk.createElement('div', '', 'loading-now');
		var img = new Image();
		img.src = "http://res.t.baidu.com/images/loading.gif";
		img.className = 'loading-pic'
		var span = baiduTalk.createElement('span', '', 'loading-txt');
		loading.appendChild(img);
		loading.appendChild(span);
		return loading;
	}
	return{
		start: function(element,o){
			if (!element){ return false; }
			var elem = $.G(element);
			if($.q('loading-now',elem,'div').length>0){
				return false;
			}
			var opts = {
				txt: "加载中...",
				size: 16
			}
			$.object.extend(opts, o || {});
			elem.appendChild(loadingCreate());
			var pic = $.dom.q('loading-pic',elem,'img')[0];
			var text = $.dom.q('loading-txt',elem,'span')[0];
			pic.width = opts.size;
			pic.height = opts.size;
			baiduTalk.setText(text,opts.txt);
		},
		end: function(element){
			if (!element){ return false; }
			var elem = $.G(element);
			var load = $.dom.q('loading-now',elem,'div')[0];
			$.dom.remove(load);
		}
	}
}(baidu);

//input disabled
baiduTalk.disable = function($){
	return{
		start: function(element,func){
			if (!element){ return false; }
			element.disabled = true;
			$.dom.addClass(element,'input-disabled');
			if (element.nodeName.toLocaleLowerCase() == 'a'){
				if($.lang.isFunction(func)){
					$.event.un(element, 'click', func);
				} else {
					$.event.un(element, 'click');
				}
			}
		},
		end: function(element,func){
			if (!element){ return false; }
			element.disabled = false;
			$.dom.removeClass(element,'input-disabled');
			if (element.nodeName.toLocaleLowerCase() == 'a'){
				$.event.on(element, 'click', func);
			}
		}
	}
}(baidu);

//form submit
baiduTalk.submit = function($){
	return function(form, valid){
		if (!form){ return false; }
		var valid = valid;
		$.event.on(form,'submit',function(e){
			var e = e || window.event;
			var v = valid();
			if (v === false) {
				$.event.preventDefault(e);
			}
		});
	}
}(baidu);

//键盘快捷方式
baiduTalk.keyEvent = function($){
	return function(element, key, func){
		if (!$.lang.isFunction(func)){ return false; }
		var elem = element;
		var stop = 1;//阻止连发
		var keys = key.toLocaleLowerCase().split('+');
		if (keys[0]=='enter'){
			$.event.on(element,"keyup",function(e){
				var e = e || window.event;
				var keyCode = $.event.getKeyCode(e);
				if(stop != -1){
					if(keyCode == 13){
						stop = -1;
						func();
						setTimeout(function(){stop = 1;},1000);
					}
				}
			});
		} else if (keys[0]=='ctrl'&&keys[1]=='enter'){
			$.event.on(element,"keyup",function(e){
				var e = e || window.event;
				var keyCode = $.event.getKeyCode(e);
				if(stop != -1){
					if(e.ctrlKey && (keyCode == 13 || keyCode == 10)){
						stop = -1;
						func();
						setTimeout(function(){stop = 1;},1000);
					}
				}
			});
		}
	}
}(baidu);

//说吧号提示
baiduTalk.tip = function($){
	var tip = function(){
		var div = baiduTalk.createElement('div','user_tip','tip-box');
		var span = baiduTalk.createElement('span','','tip-top');
		var txt = baiduTalk.createElement('span','tip_info','tip-info');
		div.appendChild(span);
		div.appendChild(txt);
		document.body.appendChild(div);
		$.hide('user_tip');
	}
	return{
		show: function(element,txt){
			if(!element){ return false; }
			if (!$.G('user_tip')){ tip(); }
			this.hide();
			var tipBox = $.G('user_tip');
			var that = element;
			var that_pos = $.dom.getPosition(that);
			$.dom.setStyles(tipBox,{top:that_pos.top+24,left:that_pos.left});
			baiduTalk.setText($.G('tip_info'), txt);
			$.show('user_tip');
		},
		hide: function(){
			$.hide('user_tip');
			baiduTalk.empty($.G('tip_info'));
		}
	}
}(baidu);

//弹出框控件
baiduTalk.popbox = function($){
	return function(element,o){
		if(!element){ return false;}
		var elem = element;
		var opts ={
			id:'baiduTalk',
			content:'',
			left:0,
			top:30,
			width:'auto',
			height:'auto',
			arrow:20,
			close:false,
			func:function(){}
		}
		$.object.extend(opts, o || {});
		var popbox,popclose,poptop,popwrap,popcon,pos;
		if (!$.G(opts.id+'_POPBOX')){
			popbox = baiduTalk.createElement('div',opts.id+'_POPBOX','pop-box');
			poptop = baiduTalk.createElement('div','','pop-top');
			popwrap = baiduTalk.createElement('table','','pop-wrapper');
			var tbody = document.createElement('tbody');
			popwrap.appendChild(tbody);
			tbody.insertRow(0);
			tbody.rows[0].insertCell(0);
			tbody.rows[0].cells[0].className = 'pop-lt';
			tbody.rows[0].insertCell(1);
			tbody.rows[0].cells[1].className = 'pop-ct';
			tbody.rows[0].insertCell(2);
			tbody.rows[0].cells[2].className = 'pop-rt';
			tbody.insertRow(1);
			tbody.rows[1].insertCell(0);
			tbody.rows[1].cells[0].className = 'pop-lm';
			tbody.rows[1].cells[0].innerHTML = '&nbsp;';
			tbody.rows[1].insertCell(1);
			tbody.rows[1].cells[1].className = 'pop-cm';
			popcon = baiduTalk.createElement('div','','pop-content');
			tbody.rows[1].cells[1].appendChild(popcon);
			tbody.rows[1].insertCell(2);
			tbody.rows[1].cells[2].className = 'pop-rm';
			tbody.rows[1].cells[2].innerHTML = '&nbsp;';
			tbody.insertRow(2);
			tbody.rows[2].insertCell(0);
			tbody.rows[2].cells[0].className = 'pop-lb';
			tbody.rows[2].insertCell(1);
			tbody.rows[2].cells[1].className = 'pop-cb';
			tbody.rows[2].insertCell(2);
			tbody.rows[2].cells[2].className = 'pop-rb';
			popclose = baiduTalk.createElement('div','','pop-close');
			popclose.style.display = "none";
			popbox.appendChild(poptop);
			popbox.appendChild(popclose);
			popbox.appendChild(popwrap);
			popcon.appendChild(opts.content);
			document.body.appendChild(popbox);
			if (opts.close === true){
				$.event.on(popclose, 'click', function(){
					$.hide(popbox);
					$.dom.removeClass(elem.parentNode,'relative');
				});
				$.event.on(document.body, 'click', function(e){
					if (popbox.style.display == 'none'){
						return false;
					}
					var e = e || window.event;
					var target = e.target || e.srcElement;
					while (target){
						if (target == popbox.parentNode){
							return;
						}
						target = target.parentNode;
					}
					$.hide(popbox);
					$.dom.removeClass(popbox.parentNode,'relative');
				});
				$.show(popclose);
			}
			$.hide(popbox);
		} else {
			popbox = $.G(opts.id+'_POPBOX');
			poptop = $.dom.q('pop-top',popbox,'div')[0];
			popcon = $.dom.q('pop-content',popbox,'div')[0];
			popclose = $.dom.q('pop-close',popbox,'div')[0];
			$.hide(popbox);
			$.dom.removeClass(popbox.parentNode,'relative');
		}
		$.dom.setStyles(popcon,{width:opts.width, height: opts.height});
		//pos = $.dom.getPosition(elem);
		//$.dom.setStyles(popbox,{top: pos.top + opts.top, left: pos.left + opts.left});
		$.dom.addClass(elem.parentNode,'relative');
		elem.parentNode.appendChild(popbox);
		$.dom.setStyles(popbox,{top: opts.top, left: opts.left});
		$.dom.setStyle(poptop, 'left', opts.arrow);
		$.show(popbox);
		opts.func();
		return popbox;
	}
}(baidu);

/*
 * 基于tangram.ui的扩展
 */

/*
 * dialog
 * example:
 * baiduTalk.dialog('警告');
 */
baiduTalk.dialog = function($){
	return function(str,o){
		var opts = {
			contentText:str,
			content:'',
			classPrefix:'baidutalk-dialog',
			titleText:'提示',
			width:300,
			height:'auto',
			closeOnEscape:false,
			modal:true,
			modalOpacity:'0.1',
			draggable:false,
			autoOpen:true
		}
		$.object.extend(opts, o);
		var content = document.createElement('div');
		content.className = 'baidutalk-dialog-content-inner';
		content.style.height = opts.height == 'auto' ? 'auto' : (opts.height-20)+'px';
		content.innerHTML = opts.contentText;
		if (opts.content !== ''){content.insertBefore(opts.content,content.firstChild);}
		opts.content = content;
		var dialogShow = $.ui.dialog.create(opts);
		var dialogContent = dialogShow.getContent();
		var dialogTitle = dialogShow.getTitle();
		var buttonClose = $.dom.q('baidutalk-dialog-close',dialogTitle,'div')[0];
		dialogTitle.style.width = opts.width+8;
		dialogTitle.style.cursor = 'default';
		var footer = document.createElement('div');
		footer.className = 'baidutalk-dialog-footer-inner';
		var dialogFooter = dialogShow.getFooter();
		dialogFooter.style.width = opts.width+8;
		dialogFooter.appendChild(footer);
		if (opts.autoOpen == true) {
			dialogShow.open();
			if(!$.browser.ie){
				buttonClose.tabIndex = 0;
			}
			buttonClose.focus();
		}
		return dialogShow;
	}
}(baidu);

/*
 * dialog alert
 * example:
 * baiduTalk.alert('警告');
 */
baiduTalk.alert = function($){
	return function(str,o){
		var opts = {
			contentText:'',
			content:'',
			classPrefix:'baidutalk-dialog',
			titleText:'提示',
			width:300,
			height:'auto',
			closeOnEscape:false,
			modal:true,
			modalOpacity:'0.1',
			draggable:true,
			okText:'确定',
			onok:function(){},
			style:'tip',//提示样式
			autohide:false,//自动隐藏
			onclose:function(){},
			autodis:true//自动销毁
		}
		$.object.extend(opts, o);
		if (opts.contentText == ''){
			opts.contentText = '<div class="tangram-dialog-' + opts.style + '">' + str + '</div>';
		}
		var content = document.createElement('div');
		content.className = 'baidutalk-dialog-content-inner';
		content.style.height = (opts.height == 'auto') ? 'auto' : (opts.height-20)+'px';
		content.innerHTML = opts.contentText + '<p class="dialog-button"><a class="tangram-dialog-accept" href="javascript:void(0)">'+opts.okText+'</a></p>';
		if (opts.content !== ''){content.insertBefore(opts.content,content.firstChild);}
		opts.content = content;
		var dialogAlert = null;
		if (opts.autodis === true){
			var closeFunc = opts.onclose;
			opts.onclose = function(){
				closeFunc();
				dialogAlert.dispose();
			}
		}
		dialogAlert = $.ui.dialog.create(opts);
		var dialogContent = dialogAlert.getContent();
		var buttonElem = $.dom.q('dialog-button',dialogContent,'p')[0];
		var buttonConfirm = $.dom.q('tangram-dialog-accept',dialogContent,'a')[0];
		buttonConfirm.onclick = function(){
			opts.onok();
			buttonConfirm.blur();
			dialogAlert.close();
			return false;
		}
		var dialogTitle = dialogAlert.getTitle();
		dialogTitle.style.width = opts.width+8;
		var footer = document.createElement('div');
		footer.className = 'baidutalk-dialog-footer-inner';
		var dialogFooter = dialogAlert.getFooter();
		dialogFooter.style.width = opts.width+8;
		dialogFooter.appendChild(footer);
		if (opts.autohide === false){
			dialogAlert.open();
			buttonConfirm.focus();
		} else {
			baidu.hide(buttonElem);
			dialogAlert.open();
			var buttonClose = $.dom.q('baidutalk-dialog-close',dialogTitle,'div')[0];
			if(!$.browser.ie){
				buttonClose.tabIndex = 0;
			}
			buttonClose.focus();
			var speed = $.lang.isNumber(opts.autohide) ? opts.autohide : 1000;
			setTimeout(function(){
				if (dialogAlert.isShown()){
					dialogAlert.close();
				}
			}, speed);
		}
		return dialogAlert;
	}
}(baidu);

/*
 * dialog confirm
 * example:
 * baiduTalk.confirm('提示', {onaccept: function(){baiduTalk.alert('提示成功');}});
 */
baiduTalk.confirm = function($){
	return function(str,o){
		var opts = {
			contentText:'<div class="tangram-dialog-confirm">' + str + '</div>',
			content:'',
			classPrefix:'baidutalk-dialog',
			titleText:'操作确认',
			width:300,
			height:'auto',
			closeOnEscape:false,
			modal:true,
			modalOpacity:'0.1',
			draggable:true,
			acceptText:'确定',
			cancelText:'取消',
			onaccept:function(){},
			onclose:function(){},
			autodis:false//自动销毁
		}
		$.object.extend(opts, o);
		var content = document.createElement('div');
		content.className = 'baidutalk-dialog-content-inner';
		content.style.height = opts.height == 'auto' ? 'auto' : (opts.height-20)+'px';
		content.innerHTML = opts.contentText + '<p class="dialog-button"><a class="tangram-dialog-accept" href="javascript:void(0)">'+opts.acceptText+'</a><a class="tangram-dialog-cancel" href="javascript:void(0)">'+opts.cancelText+'</a></p>';
		if (opts.content !== ''){content.insertBefore(opts.content,content.firstChild);}
		opts.content = content;
		var dialogConfirm = null;
		if (opts.autodis === true){
			var closeFunc = opts.onclose;
			opts.onclose = function(){
				closeFunc();
				dialogConfirm.dispose();
			}
		}
		dialogConfirm = $.ui.dialog.create(opts);
		var dialogContent = dialogConfirm.getContent();
		var buttonConfirm = $.dom.q('tangram-dialog-accept',dialogContent,'a')[0];
		var buttonCancel = $.dom.q('tangram-dialog-cancel',dialogContent,'a')[0];
		buttonConfirm.onclick = function(){
			opts.onaccept();
			buttonConfirm.blur();
			dialogConfirm.close();
			return false;
		}
		buttonCancel.onclick = function(){
			dialogConfirm.close();
		}
		var dialogTitle = dialogConfirm.getTitle();
		dialogTitle.style.width = opts.width+8;
		var footer = document.createElement('div');
		footer.className = 'baidutalk-dialog-footer-inner';
		var dialogFooter = dialogConfirm.getFooter();
		dialogFooter.style.width = opts.width+8;
		dialogFooter.appendChild(footer);
		dialogConfirm.open();
		buttonConfirm.focus();
		return dialogConfirm;
	}
}(baidu);

//交换手机号
baiduTalk.phoneDialog = function($){
	var init = function(){
		if ($.G('phone_input')){
			$.event.un($.G('phone_input'),'click');
		}
		baiduTalk.empty($.G('phone_num'));
		$.hide('phone_num');
		$.hide('phone_tip');
		$.hide('phone_btn');
	}
	var dialog = function(){
		var div = baiduTalk.createElement('div','phone_dialog','ico-dialog');
		var num = baiduTalk.createElement('p','phone_num','phone-num');
		var tip = baiduTalk.createElement('p','phone_tip','phone-tip');
		var btn = baiduTalk.createElement('p','phone_btn','phone-btn');
		div.appendChild(num);
		tip.innerHTML = '双方相互关注时<br/>才能请求交换手机号码';
		div.appendChild(tip);
		btn.innerHTML = '需对方同意才能成功交换<br/><input id="phone_input" type="button" class="btn-phone" value="交换手机号" />';
		div.appendChild(btn);
		return div;
	}
	return function(element,userid){
		if(!element || !userid){ return false; }
		var content = dialog();
		var phone_popbox = $.G('phone_POPBOX');
		if (phone_popbox && phone_popbox.style.display!='none'){
			var posElem = $.dom.getPosition(element.parentNode);
			var posPop = $.dom.getPosition(phone_popbox);
			if(posElem.top + 28 == posPop.top){
				$.hide(phone_popbox);
				$.dom.removeClass(element.parentNode,'relative');
				return false;
			}
		}
		baiduTalk.popbox(element,{id:'phone',content:content,width:180,top:28,left:-18,close:true});
		init();
		baiduTalk.loading.start(baidu.G('phone_dialog'));
		$.ajax.post('/contacts/phone?rn='+ 100 * Math.random(), 'uid='+userid, function(xhr,responseText){
			baiduTalk.loading.end(baidu.G('phone_dialog'));
			var response = $.json.parse(responseText);
			$.G('phone_num').innerHTML = response.name+'&nbsp;&nbsp;<span class="icon-phone">' + response.phone + '</span>';
			$.show('phone_num');
			var status = response.status;
			if (status == -1){
				$.show('phone_tip');
			} else if (status == 1){
				$.show('phone_btn');
				$.G('phone_input').onclick = function(){
					$.G('phone_input').disabled = 'disabled';
					$.ajax.post('/contacts/create?rn='+ 100 * Math.random(), 'uid='+userid, function(xhr,responseText){
						$.G('phone_input').disabled = '';
						baiduTalk.alert('请求已发送',{style:"success",autohide:true});
						$.hide('phone_POPBOX');
					});
				}
			}
		});
	}
}(baidu);

//显示表情
baiduTalk.showFaces = function($){
	var faces = {
		"default": {
			title: "\u9ed8\u8ba4\u5206\u7ec4",
			items: [{
			name: "\u5fae\u7b11",
			shortcut: "[:)]",
			md5: "1e376a99d4059562772aad9ac065fd71",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5927\u7b11",
			shortcut: "[:D]",
			md5: "c5ce7689438e5ee92c5942d4885fc198",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5077\u7b11",
			shortcut: "[tx]",
			md5: "d2ff68289e44c32d61f17e9cfb8f781a",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u61a8\u7b11",
			shortcut: "[:o]",
			md5: "564396330c9e704c27533dd0a9f38d56",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5f97\u610f",
			shortcut: "[dy]",
			md5: "33991a718d98b7bde46d1656acd1d84f",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u53ef\u7231",
			shortcut: "[ka]",
			md5: "1eac4820cb2162ad0ea9050f730701ea",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5bb3\u7f9e",
			shortcut: "[hx]",
			md5: "afb7b910b894d8638a5f5f60d66080bb",
			type: "gif",
			frame: "4"
			},
			{
			name: "\u4e56",
			shortcut: "[oo]",
			md5: "6eeeea78151b0d992342b5d974ea9748",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u6dd8\u6c14",
			shortcut: "[tq]",
			md5: "3567d74d273570047d563a52487b458d",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u8c03\u76ae",
			shortcut: "[:p]",
			md5: "17a002956048d2cc3e7136a60995f4c5",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u6d41\u6cea",
			shortcut: "[ll]",
			md5: "6d177c2e8caa44b47950afd1c2d94ea1",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u5927\u54ed",
			shortcut: "[:'(]",
			md5: "f2468ad19982b6109525f86e60da0a40",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u6487\u5634",
			shortcut: "[pz]",
			md5: "f4075f32764665658fe69d475536685f",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u95ed\u5634",
			shortcut: "[:-#]",
			md5: "97aac5ef30ca5c313f5055d3303a901a",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u5618",
			shortcut: "[xu]",
			md5: "ea12132c217e29cc32a70ef2123baa55",
			type: "gif",
			frame: "3"
			},
			{
			name: "\u9119\u89c6",
			shortcut: "[bs]",
			md5: "0fd150d82ae7f2d174c9601f9ee09247",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u50b2\u6162",
			shortcut: "[am]",
			md5: "8484e2fcd13826ff6d311fa23f6133f1",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u767d\u773c",
			shortcut: "[fc]",
			md5: "46e7c6b53203f314943f5af66f6b9daf",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u601d\u8003",
			shortcut: "[sk]",
			md5: "8c1066c3a4fc9115b46e3ae72a19e3f4",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u56f0",
			shortcut: "[|-)]",
			md5: "fd2bdb138346f328795d068df107ec90",
			type: "gif",
			frame: "1"
			},
			{
			name: "\u7761",
			shortcut: "[zz]",
			md5: "d6c03a77dc812595b2f41fdde34d05a6",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u6c57",
			shortcut: "[lh]",
			md5: "fd2f51cd66989306299d8ad075abbc89",
			type: "gif",
			frame: "1"
			},
			{
			name: "\u5c34\u5c2c",
			shortcut: "[:$]",
			md5: "b143058415f04e4f21302736326fb37c",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u60ca\u8bb6",
			shortcut: "[:-o]",
			md5: "c6fbb9628da63dc12c9a1fef25dea934",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u60ca\u6050",
			shortcut: "[jk]",
			md5: "4a19620c98f2d809ea46900a0b552d7c",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u7591\u95ee",
			shortcut: "[?]",
			md5: "7e9cbda5e0b325f01d478f8e4adf69b2",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u6655",
			shortcut: "[:s]",
			md5: "18c3ccd14d992d8e5aa30acfe670d42f",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u6572\u6253",
			shortcut: "[qd]",
			md5: "d237de97c3277b7749ce839db39b0649",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u96be\u8fc7",
			shortcut: "[:(]",
			md5: "f2e7df81f1e48584a82c82f99d266b7c",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u59d4\u5c48",
			shortcut: "[wq]",
			md5: "3ced67ed7484ec180470b6cf8f0e44b3",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u8272",
			shortcut: "[se]",
			md5: "5c0aacf4ce01a07aa72ced20edfb1fb0",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u6293\u72c2",
			shortcut: "[zk]",
			md5: "fd78f2b8f16086a940e90f370b2bb0d4",
			type: "gif",
			frame: "1"
			},
			{
			name: "\u6124\u6012",
			shortcut: "[:@]",
			md5: "c6d1d4982260a4bad13aab943f7799f0",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5410",
			shortcut: "[+o(]",
			md5: "658d87d64e128385f28a59c15aa8cb91",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u8870",
			shortcut: "[sh]",
			md5: "ae2b37bc2c8186a5dad63a583ad278cb",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u518d\u89c1",
			shortcut: "[zj]",
			md5: "b6db7f3a9e8a9c864046eb0eaa15942d",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5de6\u62e5\u62b1",
			shortcut: "[{]",
			md5: "3890735fdd2f25319367532f660bbcd2",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u53f3\u62e5\u62b1",
			shortcut: "[}]",
			md5: "28a6dcccc96ad6d3082a0ff5554bebd6",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u95ea\u4eba",
			shortcut: "[sr]",
			md5: "eb06e9170d5b470f124d3943f537e714",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5200",
			shortcut: "[d]",
			md5: "d32893593db6217773e102bd694db4d8",
			type: "gif",
			frame: "2"
			},
			{
			name: "\u543b",
			shortcut: "[w]",
			md5: "11d117a72c9cd5ffa2110c31cb4a385b",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u7231\u60c5",
			shortcut: "[ai]",
			md5: "7f73aeabe8ddb4bb23e06de4e6072e40",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5fc3\u788e",
			shortcut: "[xs]",
			md5: "b5fbcef53bf2d695db6bd48faa326585",
			type: "gif",
			frame: "1"
			},
			{
			name: "\u9c9c\u82b1",
			shortcut: "[xh]",
			md5: "5bc342dfc4b92d4c0cad3a4207a99380",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u67af\u840e",
			shortcut: "[kw]",
			md5: "9ef7d4c187f298a10953f5096cbe9162",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u80dc\u5229",
			shortcut: "[sl]",
			md5: "f08d998e04027d92feaf0f8667bb016c",
			type: "gif",
			frame: "0"
			},
			{
			name: "OK",
			shortcut: "[ok]",
			md5: "f143718613f47bb929e7134b2457f260",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5927\u62c7\u6307",
			shortcut: "[n]",
			md5: "2f5113cfd0a33bfec485c222051db205",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5f31",
			shortcut: "[r]",
			md5: "2ea09b4e887a6871e22d6e52a014179c",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u63e1\u624b",
			shortcut: "[ws]",
			md5: "a21bf8c01f41b9148b81aa1b53fb3a0e",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u86cb\u7cd5",
			shortcut: "[^]",
			md5: "47198bf11c75a03e6249a1ccc1064bce",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5496\u5561",
			shortcut: "[kf]",
			md5: "d6bde4b624846fd08500053358e154ae",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u5403\u996d",
			shortcut: "[cf]",
			md5: "e3aac3a4e1e36a02959f62d9bbcab7ac",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u592a\u9633",
			shortcut: "[#]",
			md5: "75132ac5d361fd71a0b8acc6d99b7692",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u6708\u4eae",
			shortcut: "[s]",
			md5: "5bbb83756e3e652b43f9f03d638718b4",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u661f\u661f",
			shortcut: "[*]",
			md5: "dcb31cac1b742034e9cdc5254f309d00",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u4fbf\u4fbf",
			shortcut: "[bb]",
			md5: "490183579bb95ab6eee1d695cdaef213",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u732a\u5934",
			shortcut: "[zt]",
			md5: "ede07ac7f02fbc613381069a77ff1b5c",
			type: "gif",
			frame: "0"
			},
			{
			name: "\u94b1",
			shortcut: "[q]",
			md5: "eeb68b5c092155df924e69b2a1de21f9",
			type: "gif",
			frame: "0"
			},
			{
			name: "Hi",
			shortcut: "[hi]",
			md5: "33037bedc05c33f5998f875c608d4ba1",
			type: "gif",
			frame: "2"
			}]
		}
	}
	var dialog = function(){
		var div = baiduTalk.createElement('div','face_dialog','face-dialog');
		var html = '<ul class="face-tab"><li id="face_default">常用表情</li></ul>';
		html += '<table id="faceHoler" class="face-tbl" cellpadding="0" cellspacing="1">';
		var blankImage = "http://res.t.baidu.com/images/blank.gif";
		for (var v in faces) {
			var p = faces[v];
			for (var i=0;i<p.items.length;i++){
				var td = '<td title="' + p.items[i].name + ' 快捷键 ' + p.items[i].shortcut + '" onclick="baiduTalk.showFaces.face(\'' + v + '\',\'' + i + '\')"><a href="javascript:void(0)" onclick="this.blur();return false"><img src="' + blankImage + '" class="f' + i + ' ' + v + '" /></a></td>';
				if (i%12 == 0){
					html += '<tr>' + td;
				} else if (i%12 == 11){
					html += td + '</tr>'
				} else {
					html += td;
				}
			}
		}
		html += '</table>';
		div.innerHTML = html;
		return div;
	}
	return{
		target: null,
		show: function(element,t){
			var faceBox = baidu.G('face_POPBOX');
			if (faceBox && this.target.id == t){
				if (faceBox.style.display == 'none') {
					$.dom.addClass(faceBox.parentNode, 'relative');
					$.show(faceBox);
				} else {
					$.hide(faceBox);
					$.dom.removeClass(faceBox.parentNode, 'relative');
				}
				return false;
			}
			baiduTalk.popbox(element,{id:'face',content:dialog(),width:361,left:-11,close:true});
			this.target = $.G(t);
		},
		face: function(a,b){
			var t = this.target;
			if ($.lang.isElement(t)){
				$.hide('face_POPBOX');
				var val_face = faces[a].items[b].shortcut;
				baiduTalk.rangeText(t, val_face);
			}
		}
	}
}(baidu);

var search = function(){
	if (baidu.G('search_content').value != '' && baidu.G('search_content').value != '搜姓名/说吧号') {
		window.location.href = '/s/' + encodeURIComponent(baidu.G('search_content').value);
	} else {
		window.location.href = '/s';
	}
}

//文档加载完毕后调用的方法
baidu.dom.ready(function(){
	//搜索框初始化
	if (baidu.G('search_content')) {
		baiduTalk.searchInput(baidu.G('search_content'), "搜姓名/说吧号");
		baiduTalk.keyEvent(baidu.G('search_content'), 'enter', function(){
			search();
		});
	}
	//输入框添加焦点样式
	baiduTalk.inputFocus(baidu.dom.q('text','setting','input'));
	
	//浮动层控制
	(function($){
		var noticeBox = baidu.G('notice_box');
		if(noticeBox){
			var baiduTalk_id = baidu.G('baiduTalk_id').value;
			baidu.event.on(baidu.G('notice_open'),'click',function(){
				baidu.dom.toggle(noticeBox);
			});
			baidu.event.on(baidu.G('notice_close'),'click',function(e){
				baidu.hide(noticeBox);
			});
			$.event.on(document.body, 'click', function(e){
				if (noticeBox.style.display == 'none'){
					return false;
				}
				var e = e || window.event;
				var target = e.target || e.srcElement;
				while (target){
					if (target == noticeBox.parentNode){
						return;
					}
					target = target.parentNode;
				}
				baidu.hide(noticeBox);
			});
			//通知，每30秒取一次数据
			var ajaxLoop = function(){
				$.ajax.get("/notice/getCount?rn="+ Math.random(), function(xhr,responseText){
					if (xhr.status == 200){
						var response = $.json.parse(responseText);
						var count_follow = parseFloat(response.follow_count);
						var count_reply = parseFloat(response.reply_count);
						var count_forward = parseFloat(response.forward_count);
						var count_contact = parseFloat(response.contact_count);
						var count_inbox = parseFloat(response.inbox_count);
						var count_total = count_follow + count_reply + count_forward + count_contact + count_inbox;
						if(count_total>0){
							baidu.G('notice_num').innerHTML = '<span class="n-l"></span>' + (count_total>99 ? '99+' : count_total);
							baidu.show('notice_num');
							baidu.hide('notice_no');
							if(count_follow>0){
								baidu.G('notice_follow').innerHTML = count_follow;
								baidu.show(baidu.G('notice_follow').parentNode.parentNode);
							}
							if(count_reply>0){
								baidu.G('notice_reply').innerHTML = count_reply;
								baidu.show(baidu.G('notice_reply').parentNode.parentNode);
							}
							if(count_forward>0){
								baidu.G('notice_forward').innerHTML = count_forward;
								baidu.show(baidu.G('notice_forward').parentNode.parentNode);
							}
							if(count_contact>0){
								baidu.G('notice_contact').innerHTML = count_contact;
								baidu.show(baidu.G('notice_contact').parentNode.parentNode);
							}
							if(count_inbox>0){
								baidu.G('notice_inbox').innerHTML = count_inbox;
								baidu.show(baidu.G('notice_inbox').parentNode.parentNode);
							}
						}
						if (baidu.cookie.get(baiduTalk_id+'_notice') != count_total){
							if (baidu.cookie.get(baiduTalk_id + '_notice') < count_total) {
								baidu.dom.show(noticeBox);
							}
							baidu.cookie.set(baiduTalk_id+'_notice',count_total,{
								path:'/',
								expires:new Date(2099,1,1),
								domain:'t.baidu.com',
								secure:false
							});
						}
					}
				});
			}
			ajaxLoop();
			setDecayInterval(30, 15, 300, ajaxLoop);
		}
		var objFixed = $.G('backTop');
		if (objFixed) {
			var footHeight = $.G('footer').offsetHeight + 20;
			var objHeight = 63;
			//以下为可能变化的数值
			var pageWidth = 0, pageHeight = 0, pageScroll = 0, pageScrollLeft = 0, pageMaxHeight = 0, pageBottom = 0, positionLeft = 0, videoHeight = 0;
			var setPositionLeft = function(){
				pageScrollLeft = ($.browser.ie && $.browser.ie == 6) ? 0 : $.page.getScrollLeft();
				positionLeft = $.dom.getPosition('main').left + $.G('main').scrollWidth - pageScrollLeft;
				if ($.browser.firefox && pageScrollLeft == 0) {
					positionLeft += 1;
				}
				$.setStyle(objFixed, 'left', positionLeft);
			}
			setPositionLeft();
			if ($.browser.ie == 6) {
				var positionTop = 0;
				var setPositionTop = function(){
					pageScroll = $.page.getScrollTop();
					if (pageScroll > 0) {
						objFixed.style.display = '';
					} else {
						objFixed.style.display = 'none';
						return false;
					}
					pageHeight = $.page.getViewHeight();
					pageMaxHeight = $.page.getHeight();
					if (pageScroll > (pageMaxHeight - pageHeight - footHeight)) {
						pageBottom = pageScroll - (pageMaxHeight - pageHeight - footHeight);
						positionTop = pageHeight + pageScroll - objHeight;
					} else {
						pageBottom = 0;
						positionTop = pageHeight + pageScroll - objHeight;
					}
					videoHeight = baidu.G('popVideo') && baidu.G('popVideo').style.display != 'none' ? 375 : 0;
					if (videoHeight>0){
						$.setStyle(objFixed, 'top', positionTop - videoHeight);
					} else {
						$.setStyle(objFixed, 'top', positionTop - pageBottom);
					}
				}
				setPositionTop();
				$.event.on(window, 'resize', function(){
					setPositionLeft();
					setPositionTop();
				});
				$.event.on(window, 'scroll', function(){
					setPositionTop();
				});
				_VideoSetPosition = setPositionTop;
			} else {
				var positionBottom = 0;
				var setPositionBottom = function(){
					pageScroll = $.page.getScrollTop();
					if (pageScroll > 0) {
						objFixed.style.display = '';
					} else {
						objFixed.style.display = 'none';
						return false;
					}
					pageHeight = $.page.getViewHeight();
					pageMaxHeight = $.page.getHeight();
					if (pageScroll > (pageMaxHeight - pageHeight - footHeight)) {
						positionBottom = pageScroll + pageHeight - (pageMaxHeight - footHeight);
					} else {
						positionBottom = 0;
					}
					videoHeight = baidu.G('popVideo') && baidu.G('popVideo').style.display != 'none' ? 375 : 0;
					if (videoHeight>0){
						$.setStyle(objFixed, 'bottom', videoHeight);
					} else {
						$.setStyle(objFixed, 'bottom', positionBottom);
					}
				}
				setPositionBottom();
				$.event.on(window, 'resize', function(){
					setPositionLeft();
					setPositionBottom();
				});
				$.event.on(window, 'scroll', function(){
					setPositionBottom();
				});
				_VideoSetPosition = setPositionBottom;
			}
		}
	})(baidu);
});