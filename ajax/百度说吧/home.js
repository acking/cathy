var homeInterval = null;//建立循环对象
var lastTimeIdData = '';//建立时间线排序存储器

/**
 * 格式化消息显示
 * @param   {json} msgModel  要显示的消息
 * @where   'before' 'end'
 * @return string
 */
var addMessage = function(msgModel, where, forwardMessage, listTime){
	var values = {
		user_id: msgModel.user_id,
		baidu_id: msgModel.baidu_id,
		id: msgModel.id,
		name: msgModel.name,
		avatar:msgModel.avatar,
		content: baiduTalk.nameToUrl(msgModel.content),
		ubbcontent: baiduTalk.nameToUrl(msgModel.ubbcontent),
		created_time: msgModel.created_time,
		source: msgModel.source,
		is_forward:msgModel.is_forward,
		last_forward_name:msgModel.last_forward_name,
		last_forward_id:msgModel.last_forward_id,
		forward_count:msgModel.forward_count,
		reply_count:msgModel.reply_count,
		is_owner:msgModel.is_owner,
		pic_small:msgModel.pic_small,
		pic_big:msgModel.pic_big,
		pic_water:msgModel.pic_water,
		pic_id:msgModel.pic_id,
		video_url:msgModel.video_url,
		video_swf:msgModel.video_swf,
		video_title:msgModel.video_title,
		video_thumbnail:msgModel.video_thumbnail
	};
	var colHtml = '<a href="javascript:void(0)" onclick="collect(this,&quot;#{id}&quot;,true)">收藏</a> | ';
	var delHtml = values.is_owner ? '<a href="javascript:void(0)" onclick="deleteMessage(&quot;#{id}&quot;)">删除</a> | ' : '';
	var sourceHtml = values.source.au !== '' ? '<a href="'+values.source.au+'">'+values.source.a+'</a>' : values.source.a;
	if(!!values.source.g){
		sourceHtml += '&nbsp;<img class="ico-group" src="http://res.t.baidu.com/images/blank.gif" title="说吧群"><a title="'+values.source.gn+'" href="/g/'+values.source.g+'">'+baiduTalk.substr(values.source.gn,14)+'</a>';
	}
	var msg_content = '';
	var msg_local_content = '';
	if(msgModel.fid == 0){
		msg_content = msgModel.ubbcontent;
	} else {
		if(forwardMessage.is_deleted == 0){
			msg_content = forwardMessage.ubbcontent;
			msg_local_content = '//@'+msgModel.name+'('+msgModel.baidu_id+'):'+msgModel.content;
		}
	}
	var forward_count_html = '';
	if(msgModel.forward_count > 0){
		forward_count_html = '(<span id="message_forward_count_'+msgModel.id+'">'+ msgModel.forward_count +'</span>)';
	}
	var forward_href = '<a href="javascript:void(0)" onclick="transmit(&quot;'+msgModel.id+'&quot;, &quot;' + encodeURIComponent(msg_content) + '&quot;, &quot;' + encodeURIComponent(msg_local_content)+'&quot;, &quot;' +((msgModel.fid !=0) ? forwardMessage.name : msgModel.name)+ '&quot;);" id="onclick_'+msgModel.id+'">转发'+forward_count_html+'</a> | ';
	var vip_html = '';
	if(msgModel.is_vip){
		vip_html = 'vip';
	}
	var forward_html = '';
	if(msgModel.fid !=0 ){
		var forward_vip_html = '';
		if(forwardMessage.is_vip){
			forward_vip_html = 'vip';
		}
		forward_html = '<div class="talk-layer">'
		+'<div class="trans-top"></div> '
		+'<div class="transmit">'
		+'<div class="transmit-words max438"> '
		+'<a class="author '+forward_vip_html+'" href="/'+forwardMessage.baidu_id+'">'+forwardMessage.name+'</a>：'+baiduTalk.nameToUrl(forwardMessage.ubbcontent)
		+'<span class="opt"><a href="'+forwardMessage.baidu_id+'/'+forwardMessage.id+'">原文转发('+forwardMessage.forward_count+')</a> | <a href="'+forwardMessage.baidu_id+'/'+forwardMessage.id+'">原文回复('+forwardMessage.reply_count+')</a></span>'
		+'</div>';
		var forward_pic_html = '';
		var forward_photo_html = '';
		var forward_video_html = '';
		if (forwardMessage.pic_id != 0 || !!forwardMessage.video_url){
			forward_photo_html = forwardMessage.pic_id != 0 ? '<a href="javascript:void(0);" onclick="baiduTalk.imgScale(this,\''+forwardMessage.pic_water+'\')"><img class="avatar img-magnify" src="'+forwardMessage.pic_small+'" /></a>' : '';
			forward_video_html = !!forwardMessage.video_url ? '<a href="javascript:void(0);" class="relative" onclick="baiduTalk.videoShow(this,&quot;'+encodeURIComponent(forwardMessage.video_swf)+'&quot;,&quot;'+encodeURIComponent(forwardMessage.video_url)+'&quot;,&quot;'+encodeURIComponent(forwardMessage.video_title)+'&quot;)"><img width="120" class="avatar" onerror="this.src=\'http://res.t.baidu.com/images/pic/img_video.gif\'" src="'+forwardMessage.video_thumbnail+'" /><img class="play" src="http://res.t.baidu.com/images/blank.gif" /></a>' : '';
			forward_pic_html = '<div class="talk-img"><div class="img-pre">' + forward_photo_html + forward_video_html + '</div>';
			if (forwardMessage.pic_id != 0){
				forward_pic_html += '<div class="img-scale" style="display:none"><p class="img-handle"><span class="img-turn"><a href="javascript:void(0)" class="turn-left">向左转</a> | <a href="javascript:void(0)" class="turn-right">向右转</a></span>'
				+'<span class="img-source"><a href="'+forwardMessage.pic_big+'" target="_blank">查看原图</a></span></p><canvas class="img-reduce" style="display:none;"></canvas></div>';
			}
			forward_pic_html += '</div>';
			forward_html += forward_pic_html;
		}
		forward_html +='</div>'
		+'</div>';
	}
	var reply_count_html = '';
	if(msgModel.reply_count > 0){
		reply_count_html = '(<span id="message_reply_count_'+msgModel.id+'">'+msgModel.reply_count+'</span>)</a></span>';
	}
	var pic_html = '';
	var photo_html = '';
	var video_html = '';
	if (msgModel.pic_id != 0 || !!msgModel.video_url){
		photo_html = msgModel.pic_id != 0 ? '<a href="javascript:void(0);" onclick="baiduTalk.imgScale(this,\''+msgModel.pic_water+'\')"><img class="avatar img-magnify" src="'+msgModel.pic_small+'" /></a>' : '';
		video_html = !!msgModel.video_url ? '<a href="javascript:void(0);" class="relative" onclick="baiduTalk.videoShow(this,&quot;'+encodeURIComponent(msgModel.video_swf)+'&quot;,&quot;'+encodeURIComponent(msgModel.video_url)+'&quot;,&quot;'+encodeURIComponent(msgModel.video_title)+'&quot;)"><img width="120" class="avatar" onerror="this.src=\'http://res.t.baidu.com/images/pic/img_video.gif\'" src="'+msgModel.video_thumbnail+'" /><img class="play" src="http://res.t.baidu.com/images/blank.gif" /></a>' : '';
		pic_html = '<div class="talk-img"><div class="img-pre">' + photo_html + video_html + '</div>';
		if (msgModel.pic_id != 0){
			pic_html += '<div class="img-scale" style="display:none"><p class="img-handle"><span class="img-turn"><a href="javascript:void(0)" class="turn-left">向左转</a> | <a href="javascript:void(0)" class="turn-right">向右转</a></span>'
			+'<span class="img-source"><a href="'+msgModel.pic_big+'" target="_blank">查看原图</a></span></p><canvas class="img-reduce" style="display:none;"></canvas></div>';
		}
		pic_html += '</div>';
	}
	var phoneico = values.is_owner ? '':'<div class="ico-bar"><a class="ico-phone-on" href="javascript:void(0)" onfocus="this.blur()" onclick="baiduTalk.phoneDialog(this,#{user_id})"></a></div>';
	var th_html = baidu.string.format('<a href="/#{baidu_id}"><img class="avatar" src="#{avatar}" /></a>'+phoneico, values);
	var td_html = baidu.string.format('<p class="talk-words max458"><a class="author '+vip_html+'" href="/#{baidu_id}">#{name}</a>：#{ubbcontent}</p>'
		+forward_html
		+pic_html
		+'<p class="talk-handle"><span class="source"><a href="/#{baidu_id}/#{id}">#{created_time}</a>&nbsp;&nbsp;来自'
		+sourceHtml
		+'</span><span class="opt">'
		+delHtml
		+forward_href
		+colHtml
		+'<a id="toggle_reply_'+msgModel.id+'" href="javascript:void(0)" onclick="toggleReply(\'#{id}\')">回复'+reply_count_html+'</a></span></p>', values);
	if (where == 'before'){
		var tbody = baidu.g('message_list').tBodies[0];
		var tr = document.createElement("tr");
		if (listTime === true) {
			var last_tr = baidu.G(lastTimeIdData);
			lastTimeIdData = "message_tr_" + values.id;
			var prev_tr = baidu.dom.prev(last_tr);
			if (prev_tr) {
				if (prev_tr.id == "message_tr_" + values.id) {
					tbody.replaceChild(tr, prev_tr)
				} else {
					tbody.insertBefore(tr, last_tr);
				}
			} else {
				tbody.insertBefore(tr, tbody.firstChild);
			}
		} else {
			tbody.insertBefore(tr, tbody.firstChild);
		}
		tr.id = baidu.string.format("message_tr_#{id}", values);
		tr.style.display = "none";
		var th=document.createElement("th");
		th.innerHTML = th_html;
		var td=document.createElement("td");
		td.id = baidu.string.format("message_#{id}", values);
		td.innerHTML = td_html;
		tr.appendChild(th);
		tr.appendChild(td);
		if (baidu.browser.ie) {
			baidu.hide(th);
			baidu.hide(td);
			baidu.show(tr);
			baidu.fx.fadeIn(th);
			baidu.fx.fadeIn(td);
		} else {
			baidu.fx.fadeIn(tr);
		}
	}else{
		var tr=document.createElement("tr");
		tr.id = baidu.string.format("message_tr_#{id}", values);
		var th=document.createElement("th");
		th.innerHTML = th_html;
		var td = document.createElement("td");
		td.id = baidu.string.format("message_#{id}", values);
		td.innerHTML = td_html;
		tr.appendChild(th);
		tr.appendChild(td);
		baidu.g('message_list').tBodies[0].appendChild(tr);
	}
}

