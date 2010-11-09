//全局变量
var group_id = '', group_type = '', group_belong = '';

//黑名单
var setReplyBlack = function(id){
	baidu.ajax.post("/black/setblack?rn="+ 100 * Math.random(), "&uid="+id+"&t=t");
}

//收藏
var collect = function($){
	var colError = function(s){
		var e = '发生错误';
		switch(s){
			case 1:
				e = '操作对象不存在';
				break;
			case 2:
				e = '系统繁忙，请稍候尝试';
				break;
			case 14:
				e = '你还未登录，请登录后继续访问';
				break;
			case 19:
				e = '你的操作太频繁';
				break;
			case 20:
				e = '对不起，该消息已被删除，无法收藏';
				break;
			case 21:
				e = '此群已经解散';
				setTimeout(function(){
					window.location.reload();
				},1500);
				break;
			default:
				return;
		}
		return e;
	}
	return function(elem,id,t){
		var url = !t ? '/collect/uncollectmessage?' + Math.random() : '/collect/collectmessage?' + Math.random();
		var callback = function(){
			if (!t){
				elem.onclick = null;
				location.reload();
			} else {
				baiduTalk.alert('收藏完毕',{autohide:true});
				elem.onclick = null;
				elem.className = 'nolink';
				elem.innerHTML = '已收藏';
			}
		}
		var collectAjax = function(){
			baidu.ajax.post(url, 'id='+id, function(xhr, responseText){
				if (xhr.status == 200){
					var r = baidu.json.parse(responseText);
					if (r.status == 0){
						callback();
					} else {
						var e = colError(r.status);
						baiduTalk.alert(e);
					}
				} else {
					baiduTalk.alert('无法发送请求');
				}
			});
		}
		if (!t){
			baiduTalk.confirm('确定要删除这条收藏?',{
				onaccept: function(){
					collectAjax();
				}
			});
		} else {
			collectAjax();
		}
		return false;
	}
}(baidu);

