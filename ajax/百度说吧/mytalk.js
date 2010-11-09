/**
 * 关注与被关注的回调函数
 * @param reJson
 * @param uid
 * @param t
 * @return
 */
 var setFollow = function(elem,id,para){
	var t = !para ? 'f' : 't';
	var ty = !para ? true : false;
	var str = !para ? '立即关注' : '取消关注';
	baidu.ajax.post("/follow/setfollow?rn="+ 100 * Math.random(), "&uid="+id+"&t="+t, function(xhr,responseText){
		if (xhr.status == 200){
			var r = baidu.json.parse(responseText);
			if (r.status == 1){
				elem.innerHTML = str;
				elem.onclick = function(){
					setFollow(elem,id,ty);
				}
				if (t == 't'){
					baidu.dom.removeClass(elem,'btn-blue');
					baidu.dom.addClass(elem.parentNode,'followed');
					var span = document.createElement('span');
					span.innerHTML = '已关注，';
					elem.parentNode.insertBefore(span,elem);
				} else {
					baidu.dom.addClass(elem,'btn-blue');
					baidu.dom.removeClass(elem.parentNode,'followed');
					elem.parentNode.removeChild(elem.parentNode.firstChild);
				}
			} else {
				baiduTalk.alert(r.msg);
			}
		} else {
			baiduTalk.alert('无法发送请求');
		}
	});
}

/**
 * 计算字符串长度 2个字母=1个汉字
 * @param {Object} Str
 */
function strlen(Str) {
	var escStr = escape(Str);
	var numI = 0;
	var escStrlen = escStr.length;
	for (i = 0; i < escStrlen; i++) {
		if (escStr.charAt(i) == '%') {
			if (escStr.charAt(++i) == 'u') {
				numI++;
			}
		}
	}
	return Str.length+numI;
}

//推荐
var recomDialog = null;
var recommend = function($){
	var init = function(avatar,baiduid,userid,name,sex){
		var recom_con = baiduTalk.createElement('div','dialog_recommend','recom-box');
		var recom_html = '<div class="recom-info"><img class="f-l avatar" width="48" src="' + avatar + '" /><div class="f-r gray12">';
		recom_html += '<p id="recomName">推荐@' + name + '(' + baiduid + ')：</p>';
		recom_html += '<p class="recom-tip">说一句推荐的话，让别的朋友知道你为什么推荐' + (sex==1 ? '他':'她') + '</p></div></div>';
		recom_html += '<p><textarea id="recomText" class="recom-text"></textarea></p>';
		recom_html += '<p id="recomLoading"><em id="recomError" class="error"></em></p>';
		recom_html += '<p class="dialog-button"><a id="recomSubmit" class="tangram-dialog-accept" href="javascript:void(0)">确定</a><a id="recomCancel" class="tangram-dialog-cancel" href="javascript:void(0)">取消</a></p>'
		recom_con.innerHTML = recom_html;
		recom_con.style.display = 'none';
		document.body.appendChild(recom_con);
		var oTextarea = $.G('recomText');
		if ($.browser.ie) {
			$.event.on(oTextarea, 'propertychange', function(){
				baiduTalk.atFilter(oTextarea);
			});
		} else {
			$.event.on(oTextarea, 'input', function(){
				baiduTalk.atFilter(oTextarea);
			});
		}
		recomDialog = baiduTalk.dialog('', {
			content: recom_con,
			titleText: '把'+name+'推荐给朋友',
			width: 360,
			draggable: true,
			autoOpen: false,
			onopen: function(){
				baiduTalk.selectText(oTextarea,0,0);
			},
			onclose: function(){
				oTextarea.value = '';
				baidu.G('recomError').innerHTML = '';
			}
		});
		recom_con.style.display = '';
		$.event.on(baidu.G('recomCancel'), 'click', function(){
			recomDialog.close();
		});
		$.event.on(baidu.G('recomSubmit'), 'click', function(){
			var value = baidu.G('recomName').innerHTML + baidu.string.trim(baidu.G('recomText').value);
			var value_length = baiduTalk.urlFilter(value);
			if (value_length > 140) {
				baidu.G('recomError').innerHTML = '不能超过140个字符';
			} else {
				baidu.hide('recomError');
				baiduTalk.loading.start(baidu.G('recomLoading'), {
					txt: '提交中...'
				});
				baidu.ajax.post("/message/recommend?"+Math.random(),"uid="+encodeURIComponent(userid)+"&content="+encodeURIComponent(value), function(xhr,responseText){
					var r = baidu.json.parse(responseText);
					baiduTalk.loading.end(baidu.G('recomLoading'));
					baidu.show('recomError');
					if (xhr.status == 200 && r.status == 0) {
						baiduTalk.alert('推荐成功',{
							style: 'success',
							autohide: true
						});
						recomDialog.close();
						var span = baiduTalk.createElement('span','','gray12');
						span.innerHTML = '已推荐';
						baidu.dom.insertBefore(span,baidu.G('recommend'));
						baidu.dom.remove(baidu.G('recommend'));
					}else{
						var e ='发生错误';
						if(r.status == 3){
							switch (r.ret){
								case 3:
									e = '请先登录';
									break;
								case 5:
									e = '内容不能超过140个字符';
									break;
								case 6:
									e = '消息已经发出，无需重复提交';
									break;
								case 11:
									e = '内容中包含敏感词，请重新输入';
									break;
								case 12:
									e = '请先登录';
									break;
								case 400:
									e = '你已被锁定，无法操作';
									break;
								default:
									return;
							}
						}else if(r.status == 5){
							e = '只能推荐通过百度说吧认证的用户';
						}else if(r.status == 7){
							e = '很抱歉,你已经推荐过此用户';
						}
						baidu.G('recomError').innerHTML = e;
					}
				});
			}
		});
		baiduTalk.keyEvent(baidu.g('recomText'),'ctrl+enter',function(){
			if (baidu.browser.ie) {
				baidu.G('recomSubmit').click();
			} else {
				var evt = document.createEvent("MouseEvents");
				evt.initEvent("click", true, true);
				baidu.G('recomSubmit').dispatchEvent(evt);
			}
		});
		return recom_con;
	}
	return function(avatar,baiduid,userid,name,sex){
		var recom_box = $.G('dialog_recommend');
		if (!recom_box){
			recom_box = init(avatar,baiduid,userid,name,sex);
		}
		recomDialog.update({top:'auto'});
		recomDialog.open();
	}
}(baidu);

var setBlack = function(id,t){
	var t = t;
	var cfMsg = '';
	if (t == 't'){
		cfMsg = '<b>将他加入黑名单?</b><br/>确定将他加入黑名单后……<br/>他将不能再关注你，也不能回复你的消息。';
	} else {
		cfMsg = '确定将此用户从你的黑名单中删除吗?';
	}
	baiduTalk.confirm(cfMsg,{
		onaccept: function(){
			baidu.ajax.post("/black/setblack?rn="+ 100 * Math.random(), "&uid="+id+"&t="+t, function(xhr,responseText){
				if (xhr.status == 200){
					var r = baidu.json.parse(responseText);
					if (r.status == 0){
						location.reload();
					} else {
						baiduTalk.alert(r.msg);
					}
				} else {
					baiduTalk.alert('无法发送请求');
				}
			});
		}
	});
	return false;
}