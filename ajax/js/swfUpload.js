/**
 * @author ZhangYi
 * @fileoverview SWFUpload.js基础上进行简单的一次封装
 */

/**
 * swfUpload ToJavaScriptObject
 * 
 * @param {Object} file
 * 	{
 * 		id: "SWFUpload_0_0"
 * 		type: ".jpg"
 * 		size: 145014
 * 		modificationdate: Fri Apr 18 15:17:24 UTC+0800 2008
 * 		index: 0
 * 		name: "照片 019.jpg"
 * 		creationdate: Mon Jun 21 20:17:23 UTC+0800 2010
 * 		post: {...}
 * 		filestatus: -1
 * }
 */

/**
 * 
 * 状态值的一些说明
 * FILE_STATUS_QUEUED 		-1	已存入队列中，等待上传
 * FILE_STATUS_IN_PROGRESS 	-2	正在上传
 * FILE_STATUS_ERROR		-3	上传失败
 * FILE_STATUS_SUCCESS		-4	上传成功
 * FILE_STATUS_CANCELLED	-5	已取消上传
 * FILE_STATUS_NEW			-6	新创建
 * 
 * 
 * setPostParams 动态修改SWFUpload初始化设置中的post_params属性，其中所有的值都将被覆盖。 
 * 		参考百度百科：http://baike.baidu.com/view/1332553.html?fromTaglist
 * 		所有的name/value都必须是字符串
 * 
 * 
 * 事件：
 * 	fileDialogComplete(将返回用户所选取的文件个数) --> file_dialog_complete_handler
 * 		触发条件：
 * 			1. 用户选择好了要上传文件，并关闭对话框；
 * 			2. 用户什么也没选，并取消对话框；
 *  uploadStart(file) --> return_upload_start_handler
 *  	该事件在文件上传之前触发，它用于完成一些准备工作，比如传递参数；
 *  uploadComplete(file) --> upload_complete_handler  
 *  	在完成一个上传周期后（在uploadError 或 uploadSuccess之后），此时一个上传操作已经结束，另一个上传操作可以开始了。
 *  getStats() ---> 调用flashGetStats
 *  	return : {
 *  		in_progress : this.current_file_item == null ? 0 : 1,
 *  		files_queued : this.queued_uploads,
 *  		successful_uploads : this.successful_uploads,
 *  		upload_errors : this.upload_errors,
 *  		upload_cancelled : this.upload_cancelled,
 *  		queue_errors : this.queue_errors
 *  	}
 *  
 *  cancelQueue 删除所有队列
 *  cancelUpload(file.id|index) 取消上传指定的文件
 *  setUploadURL  重新设置上传的地址
 */


if (typeof FWK == "undefined") {
	FWK = {};
}