//将回复整合
var tReply = function($){
	var formatReply = function(replyModel){
		var delete_html = '';
		delete_html += '<p class="talk-handle"><span class="opt">';
		if(replyModel.is_owner){
			delete_html += '<a href="javascript:void(0);" onclick="deleteReply(\''+replyModel.message_id+'\','+replyModel.id+','+replyModel.baidu_id+');">删除</a> | '
		}
		delete_html += '<a href="javascript:void(0);" onclick="setReplyFid('+replyModel.id+',\''+replyModel.name+'\',\''+replyModel.message_id+'\','+replyModel.baidu_id+');">回复</a></span></p>';
		var values = {
			id: replyModel.id,
			baidu_id: replyModel.baidu_id,
			name: replyModel.name,
			avatar:replyModel.avatar,
			content: replyModel.content,
			ubbcontent: replyModel.ubbcontent,
			created_time: replyModel.created_time,
			source: replyModel.source
		};
		var vip_html = replyModel.is_vip ? 'vip' : '';
		var fid_html = replyModel.fid == 0 ? '：' : '';
		var tr = {};
		tr.th=document.createElement("th");
		tr.td=document.createElement("td");
		tr.th.innerHTML = baidu.string.format('<a href="/#{baidu_id}"><img class="avatar" src="#{avatar}" /></a>',values);
		tr.td.innerHTML = baidu.string.format('<p class="reply-words max374"><a class="author '+vip_html+'" href="/#{baidu_id}">#{name}</a>'+fid_html+'<span>#{ubbcontent}</span><span class="send-time">(#{created_time})</span></p>',values) + delete_html;
		return tr;
	}
	var listReply = function(mid){
		var groupString = (group_id !== '') ? '&group_id=' + group_id : '';
		baidu.ajax.post("/reply/list?"+ Math.random(), "mid="+encodeURIComponent(mid)+groupString, function(xhr, responseText){
			if (xhr.status == 200){
				var jsonResult = baidu.json.parse(responseText);
				if(jsonResult['replys']){
					baidu.insertHTML("reply_"+mid,'beforeEnd','<table id="' + "reply_tbl_" + mid + '" class="tbl-list"></table>');
					baidu.object.each(jsonResult['replys'], function(item, key){
						var tr = baidu.G('reply_tbl_'+ mid).insertRow(key);
						tr.id = 'reply_' + item.id;
						var trHtml = formatReply(item);
						tr.appendChild(trHtml.th);
						tr.appendChild(trHtml.td);
					});
					var restCount = jsonResult['rest'];
					if(restCount>0){
						var groupString = (group_id !== '') ? '&group_id=' + group_id : '';
						baidu.insertHTML("reply_action_" + mid,'beforeEnd','<p class="reply-tip"><a href="/message/view?id='+mid+groupString+'">后面还有'+ restCount +'条回复，点击查看</a></p>');
					}
					var totalCount = restCount>0 ? jsonResult['replys'].length + restCount : jsonResult['replys'].length;
					if (totalCount>0){
						var mrc = baidu.g('message_reply_count_'+ mid);
						if(mrc){
							if(parseInt(mrc.innerHTML,10) != totalCount){
								baidu.g('message_reply_count_'+ mid).innerHTML = totalCount;
							}
						}else{
							baidu.g('toggle_reply_'+mid).innerHTML += '(<span id="message_reply_count_'+mid+'">' + totalCount + '</span>)';
						}
					} else {
						baidu.g('toggle_reply_'+mid).innerHTML = '回复';
					}
				} else {
					if (jsonResult['status'] == 21) {
						baiduTalk.alert('此群已经解散');
						setTimeout(function(){
							window.location.reload();
						},1500);
					} else {
						baiduTalk.alert('发生错误');
					}
				}
				baiduTalk.loading.end(baidu.G('reply_action_'+mid).parentNode);
				baidu.show('reply_action_'+ mid);
				var rTextarea = baidu.g('reply_content_'+ mid);
				baiduTalk.selectText(rTextarea,rTextarea.value.length,rTextarea.value.length);
			} else {
				baiduTalk.loading.end(baidu.G('reply_action_'+mid).parentNode);
				baiduTalk.alert('无法发送请求');
			}
		});
	}
	return{
		reply_fid: 0,
		reply_content_temp: '',
		setReplyFid: function(fid, name, mid, bid){
			tReply.reply_fid = fid;
			tReply.reply_content_temp = '回复@'+name+'('+bid+')：';
			var reply_text = baidu.g('reply_content_'+mid);
			reply_text.value = '回复@'+name+'('+bid+')：';
			baiduTalk.selectText(reply_text,reply_text.value.length,reply_text.value.length);
		},
		reply: function(mid,local){
			var content = baidu.string.trim(baidu.g('reply_content_'+ mid).value);
			if(tReply.reply_content_temp == content){
				baiduTalk.alert("请输入回复内容", {autohide:true});
				return;
			}
			var value_length = baiduTalk.urlFilter(content);
			if(value_length == 0){
				baiduTalk.alert("请输入回复内容", {autohide:true});
			} else if(value_length > 140){
				baiduTalk.alert("回复不能超过140个字", {autohide:true});
			} else{
				baidu.g('reply_submit_'+ mid).disabled = true;
				var groupString = (group_id !== '') ? '&group_id=' + group_id : '';
				var localString = (local !== '') ? '&toforwarder=1&toauthor=0' : '&toforwarder=0&toauthor=1';
				if (group_id !== '' && group_belong < 3 && baidu.G('reply_group_'+mid).checked == true){
					var fcon = baidu.g('reply_content_'+ mid).value;
					var fid = mid;
					var replyString = (tReply.reply_fid == 0) ? '' : '&reply_fid=' + tReply.reply_fid;
					baidu.ajax.post("/message/forward?"+Math.random(),
						"m_content="+encodeURIComponent(fcon)+"&pic_id=&pic_filename=&pic_id_water=&pic_filename_water=&fid="+fid+localString+groupString+replyString,
						function(xhr,responseText){
						if (xhr.status == 200){
							var r = baidu.json.parse(responseText);
							if (r.ret == undefined) {
								baiduTalk.alert('发送成功',{
									style: 'success',
									autohide: true
								});
								tReply.reply_fid = 0;
								var reply_content = baidu.g('reply_action_'+ mid);
								baidu.hide(reply_content);
								baidu.G('reply_'+mid).innerHTML = '';
								var reply_tip = baidu.q('reply-tip',reply_content,'p');
								if(reply_tip.length>0){
									baidu.dom.remove(reply_tip[0]);
								}
								baidu.g('reply_content_'+ mid).value = "";
								var mrc = baidu.g('message_reply_count_'+ mid);
								if(!mrc){
									baidu.g('toggle_reply_'+mid).innerHTML += '(<span id="message_reply_count_'+mid+'">1</span>)';
								}else{
									baidu.g('message_reply_count_'+ mid).innerHTML = parseInt(baidu.g('message_reply_count_'+ mid).innerHTML) + 1;
								}
								var mrc = baidu.g('message_forward_count_'+ fid);
								if(!mrc){
									baidu.g('onclick_'+fid).innerHTML += '(<span id="message_forward_count_'+fid+'">1</span>)';
								}else{
									baidu.g('message_forward_count_'+ fid).innerHTML = parseInt(baidu.g('message_forward_count_'+ fid).innerHTML) + 1;
								}
								if (baidu.g("postmsg")) {
									if (group_id === ""){
										UpdateMsgCount(1);
									}
									addMessage(r['message_json'], 'before', r['message_forward']);
								}
							}else{
								var e ='发生错误';
								if(r.ret == 2){
									e = '请先登录';
								}else if(r.ret == 3){
									e = '内容不能为空';
								}else if(r.ret == 5){
									e = '内容不能超过140个字符';
								}else if(r.ret == 6){
									e = '消息已经发出，无需重复提交';
								}else if(r.ret == 7){
									e = '很抱歉,消息原文已经被删除,无法转发';
								}else if(r.ret == 11){
									e = '内容中包含敏感词，请重新输入';
								}else if(r.ret == 21){
									e = '此群已经解散';
									setTimeout(function(){
										window.location.reload();
									},1500);
								}
								baiduTalk.alert(e);
							}
						} else {
							baiduTalk.alert('无法发送请求');
						}
						baidu.g('reply_submit_'+ mid).disabled = false;
					});
				} else {
					baidu.ajax.post("/reply/create?"+ Math.random(),
						"mid="+ encodeURIComponent(mid) +"&content="+ encodeURIComponent(baidu.g('reply_content_'+ mid).value)+ "&fid="+encodeURIComponent(tReply.reply_fid)+groupString,
						function(xhr, responseText){
						if (xhr.status == 200) {
							var jsonResult = baidu.json.parse(responseText);
							if(jsonResult['status'] == 0){
								var tr = baidu.G('reply_tbl_'+ mid).insertRow(0);
								tr.id = 'reply_' + jsonResult['reply'].id;
								var trHtml = formatReply(jsonResult['reply']);
								tr.appendChild(trHtml.th);
								tr.appendChild(trHtml.td);
								baidu.g('reply_content_'+ mid).value = "";
								var mrc = baidu.g('message_reply_count_'+ mid);
								if(!mrc){
									baidu.g('toggle_reply_'+mid).innerHTML += '(<span id="message_reply_count_'+mid+'">1</span>)';
								}else{
									baidu.g('message_reply_count_'+ mid).innerHTML = parseInt(baidu.g('message_reply_count_'+ mid).innerHTML) + 1;
								}
								tReply.reply_fid = 0;
								baidu.g('reply_content_'+ mid).focus();
							}else if(jsonResult['status'] == 1){
								baiduTalk.alert('只有'+jsonResult['name']+'关注的用户才可以回复');
							}else if(jsonResult['status'] == 2){
								baiduTalk.alert('很抱歉,消息原文已经被删除,无法回复');
							}else if(jsonResult['status'] == 3){
								baiduTalk.alert('由于对方的隐私设置，你无法进行回复');
							}else if(jsonResult['status'] == 11){
								baiduTalk.alert('内容中包含敏感词，请重新输入');
							}else if(jsonResult['status'] == 21){
								baiduTalk.alert('此群已经解散');
								setTimeout(function(){
									window.location.reload();
								},1500);
							}
						}else{
							baiduTalk.alert('无法发送请求');
						}
						baidu.g('reply_submit_'+ mid).disabled = false;
					});
				}
			}
		},
		toggleReply: function(id,local){
			var mid = id;
			var local = local || '';
			var reply_content = baidu.g('reply_action_'+ mid);
			if(!reply_content){
				var template = '<div style="display:none" class="comments" id="reply_action_'+ mid +'"><div class="reply-input"><div class="face-reply"><a class="face" hidefocus="true" onclick="baiduTalk.showFaces.show(this,\'reply_content_' + mid + '\')" href="javascript:void(0)"></a></div><textarea id="reply_content_'+ mid +'" class="reply-editor"></textarea> <input type="button" id="reply_submit_'+ mid +'" class="btn-gray" value="回复" />';
				template += (group_id !== '' && group_belong < 3) ? '<p class="to-group"><input id="reply_group_' + mid + '" name="reply_group_' + mid + '" type="checkbox">&nbsp;<label class="val-m" for="reply_group_' + mid + '">同时在群中发此消息</label></p>' : '';
				template += '</div><div id="reply_'+ mid +'" class="reply-tbl"></div></div>';
				baidu.insertHTML("message_" + mid,'beforeEnd',template);
				baiduTalk.loading.start(baidu.G('reply_action_'+mid).parentNode);
				baidu.event.on(baidu.g('reply_submit_'+ mid), 'click', function(){
					tReply.reply(mid,local);
				});
				var rTextarea = baidu.g('reply_content_'+mid);
				baiduTalk.textareaAuto(rTextarea);
				baiduTalk.keyEvent(rTextarea,'ctrl+enter',function(){
					tReply.reply(mid,local);
				});
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
				listReply(mid);
			} else{
				if (reply_content.style.display=='none'){
					baiduTalk.loading.start(baidu.G('reply_action_'+mid).parentNode);
					listReply(mid);
				} else {
					baidu.hide(reply_content);
					baidu.G('reply_'+mid).innerHTML = '';
					var reply_tip = baidu.q('reply-tip',reply_content,'p');
					if(reply_tip.length>0){
						baidu.dom.remove(reply_tip[0]);
					}
				}
			}
		}
	}
}(baidu);
var setReplyFid = tReply.setReplyFid;
var toggleReply = tReply.toggleReply;