/**
 * 显示更多消息
 * @return
 */
var listMore = function(){
	baidu.hide('list_more');
	baiduTalk.loading.start(baidu.G('content'));
	var first_message_id = baidu.g("first_message_id").value;
	baidu.ajax.post(
		"/message/listmore?" + Math.random(),
		"mid=" + encodeURIComponent(first_message_id),
		function(xhr, responseText){
			var jsonResult = baidu.json.parse(responseText);
			if (jsonResult['first_message_id'] != null){
				baidu.g("first_message_id").value = jsonResult['first_message_id'];
			}
			baidu.object.each(jsonResult['list'], function(item, key){
				addMessage(item, 'after', jsonResult['forward_messages']['message_'+item.fid]);
			});
			baiduTalk.loading.end(baidu.G('content'));
			if (jsonResult['length'] > 50) {
				baidu.show('list_more');
			}
		}
	);
}

/**
 * 更新Timeline之后的消息
 */
var listTimelineIds = function(){
	baidu.hide("time_div");
	baiduTalk.loading.start(baidu.G('loading_wrapper'));
	var last_message_id = baidu.g("last_message_id").value;
	lastTimeIdData = "message_tr_" + last_message_id;
	baidu.ajax.post(
		"/message/timelinelist?" + Math.random(),
		"mid=" + encodeURIComponent(last_message_id),
		function(xhr, responseText){
			var jsonResult = baidu.json.parse(responseText);
			var jsonList = jsonResult['list'];
			baidu.g("last_message_id").value = jsonResult['first_message_id'];
			baidu.object.each(jsonList, function(item, key){
				addMessage(item, 'before', jsonResult['forward_messages']['message_'+item.fid], true);
			});
			baiduTalk.loading.end(baidu.G('loading_wrapper'));
			homeInterval = setDecayInterval(30, 15, 300, getTimelineCount);
		}
	);
}

