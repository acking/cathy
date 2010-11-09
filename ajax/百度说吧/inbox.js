var chatNow = {};
baidu.dom.ready(function(){
	chatNow = function($){
		var chat_con = baiduTalk.createElement('div','chat_dialog','chat-dialog');
		var chat_html = '';
		chat_html += '<table class="tbl-dialog">';
		chat_html += '<tr><th>发私聊给</th><td><input id="chatTarget" class="text s14" type="text" /></td></tr>';
		chat_html += '<tr><th>私聊内容</th><td><div class="face-chat"><a class="face" hidefocus="true" onclick="baiduTalk.showFaces.show(this,\'chatText\')" href="javascript:void(0)"></a></div>';
		chat_html += '<textarea id="chatText" class="text chat-text"></textarea></td></tr>';
		chat_html += '<tr class="nopd"><th></th><td id="chatLoading"><em id="chatError">不能超过140个字符</em></td></tr>';
		chat_html += '</table>';
		chat_html += '<p class="dialog-button"><a id="chatSubmit" class="tangram-dialog-accept" href="javascript:void(0)">发送</a><a id="chatCancel" class="tangram-dialog-cancel" href="javascript:void(0)">取消</a></p>';
		chat_con.innerHTML = chat_html;
		chat_con.style.display = 'none';
		document.body.appendChild(chat_con);
		var cTarget = $.G('chatTarget');
		var cTextarea = $.G('chatText');
		var cError = $.G('chatError');
		var cSubmit = $.G('chatSubmit');
		var cCancel = $.G('chatCancel');
		baiduTalk.suggestion.create(cTarget,{maxHeight:22,tag:'input',type:1,regExp: /[\u4E00-\u9FA5]{1,6}$/});
		var chatDialog = baiduTalk.dialog('',{
			content: chat_con,
			titleText: '发私聊',
			width: 320,
			autoOpen: false,
			onclose: function(){
				cTarget.value = '';
				cTarget.disabled = false;
				cTextarea.value = '';
				cError.innerHTML = '不能超过140个字符';
				$.dom.removeClass(cError,'error');
			}
		});
		chat_con.style.display = '';
		$.event.on(cCancel, 'click', function(){
			chatDialog.close();
		});
		baiduTalk.keyEvent($.G('chatText'),'ctrl+enter',function(){
			if (baidu.browser.ie) {
				baidu.G('chatSubmit').click();
			} else {
				var evt = document.createEvent("MouseEvents");
				evt.initEvent("click", true, true);
				baidu.G('chatSubmit').dispatchEvent(evt);
			}
		});
		var chatOk = function(mid){
			var target = baidu.string.trim($.G('chatTarget').value);
			var value = baidu.string.trim($.G('chatText').value);
			if(target.length == 0){
				$.dom.addClass(cError,'error');
				cError.innerHTML = '收信人不能为空';
			} else if (!(/^@?([\u4E00-\u9FA5]+)\((\d{5,10})\)$/.test(target))){
				$.dom.addClass(cError,'error');
				cError.innerHTML = '收信人格式错误';
			} else if (value.length > 140) {
				$.dom.addClass(cError,'error');
				cError.innerHTML = '不能超过140个字符';
			} else if(value.length == 0) {
				$.dom.addClass(cError,'error');
				cError.innerHTML = '内容不能为空';
			} else {
				//指定上传函数
				postSiteMessage(mid);
				baidu.hide('chatError');
				baiduTalk.loading.start(baidu.G('chatLoading'),{txt:'提交中...'});
			}
		}
		return{
			open: function(mid,target){
				cSubmit.onclick = function(){
					chatOk(mid);
				}
				chatDialog.update({top:'auto'});
				chatDialog.open();
				if (target){
					cTarget.value = target;
					cTarget.disabled = true;
					cTextarea.focus();
				} else {
					cTarget.focus();
				}
			},
			close: function(){
				chatDialog.close();
			}
		}
	}(baidu);
});
	
/**
 * 发表消息
 */
var postSiteMessage = function(mid){
	var content = baidu.trim(baidu.g("chatText").value);
	var targetValue = baidu.trim(baidu.g("chatTarget").value);
	var targetNumber = targetValue.match(/\(\d{5,10}\)$/gi);
	var receiverID = targetNumber != null ? targetNumber[0].slice(1,-1) : null;
	baidu.ajax.post("/inbox/send?"+Math.random(),"content="+encodeURIComponent(content)+"&id="+encodeURIComponent(receiverID), function(xhr,responseText){
		var r = baidu.json.parse(responseText);
		baiduTalk.loading.end(baidu.G('chatLoading'));
		baidu.show('chatError');
		if (xhr.status == 200 && r.status == undefined) {
			baidu.g("chatText").focus();
		}else{
			var e ='发生错误';
			if(r.status == 1){
				e = '收信人说吧号不能为空';
			}else if(r.status == 2){
				e = '内容不能为空';
			}else if(r.status == 3){
				e = '内容不能超过140个字符';
			}else if(r.status == 4){
				e = '您与收信人没有互相关注,无法发送私聊';
			}else if(r.status == 5){
				e = '内容发送遇到问题，请重新发送';
			}else if(r.status == 6){
				e = '收信人不存在，请重新选择';
			}else if(r.status == 7){
				e = '删除的私聊不存在，请重新选择';
			}else if(r.status == 8){
				e = '私聊删除出现问题';
			}else if(r.status == 11){
				e = '内容中包含敏感词，请重新输入';
			}else if(r.status == 12){
				e = '请先登录';
			}else if(r.status == 200){
				e = '私聊发送成功'; 
				baiduTalk.alert(e,{autohide:true,style:'success'});
				chatNow.close();
				if(mid == 1){
					location.reload();
				}
				return;
			}
			else if(r.status == 400){
				window.location.href='/logout';
				return;
			}
			baidu.dom.addClass(baidu.G("chatError"),'error');
			baidu.G("chatError").innerHTML = e;
		}
	});
}

//删除消息
var deleteSiteMessage = function(mid){
	var tr = baidu.G("message_tr_" + mid);
	baiduTalk.confirm("确认要删除？",{
		autodis: true,
		onaccept: function(){
			baidu.ajax.post(
			"/inbox/remove?"+ Math.random()
			,"id="+ encodeURIComponent(mid)
			,function(xhr, responseText){
				var jsonResult = baidu.json.parse(responseText);
				if(jsonResult['status'] == 200){
					baidu.dom.remove(tr);
					var tr_others = baidu.G('chat_tbl').getElementsByTagName('tr');
					if(tr_others.length == 0){
						var url = window.location.href;
						var num = parseFloat(baidu.url.getQueryValue(url,'page'));
						if(!num || num == 1){
							window.location.reload();
						} else {
							window.location.href = window.location.pathname + '?page=' + (num-1);
						}
					}
				}
				else{
					baiduTalk.alert('删除私聊出现问题，请重试');
				}
			});
		}
	});
}