//删除消息
var deleteMessage = function(mid){
	var tr = baidu.G("message_tr_" + mid);
	var groupString = (group_id !== '') ? '&group_id=' + group_id : '';
	baiduTalk.confirm("确认要删除？",{
		autodis: true,
		onaccept: function(){
			baidu.ajax.post("/message/delete?"+ Math.random(),"mid="+ encodeURIComponent(mid) + groupString,function(xhr, responseText){
				if (xhr.status == 200) {
					var jsonResult = baidu.json.parse(responseText);
					if(jsonResult['status'] == 1){
						if (baidu.browser.ie) {
							baidu.fx.fadeOut(baidu.dom.first(tr));
							baidu.fx.fadeOut("message_" + mid, {
								"onbeforestart": function(){
									baidu.dom.addClass(tr, "del");
								},
								"onafterfinish": function(){
									baidu.dom.remove(tr);
								}
							});
						} else {
							baidu.fx.fadeOut("message_tr_" + mid, {
								"onbeforestart": function(){
									baidu.dom.addClass(tr, "del");
								},
								"onafterfinish": function(){
									baidu.dom.remove(tr);
								}
							});
						}
						if (group_id === ""){
							UpdateMsgCount(-1);
						}
					} else {
						baiduTalk.alert('删除失败');
					}
				} else {
					baiduTalk.alert('无法发送请求');
				}
			});
		}
	});
}