/**
 * 更新Timeline之后消息数量
 */
var getTimelineCount = function(){
	var last_message_id = baidu.g("last_message_id").value;
	if (last_message_id !=0 && last_message_id != ""){
		baidu.ajax.post(
			"/message/timelinecount?" + Math.random(),
			"mid=" + encodeURIComponent(last_message_id),
			function(xhr, responseText){
				var result = baidu.json.parse(responseText);
				if(!result){ return false; }
				if(result['status']!='ok'){
					clearInterval(homeInterval);
				}else if(result.count>0){
					baidu.show("time_div");
					baidu.g("timeline_count").innerHTML = '有新消息，点击查看';
					clearInterval(homeInterval);
				}
			}
		);
	}
}

/**
 * 发表消息
 */
var postMsg = function(){
	var content = baidu.trim(baidu.g("m_content").value);
	var pic_id = baidu.g("pic_id").value;
	var pic_filename = baidu.g("pic_filename").value;
	var pic_id_water = baidu.g("pic_id_water").value;
	var pic_filename_water = baidu.g("pic_filename_water").value;
	baidu.ajax.post("/message/post?"+Math.random(),"m_content="+encodeURIComponent(content)+"&pic_id="+encodeURIComponent(pic_id)+"&pic_filename="+encodeURIComponent(pic_filename)+"&pic_id_water="+encodeURIComponent(pic_id_water)+"&pic_filename_water="+encodeURIComponent(pic_filename_water), function(xhr,responseText){
		var r = baidu.json.parse(responseText);
		if (xhr.status == 200 && r.ret == undefined) {
			baidu.g("m_content").value = '';
			baidu.dom.setStyle('m_count','color','#777777');
			baidu.g("m_count").innerHTML = 140;
			addMessage(r, 'before');
			//baidu.g("last_message_id").value = r.id;
			baidu.g("pic_id").value = '';
			baidu.g("pic_filename").value = '';
			baidu.g("pic_id_water").value = '';
			baidu.g("pic_filename_water").value = '';
			baidu.hide('photo_loading');
			baidu.hide('photo_name');
			baidu.show('photo_upload');
			if (baidu.G('photo_POPBOX')) {
				baidu.dom.remove('photo_POPBOX');
			}
			UpdateMsgCount(1);
			baidu.g("m_content").focus();
		}else{
			var e ='发生错误';
			if(r.ret == 12){
				e = '请先登录';
			}else if(r.ret == 3){
				e = '内容不能为空';
			}else if(r.ret == 5){
				e = '内容不能超过140个字符';
			}else if(r.ret == 6){
				e = '消息已经发出，无需重复提交';
			}else if(r.ret == 11){
				e = '内容中包含敏感词，请重新输入';
			}else if(r.ret == 21){
				e = '此群已经解散';
				setTimeout(function(){
					window.location.reload();
				},1500);
			}else if(r.ret == 400){
				window.location.href='/logout';
				return;
			}
			baiduTalk.alert(e);
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

//图片上传
var photoUpload = function($){
	var fileValid = function(value, param){
		param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
		return value.match(new RegExp(".(" + param + ")$", "i"));
	}
	var fileReset= function(file){
		if (baidu.browser.ie){
			var file2= file.cloneNode(false);
			file2.onchange= file.onchange;
			file.parentNode.replaceChild(file2,file);
		} else {
			file.value = "";
		}
	}
	return {
		fileName: "",
		fileTimer: null,
		fileUpload: function(element){
			//检测是否有权限发表图片消息
			if(baidu.G('pic_enable').value==0){
				baiduTalk.alert('对不起，请上传你本人的照片，否则你将无法发布图片消息');
				return false;
			}
			var value = element.value;
			if (!fileValid(value)) {
				baiduTalk.alert('请上传3M以内，jpg、gif、png格式的图片');
				return false;
			}
			var ns = value.lastIndexOf('\\');
			var pt = value.lastIndexOf('.');
			var name1 = value.substring(ns+1,pt);
			var name2 = value.substring(pt);
			var name = '';
			if (baidu.string.getByteLength(name1)>13){
				name = name1.substring(0,10) + '...' + name2;
			} else {
				name = name1 + name2;
			}
			this.fileName = name;
			baidu.hide('photo_upload');
			baidu.show('photo_loading');
			baiduTalk.disable.start($.G('postmsg'));
			baidu.G('picform').submit();
			fileReset(element);
		},
		fileDelete: function(element){
			baidu.dom.remove('photo_POPBOX');
			baidu.hide('photo_name');
			this.fileName = "";
			baidu.show('photo_upload');
			var id = baidu.G("pic_id").value;
			var wid = baidu.G("pic_id_water").value;
			if (id != 0) {
				baidu.ajax.post("/message/delpic",'id=' + encodeURIComponent(id)+'&wid=' + encodeURIComponent(wid), function(xhr, responseText){
					if (xhr.status == 200) {
						var jsonResult = baidu.json.parse(responseText);
						if (jsonResult.status == 0) {
							baidu.hide('photo_name');
							baidu.show('photo_upload');
							//防止出现已经删除了，发布消息还会发布图片 liubaikui@20100914 
							baidu.g("pic_id").value = '';
							baidu.g("pic_filename").value = '';
							baidu.g("pic_id_water").value = '';
							baidu.g("pic_filename_water").value = '';
							if (baidu.g("m_content").value == '分享图片') {
								baidu.g("m_content").value = '';
								baiduTalk.disable.start($.G('postmsg'));
							}
						}
					}
				});
			}
		},
		fileCallback : function(xhr){
			var xhr = baidu.json.parse(xhr);
			var fn = function(img){
				baiduTalk.popbox(baidu.G('photoCur'),{
					id: 'photo',
					content: img
				});
				baiduTalk.selectText(mTextarea,mTextarea.value.length,mTextarea.value.length);
			}
			if (xhr.status == 0){
				baiduTalk.setText(baidu.G('photoCur'), this.fileName);
				var mTextarea = baidu.g("m_content");
				setTimeout(function(){
					baiduTalk.disable.end($.G('postmsg'));
					baidu.hide('photo_loading');
					baidu.show('photo_name');
					if (mTextarea.value == '') {
						mTextarea.value = '分享图片';
					}
					baidu.g("pic_id").value = xhr.pic_id;
					baidu.g("pic_filename").value = xhr.pic_filename;
					baidu.g("pic_id_water").value = xhr.pic_id_water;
					baidu.g("pic_filename_water").value = xhr.pic_filename_water;
					var img = new Image();
					img.src = xhr.url;
					if (img.complete){
						fn(img);
					}else{
						img.onload = function(){
							fn(img);
						}
					}
				},500);
			}else if(xhr.status == 401){
				baiduTalk.alert('请上传3M以内，jpg、gif、png格式的图片');
				baiduTalk.disable.end($.G('postmsg'));
				baidu.show('photo_upload');
				baidu.hide('photo_loading');
			}
			else {
				baiduTalk.alert('图片上传失败');
				baiduTalk.disable.end($.G('postmsg'));
				baidu.show('photo_upload');
				baidu.hide('photo_loading');
			}
		},
		createIframe : function(form){
			var id = 'uploadIframe' + (new Date().getTime());
			var io = '<iframe id="' + id + '" name="' + id + '" src="about:blank" />';
			var div = document.createElement('div');
			div.style.display = "none";
			document.body.appendChild(div);
			div.innerHTML = io;
			baidu.dom.setAttr(form, 'target', id);
		}
	}
}(baidu);

//视频上传
var videoRange = null;
var videoUpload = function(element){
	var dialog = function(){
		var videoPop = baiduTalk.createElement('div','video_con','video-con');
		videoPop.innerHTML = '<p>请输入奇艺、优酷、土豆、酷6等视频网站的视频地址</p>'
		+ '<p><input id="videoInput" type="text" class="text" /><a id="videoConfirm" class="tangram-dialog-accept" href="javascript:void(0)">确定</a></p>'
		+ '<p id="videoError" class="error"></p>';
		return videoPop;
	}
	var videoFocus = function(){
		var input = baidu.G('videoInput');
		input.value = "http://";
		baidu.G('videoError').innerHTML = '';
	}
	videoRange = baiduTalk.getTextPos(baidu.G('m_content'));
	var videoInput = function(val){
		var pos = (videoRange != null) ? videoRange : {start:0,end:0};
		var m_con = baidu.G('m_content');
		baiduTalk.selectText(m_con, pos.start, pos.end);
		baiduTalk.rangeText(m_con, val);
		baiduTalk.disable.end(baidu.G('postmsg'));
	}
	var videoBox = baidu.G('video_POPBOX');
	if (videoBox){
		if (videoBox.style.display == 'none') {
			baidu.dom.addClass(videoBox.parentNode, 'relative');
			baidu.show(videoBox);
			videoFocus();
		} else {
			baidu.hide(videoBox);
			baidu.dom.removeClass(videoBox.parentNode, 'relative');
		}
	} else {
		baiduTalk.popbox(element,{id:'video',content:dialog(),width:360,left:-11,close:true});
		baiduTalk.searchInput(baidu.G('videoInput'),"http://");
		baidu.G('videoConfirm').onclick = function(){
			var video_err = baidu.G('videoError');
			var video_val = baidu.string.trim(baidu.G('videoInput').value);
			if (video_val.length == 0 || video_val == 'http://'){
				video_err.innerHTML = '请填写视频地址';
				return false;
			}
			var url_post = "/message/postvideo?"+Math.random();
			video_err.innerHTML = '';
			baiduTalk.loading.start(video_err,{txt: '提交中...'});
			baidu.ajax.post(url_post,'url='+encodeURIComponent(video_val),function(xhr,responseText){
				baiduTalk.loading.end(video_err);
				if (xhr.status == 200){
					var r = baidu.json.parse(responseText);
					var m_con = baidu.g("m_content");
					var m_val = baidu.string.trim(m_con.value);
					if (r.status == 0){
						var v = r.video;
						baidu.G('videoInput').value = '';
						baidu.hide('video_POPBOX');
						baidu.dom.removeClass(baidu.G('video_POPBOX').parentNode, 'relative');
						if ( m_val.length == 0) {
							m_con.value = '分享视频：' + v.title + v.url + ' ';
							baiduTalk.selectText(m_con, m_con.value.length, m_con.value.length);
						} else {
							videoInput(v.title + v.url + ' ');
						}
					} else {
						var e = '抱歉，我们无法识别这一视频地址，你可以<a id="postNormalLink" href="javascript:void(0)">作为普通链接发布</a>';
						if (r.status == 1){
							e = '请先登录';
							location.href = '/userlogin';
						}
						video_err.innerHTML = e;
						baidu.G('postNormalLink').onclick = function(){
							baidu.G('videoInput').value = '';
							baidu.hide('video_POPBOX');
							baidu.dom.removeClass(baidu.G('video_POPBOX').parentNode, 'relative');
							videoInput(video_val + ' ');
						}
					}
				} else {
					baiduTalk.alert('无法发送请求');
				}
			});
		}
		videoFocus();
	}
}

//加载完成后绑定事件处理,启动计时循环
baidu.dom.ready(function(){
	//取得说吧ID
	var baiduTalk_id = baidu.G('baiduTalk_id').value;
	//聚说吧没有timeline_count这个element，函数直接返回
	if (baidu.g("timeline_count")){
		baidu.event.on(baidu.g("timeline_count"), "click", listTimelineIds);
		//开启循环，结束循环请用clearInterval(homeInterval);
		homeInterval = setDecayInterval(30, 15, 300, getTimelineCount);
	}
	//显示更多信息
	if (baidu.g("list_more")){baidu.event.on(baidu.g("list_more"),'click',listMore);}
	//发表信息
	if (baidu.g("postmsg")){
		baidu.event.on(baidu.g("postmsg"),'click',postMsg);
		baiduTalk.keyEvent(baidu.g('m_content'),'ctrl+enter',function(){
			postMsg();
		});
		//开启联想
		baiduTalk.suggestion.create(baidu.G('m_content'),{fontSize:14,maxHeight:60});
		//我说的按钮样式
		baiduTalk.buttonIE(baidu.G('postmsg'),{
			hover: 'italk-hover',
			active: 'italk-active'
		});
		//消息框显示的文字数量
		(function($){
			var oTextarea = $.G('m_content');
			var oCount = $.G('m_count');
			var changeColor = function(val){
				$.dom.setStyle(oCount,'color',val);
			}
			//网址过滤
			var countWords = function(){
				var value = $.string.trim(oTextarea.value);
				var numNow = baiduTalk.urlFilter(value);
				if ( numNow == 0 || numNow >140 || $.G('photo_loading').style.display !== 'none' ){
					baiduTalk.disable.start($.G('postmsg'));
				} else {
					baiduTalk.disable.end($.G('postmsg'));
				}
				baiduTalk.setText(oCount,140 - numNow);
				if (numNow > 120){
					if (numNow >130){
						changeColor('#ff0000');
					} else {
						changeColor('#df0024');
					}
				} else {
					changeColor('#777777');
				}
			}
			$.event.on(oTextarea, 'focus', function(){
				countWords();
				$.addClass(oTextarea.parentNode,'talk-input-focus');
			});
			$.event.on(oTextarea, 'blur', function(){
				$.removeClass(oTextarea.parentNode,'talk-input-focus');
			});
			if ($.browser.ie){
				$.event.on(oTextarea, 'propertychange', function(){
					baiduTalk.atFilter(oTextarea);
					countWords();
				});
			}else{
				$.event.on(oTextarea, 'input', function(){
					baiduTalk.atFilter(oTextarea);
					countWords();
				});
			}
			$.G('m_content').focus();
		})(baidu);
	}
	//引导图的关闭
	if (baidu.g("guide_bar")){
		if (baidu.cookie.get(baiduTalk_id+'_guide') != 'closed'){
			baidu.event.on(baidu.G('guide_close'),'click',function(){
				baidu.fx.collapse(baidu.G('guide_bar'));
				baidu.cookie.set(baiduTalk_id+'_guide','closed',{
					path:'/',
					expires:new Date(2099,1,1),
					domain:'t.baidu.com',
					secure:false
				});
			});
			baidu.dom.show('guide_bar');
		}
	}
	//异步上传图片
	if (baidu.g("picform")){photoUpload.createIframe('picform');}
});