FWK.swfUpload = function() {
	var swfu = null, 
		inner = null;
	
	return inner = {
		emptyFn : function() {},
		queue_upload_count : 0,
		isUploading : false,
		//获取当前上传的组件对象
		getFu : function() {
			return swfu;
		},
		/**
		 * 初始化上传组件
		 * 
		 * @param {Object|Null} param 初始化上传时调用的组件
		 * @param {Function|Null} uploadProgressCallback 上传的进度回调方法
		 * @param {Function|Null} addFileCallback 添加成功文件时调用的方法
		 * @param {Function|Null} uploadedCallback 文件完成上传成功后的回调方法
		 * @param {Function|Null} uploadFailCallback 文件上传失败的回调方法
		 */
		init : function	(param, addFileCallback, uploadProgressCallback, uploadedCallback, uploadFailCallback) {
			param = param || {};
			
			var settings = {
				flash_url : "/assets/swf/swfupload.swf",//swfupload组件地址
				upload_url : "/service/question.do?m=upload",//上传至后台的地址
				file_post_name : "Filedata",//post提交时的name
				post_params : {'srt':2},
				file_size_limit : "2MB",//上传文件体积上限
				file_types : "*.jpg;*.gif;*.png;*.jpeg;*.bmp",//允许上传的文件类型
				file_types_description : "图片类型",//文件类型描述
				//file_upload_limit : 5,//上传的最大数量限制
				file_queue_limit : 5,//上传队列数量限制，该项通常不需设置，会根据file_upload_limit自动赋值
				debug : false,
				custom_settings : {//自定义参数设置
					swfInited : false
				},
				
				//按钮设置
				button_image_url : "http://kf.9917.com/assets/style/images/affix.png",
				button_width: 100,
				button_height: 22,
				button_text: '<span class="theFont">添加图片附件</span>',
				button_text_style: ".theFont{font-size:14; color:#333; text-decoration:underline;}",
				button_text_left_padding: 16,
				button_text_top_padding: 2,
				button_placeholder_id: "swfUploadContainer",
				button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,
				
				//事件响应的函数
				swfupload_loaded_handler : inner.initedCallback,//swfupload初始化完成
				file_dialog_start_handler : inner.emptyFn,//当文件选取对话框弹出时出发的事件处理函数
				file_dialog_complete_handler : inner.emptyFn,//当文件选取对话框关闭后触发的事件处理函数，三个参数：numFilesSelected, numFilesQueued, numFilesInQueue
				upload_start_handler : inner.emptyFn,//开始上传文件前触发的事件处理函数
				file_queued_handler : inner.fileQueued,//文件添加成功
				file_queue_error_handler : inner.fileQueueError,//文件添加至队列中失败
				upload_progress_handler : inner.uploadProgress,//正在上传
				upload_error_handler : inner.uploadError,//上传出错
				upload_success_handler : inner.uploadSuccess//文件上传成功
			}
			
			for (var p in param) {
				if (param.hasOwnProperty(p)) {
					settings[p] = param[p];
				}
			}
			
			inner.addFileCallback = addFileCallback || inner.emptyFn;
			inner.uploadProgressCallback = uploadProgressCallback || inner.emptyFn;
			inner.uploadedCallback = uploadedCallback || inner.emptyFn;
			inner.uploadFailCallback = uploadFailCallback || inner.emptyFn;
			
			return swfu = new SWFUpload(settings);
		},
		initedCallback : function() {
			this.customSettings.swfInited = true;
			this.setUseQueryString(true);
			this.setButtonCursor(-2);
		},
		/**
		 *  flash回调信息
		 *  @param {Object} file
		 *  {
		 * 		id: "SWFUpload_0_0"
		 * 		type: ".jpg"
		 * 		size: 145014
		 * 		modificationdate: Fri Apr 18 15:17:24 UTC+0800 2008
		 * 		index: 0
		 * 		name: "照片 019.jpg"
		 * 		creationdate: Mon Jun 21 20:17:23 UTC+0800 2010
		 * 		post: {...}
		 * 		filestatus: -1
		 * }
		 * 
		 */
		fileQueued : function(file) {
			inner.queue_upload_count = this.getStats().files_queued;//上传的总数
			
			inner.addFileCallback(file);
		},
		fileQueueError : function(file, errorCode, message) {
			switch(errorCode) {
				case -100:
					inner.error("最多只能上传" + this.settings.file_queue_limit + "张图片", errorCode);
					break;
				case -110:
					inner.error("选择上传的文件大小为："+Math.floor(file.size/1024)+"KB，允许最大上传"+this.settings.file_size_limit+"以内的文件", errorCode);
					break;
				case -120:
					inner.error("不能上传空文件，请重新上传", errorCode);
					break;
				case -130:
					inner.error("无效的文件类型", errorCode);
					break;
				default:
					break;
			}
		},
		uploadProgress : function(file, bytesLoaded, bytesTotal) {
			var percent = Math.ceil((bytesLoaded / bytesTotal) * 100);
			
			inner.uploadProgressCallback(file, percent, 'loading');
		},
		uploadError : function(file, errorCode, message) {
			
			switch (errorCode) {
				case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
					inner.error("存储失败: " + message);//("Error Code: HTTP Error, File name: " + file.name + ", Message: " + message)
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
					inner.error("存储失败");//("Error Code: Upload Failed, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
					break;
				case SWFUpload.UPLOAD_ERROR.IO_ERROR:
					inner.error("服务器IO错误");//("Error Code: IO Error, File name: " + file.name + ", Message: " + message);
					break;
				case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
					inner.error("安全验证失败，上传取消");//("Error Code: Security Error, File name: " + file.name + ", Message: " + message);
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
					inner.error("已达上传上限");//("Error Code: Upload Limit Exceeded, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
					break;
				case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
					inner.error("验证失败，上传取消");//("Error Code: File Validation Failed, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
					break;
				case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
					--inner.queue_upload_count;
					//inner.error("已取消");
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
					break;
				default:
					inner.error("存储错误: " + errorCode);//("Error Code: " + errorCode + ", File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
					break;
			}
			
			inner.isUploading = false;
			swfu.setButtonDisabled(false);
		},
		uploadSuccess : function(file, serverData) {
			var json = null;
			
			try {
				json = eval('['+serverData+']');//{'code':0, msg:null, 'obj':'http://xxxx'}
				json = json[0];
			} catch(ex) {
				inner.error(null);//直接调用上传失败
				return ;
			}
			
			//身份已丢失，需要进行登录
			if (json && json.code == "1007") {
				inner.error("1007");
				return ;
			}
			
			--inner.queue_upload_count;
			inner.isUploading = false;
			
			var rs = inner.uploadProgressCallback(file, json, 'loaded');
			
			if (inner.queue_upload_count <= 0) {
				inner.queue_upload_count = 0;
				swfu.setButtonDisabled(false);
				swfu.stopUpload();
				
				inner.uploadedCallback();
			} else if (rs === undefined || rs === true){
				inner.startUpload(true);
			}
		},
		startUpload : function(flag) {
			if (swfu.getStats().files_queued < 1) {
				!flag ? alert("请先选择需要上传的文件再进行上传") : null;
				return false;
			}
			
			//处于正在上传时，不允许再进行上传
			if (inner.isUploading) {
				return ;
			}
			
			inner.isUploading = true;
			swfu.startUpload();
			swfu.setButtonDisabled(true);
		},
		error : function() {
			inner.isUploading = false;
			inner.uploadFailCallback.apply(null, arguments);
		},
		removeFile : function(fileId) {
			if (swfu) {
				var el = document.getElementById(fileId);
				if (el) {
					el.parentNode.removeChild(el);
				}
				el = null;
				
				swfu.cancelUpload(fileId);
			}
		},
		addFileHandler : function(file) {
			$("#upload_img_list").append([
				'<li id="'+file.id+'">',
					'<span>'+file.name+'</span>',
					'<span>('+Math.floor(file.size/1024)+' KB)</span>',
					'<a href="javascript:;" title="删除此图片" class="A_Close" onclick="FWK.swfUpload.removeFile(\''+file.id+'\');return false;"></a>',
				'</li>'
			].join(""));
		},
		uploadErrorHandler : function(msg, errorCode) {//string|null|1007
			if (msg == "1007") {
				inner.uploadedCallback();//FWK.widget.userLogin(inner.startUpload);不能调用重登录，登录以后就刷新页面了。而此时队列中似乎已经没有此文件了
			} else {
				msg = msg || "上传出现未知错误！";
				alert(msg);
				if (!/^-/.test(errorCode)) {
					document.location.reload();
				}
			}
		}
	}
}();

//对HTML字条串进行编码处理
FWK.HTMLEncode = function(str) {
	str = str || "";
	return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,"<br/>").replace(/\"/g, '&quot;');
}