//删除回复
var deleteReply = function(mid, rid, bid){
	var tr = baidu.G("reply_" + rid);
	var groupString = (group_id !== '') ? '&group_id=' + group_id : '';
	var baiduid = baidu.G('baiduTalk_id').value;
	var deleteHtml = (baiduid != bid) ? '确认要删除回复?<br/><br/><label class="gray12"><input class="val-m" id="check_black_' + rid + '" type="checkbox"/>&nbsp;同时将此人加入我的黑名单</label>' : '确认要删除回复?';
	baiduTalk.confirm(deleteHtml,{
		autodis: true,
		onaccept: function(){
			if (baiduid != bid && baidu.G('check_black_' + rid).checked == true){ setReplyBlack(bid); }
			baidu.ajax.post("/reply/deletebyajax?"+ Math.random(),"mid="+ encodeURIComponent(mid) +'&rid='+rid + groupString,function(xhr, responseText){
				if (xhr.status == 200) {
					var jsonResult = baidu.json.parse(responseText);
					if(jsonResult['status'] == 1){
						if (baidu.browser.ie) {
							baidu.fx.fadeOut(baidu.dom.first(tr));
							baidu.fx.fadeOut(baidu.dom.last(tr), {
								"onbeforestart": function(){
									baidu.dom.addClass(tr, "del");
								},
								"onafterfinish": function(){
									baidu.dom.remove(tr);
								}
							});
						} else {
							baidu.fx.fadeOut("reply_" + rid, {
								"onbeforestart": function(){
									baidu.dom.addClass(tr, "del");
								},
								"onafterfinish": function(){
									baidu.dom.remove(tr);
								}
							});
						}
						if (baidu.g('message_reply_count_'+ mid)){
							baidu.g('message_reply_count_'+ mid).innerHTML = parseInt(baidu.g('message_reply_count_'+ mid).innerHTML) - 1;
							if (parseInt(baidu.g('message_reply_count_'+ mid).innerHTML) == 0){
								baidu.g('toggle_reply_'+mid).innerHTML = '回复';
							}
						}
					} else {
						baiduTalk.alert('删除失败');
					}
				} else {
					baiduTalk.alert('无法发送请求');
				}
			});
		}
	});
}

