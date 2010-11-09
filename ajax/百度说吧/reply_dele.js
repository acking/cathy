//黑名单
var setReplyBlack = function(id){
	baidu.ajax.post("/black/setblack?rn="+ 100 * Math.random(), "&uid="+id+"&t=t");
}

function del(url,bid){
	var baiduid = baidu.G('baiduTalk_id').value;
	var deleteHtml = (baiduid != bid) ? '确认要删除回复?<br/><br/><label class="gray12"><input class="val-m" id="check_black" type="checkbox"/>&nbsp;同时将此人加入我的黑名单</label>' : '确认要删除回复?';
	baiduTalk.confirm(deleteHtml,{
		autodis: true,
		onaccept: function(){
			if (baiduid != bid && baidu.G('check_black').checked == true){ setReplyBlack(bid); }
			window.location.href = url;
		}
	});
	return false;
}

function subdel(){
	var id = '';
	var mid = '';
	var objs = document.getElementsByName("id[]");
	for (var i = 0; i < objs.length; i++) {
		if (objs[i].type.toLowerCase() == "checkbox") {
			if (objs[i].checked == true) {
				id += objs[i].value + ',';
				mid += objs[i].id + ',';
			}
		}
	}
	if (id.indexOf(',') >= 0) {
		id = id.substring(0, id.length - 1)
	}
	if (mid.indexOf(',') >= 0) {
		mid = mid.substring(0, mid.length - 1)
	}
	if (id == '') {
		baiduTalk.alert('请选择删除项');
		return false;
	}
	baiduTalk.confirm("确认要删除？",{
		autodis: true,
		onaccept: function(){
			baidu.ajax.post("/reply/deleteall", "rid=" + id + "&mid=" + mid, function(xhr, responseText){
				if (xhr.status == 200) {
					location.reload();
				} else if (responseText == "false") {
					baiduTalk.alert('删除失败！')
				}
			});
		}
	});
}
var selectAll = function(){
	var checkTags = baidu.dom.query('input:checkbox');
	var checkNow = checkTags[0].checked ? true : false;
	for (var j = 0; j < checkTags.length; j++) {
		checkTags[j].checked = (checkNow === true) ? false : true;
	}
}
baidu.dom.ready(function(){
	var checkForm = baidu.G('checkForm');
	var checkTag = baidu.dom.query('input:checkbox');
	var replyMsg = checkForm.elements['id[]'];
	var forAll = checkForm.elements['deleteAll'];
	baidu.each(forAll,function(item,i){
		baidu.event.on(item,'click',function(){
			for (var j = 0; j < checkTag.length; j++) {
				checkTag[j].checked = (item.checked === true) ? true : false;
			}
		});
	});
	if (replyMsg.length > 0) {
		baidu.each(replyMsg, function(item, i){
			baidu.event.on(item, 'click', function(){
				var flag = true;
				for (var j = 0; j < replyMsg.length; j++) {
					if (replyMsg[j].checked) {
						continue;
					} else {
						flag = false;
						break;
					}
				}
				for (var k = 0; k < forAll.length; k++) {
					forAll[k].checked = (flag === true) ? true : false;
				}
			});
		});
	} else {
		baidu.event.on(replyMsg, 'click', function(){
			var flag = true;
			if (replyMsg.checked) {
				flag = true;
			} else{
				flag = false;
			}
			for (var k = 0; k < forAll.length; k++) {
				forAll[k].checked = (flag === true) ? true : false;
			}
		});
	}
});
var toggleReply = function(mid,name,baidu_id,msgid){
	var reply_content = baidu.g('reply_action_'+ mid);
	var replyAction = function(textarea){
		var value = baidu.string.trim(textarea.value);
		var value_length = baiduTalk.urlFilter(value);
		if (value_length > 140) {
			baiduTalk.alert('不能超过140个字符');
		} else if(value_length == 0) {
			baiduTalk.alert('回复不能为空');
		} else {
		//指定上传函数
			baidu.ajax.post("/reply/create?"+ Math.random(),"mid="+ encodeURIComponent(msgid) +"&content="+ encodeURIComponent('回复@'+name+'('+baidu_id+')：'+value)+ "&fid="+encodeURIComponent(mid),function(xhr, responseText){
				if (xhr.status == 200) {
					var jsonResult = baidu.json.parse(responseText);
					if(jsonResult['status'] == 0){
						rTextarea.value = '';
						baidu.hide('reply_action_'+ mid +'');
						baiduTalk.alert('消息已发送',{
							style: 'success',
							autohide: true
						});
					}else if(jsonResult['status'] == 1){
						baiduTalk.alert('只有'+jsonResult['name']+'关注的用户才可以回复');
					}else if(jsonResult['status'] == 2){
						baiduTalk.alert('很抱歉,消息原文已经被删除,无法回复');
					}else if(jsonResult['status'] == 3){
						baiduTalk.alert('由于对方的隐私设置，你无法进行回复');
					}else if(jsonResult['status'] == 11){
						baiduTalk.alert('内容中包含敏感词，请重新输入');
					}
				} else {
					baiduTalk.alert('无法发送请求');
				}
			});
		}
	}
	if(!reply_content){
		var template ='<div class="comments" id="reply_action_'+ mid +'">'
			+'<div class="reply-input"><div class="face-reply"><a class="face" hidefocus="true" onclick="baiduTalk.showFaces.show(this,\'reply_content_' + mid + '\')" href="javascript:void(0)"></a></div><textarea id="reply_content_'+ mid +'" class="reply-editor"></textarea> <a id="reply_submit_'+ mid +'" data="'+ mid +'" class="btn-gray" href="javascript:void(0);">回复</a></div>'
			+'</div>';
		baidu.insertHTML("message_" + mid,'beforeEnd',template);
		var rTextarea = baidu.G('reply_content_'+mid);
		baiduTalk.textareaAuto(rTextarea);
		if (baidu.browser.ie) {
			baidu.event.on(rTextarea, 'propertychange', function(){
				baiduTalk.atFilter(rTextarea);
			});
		} else {
			baidu.event.on(rTextarea, 'input', function(){
				baiduTalk.atFilter(rTextarea);
			});
		}
		baiduTalk.suggestion.create(rTextarea);
		baidu.event.on(baidu.g('reply_submit_'+ mid), 'click', function(){
			replyAction(rTextarea);
		});
		//增加键盘快捷键提交
		baiduTalk.keyEvent(rTextarea, 'ctrl+enter', function(){
			replyAction(rTextarea);
		});
		rTextarea.focus();
	} else{
		if (reply_content.style.display=='none'){
			baidu.show(reply_content);
			var rTextarea = baidu.G('reply_content_'+mid);
			baiduTalk.selectText(rTextarea,rTextarea.value.length,rTextarea.value.length);
		} else {
			baidu.hide(reply_content);
		}
	}
}