var transDialog = null;
//将转发合并包装
var transmit = function($){
	var forwardMsg = function(fid, content, fwd, aut){
		baidu.G('transSubmit').onclick = null;
		var groupString = (group_type == "0" || (group_id !== '' && group_belong < 3 && baidu.G('toGroupCheck').checked == true)) ? '&group_id=' + group_id : '';
		baidu.ajax.post("/message/forward?"+Math.random(),"m_content="+encodeURIComponent(content)+"&pic_id=&pic_filename=&pic_id_water=&pic_filename_water=&fid="+fid+"&toforwarder="+fwd+"&toauthor="+aut+groupString,function(xhr,responseText){
			if (xhr.status == 200) {
				var r = baidu.json.parse(responseText);
				baiduTalk.loading.end(baidu.G('transLoading'));
				baidu.show('transError');
				if (r.ret == undefined) {
					baiduTalk.alert('转发成功',{
						style: 'success',
						autohide: true
					});
					transDialog.close();
					var mrc = baidu.g('message_forward_count_'+ fid);
					if(!mrc){
						baidu.g('onclick_'+fid).innerHTML += '(<span id="message_forward_count_'+fid+'">1</span>)';
					}else{
						baidu.g('message_forward_count_'+ fid).innerHTML = parseInt(baidu.g('message_forward_count_'+ fid).innerHTML) + 1;
					}
					if (baidu.g("postmsg")) {
						if (group_id === ""){
							UpdateMsgCount(1);
						}
						if (group_id === '' || groupString !== ''){
							addMessage(r['message_json'], 'before', r['message_forward']);
						}
					}
				}else{
					var e ='发生错误';
					if(r.ret == 2){
						e = '请先登录';
					}else if(r.ret == 3){
						e = '内容不能为空';
					}else if(r.ret == 5){
						e = '内容不能超过140个字符';
					}else if(r.ret == 6){
						e = '消息已经发出，无需重复提交';
					}else if(r.ret == 7){
						e = '很抱歉,消息原文已经被删除,无法转发';
					}else if(r.ret == 11){
						e = '内容中包含敏感词，请重新输入';
					}else if(r.ret == 21){
						e = '此群已经解散';
						setTimeout(function(){
							window.location.reload();
						},1500);
					}
					baidu.G('transError').innerHTML = e;
					baidu.G('transSubmit').onclick = function(){
						accept(fid);
					}
				}
			} else {
				baiduTalk.loading.end(baidu.G('transLoading'));
				baiduTalk.alert('无法发送请求');
			}
		});
	}
	var accept = function(id){
		var value = baidu.string.trim(baidu.G('transText').value);
		var value_length = baiduTalk.urlFilter(value);
		if (value_length > 140) {
			baidu.G('transError').innerHTML = '不能超过140个字符';
		} else {
			var forwarder = 0, author = 0;
			if (baidu.G('toForwarderCheck').checked){
				forwarder = 1;
			}
			if (baidu.G('toAuthorCheck').checked){
				author = 1;
			}
			forwardMsg(id, value, forwarder, author);
			baidu.hide('transError');
			baiduTalk.loading.start(baidu.G('transLoading'), {
				txt: '提交中...'
			});
		}
	}
	return function(id, src, local, name){
		var src = decodeURIComponent(src);
		src = src.replace(/<a[^>]+>([^<]+)<\/a>/g, '$1');
		var local = decodeURIComponent(local);
		local = baidu.decodeHTML(local);
		local = local.replace(/<a[^>]+>([^<]+)<\/a>/g, '$1');
		var autname = decodeURIComponent(name);
		baidu.G('transSubmit').onclick = function(){
			accept(id);
		}
		baidu.G('transAuthor').innerHTML = src;
		if (local != ''){
			var fwdname = local.match(/^\/\/@[\u4E00-\u9FA5]+\(/)[0].slice(3,-1);
			if(fwdname == autname){
				baiduTalk.setText(baidu.G('toForwarder'),fwdname);
				baidu.show('toForwarderP');
				baidu.hide('toAuthorP');
			} else {
				baiduTalk.setText(baidu.G('toForwarder'),fwdname);
				baiduTalk.setText(baidu.G('toAuthor'),'原作者 '+autname);
				baidu.show('toForwarderP');
			}
			baidu.G('transText').value = ' ' + local;
		} else {
			baiduTalk.setText(baidu.G('toAuthor'),autname);
		}
		transDialog.update({top:'auto'});
		transDialog.open();
	}
}(baidu);

//更新HOME右侧我的消息数量
var UpdateMsgCount = function(num){
	var countElement = baidu.G('aMsgCount');
	if(!countElement){return false;}
	var count = countElement.innerHTML;
	baiduTalk.setText(countElement, parseInt(count)+num);
}

baidu.dom.ready(function(){
	//提前构建转发
	(function($){
		if (baidu.G('group_id')){
			group_id = baidu.G('group_id').value;
			group_type = baidu.G('group_type').value;
			group_belong = baidu.G('group_belong').value;
		}
		var trans_con = baiduTalk.createElement('div','dialog_transmit','trans-box');
		var trans_html = '';
		trans_html += '<p>转：<span id="transAuthor"></span></p>';
		trans_html += '<div class="trans-count"><div class="face-transmit"><a class="face" hidefocus="true" onclick="baiduTalk.showFaces.show(this,\'transText\')" href="javascript:void(0)"></a></div><span id="transNum">140</span>&nbsp;字</div>';
		trans_html += '<p><textarea id="transText" class="trans-text"></textarea></p>';
		if ( group_belong !== '' && group_belong < 3 && group_type != "0" ){
			trans_html += '<p id="toGroupP"><input id="toGroupCheck" name="toGroupCheck" type="checkbox" checked="checked" /><label class="val-m" for="toGroupCheck">同时在群中发此消息</label></p>';
		}
		trans_html += '<p id="toForwarderP" style="display:none"><input id="toForwarderCheck" name="toForwarderCheck" type="checkbox" /><label class="val-m" for="toForwarderCheck">同时回复给&nbsp;<span id="toForwarder"></span></label></p>';
		trans_html += '<p id="toAuthorP"><input id="toAuthorCheck" name="toAuthorCheck" type="checkbox" /><label class="val-m" for="toAuthorCheck">同时回复给&nbsp;<span id="toAuthor"></span></label></p>';
		if ( group_type == "0" ){
			trans_html += '<p class="gray12">此群为私人群，转发后仅在群内显示</p>';
		}
		trans_html += '<p id="transLoading"><em id="transError" class="error"></em></p>';
		trans_html += '<p class="dialog-button"><a id="transSubmit" class="tangram-dialog-accept" href="javascript:void(0)">确定</a><a id="transCancel" class="tangram-dialog-cancel" href="javascript:void(0)">取消</a></p>'
		trans_con.innerHTML = trans_html;
		trans_con.style.display = 'none';
		document.body.appendChild(trans_con);
		var oTextarea = $.G('transText');
		var oCount = $.G('transNum');
		var changeColor = function(val){
			$.dom.setStyle(oCount, 'color', val);
		}
		var countWords = function(){
			var value = $.string.trim(oTextarea.value);
			var numNow = baiduTalk.urlFilter(value);
			baiduTalk.setText(oCount, 140 - numNow);
			if (numNow > 130) {
				changeColor('#cc0000');
			}else {
				changeColor('#669f40');
			}
		}
		$.event.on(oTextarea, 'focus', function(){
			countWords();
		});
		if ($.browser.ie) {
			$.event.on(oTextarea, 'propertychange', function(){
				baiduTalk.atFilter(oTextarea);
				countWords();
			});
		} else {
			$.event.on(oTextarea, 'input', function(){
				baiduTalk.atFilter(oTextarea);
				countWords();
			});
		}
		baiduTalk.suggestion.create(oTextarea,{maxHeight:81});
		var dialogTitle = (group_type == "0") ? '转发到本群' : '转发到我的说吧';
		transDialog = baiduTalk.dialog('', {
			content: trans_con,
			titleText: dialogTitle,
			width: 340,
			autoOpen: false,
			onopen: function(){
				baiduTalk.selectText(oTextarea,0,0);
			},
			onclose: function(){
				baidu.G('transText').value = '';
				baidu.G('transAuthor').innerHTML = '';
				baidu.G('transError').innerHTML = '';
				if ( group_belong !== '' && group_belong < 3 && group_type != "0"){baidu.G('toGroupCheck').checked = true;}
				baidu.G('toForwarderCheck').checked = false;
				baidu.G('toAuthorCheck').checked = false;
				baidu.hide('toForwarderP');
				baidu.show('toAuthorP');
			}
		});
		trans_con.style.display = '';
		$.event.on(baidu.G('transCancel'), 'click', function(){
			transDialog.close();
		});
		baiduTalk.keyEvent(baidu.g('transText'),'ctrl+enter',function(){
			if (baidu.browser.ie) {
				baidu.G('transSubmit').click();
			} else {
				var evt = document.createEvent("MouseEvents");
				evt.initEvent("click", true, true);
				baidu.G('transSubmit').dispatchEvent(evt);
			}
		});
	})(baidu);
});
