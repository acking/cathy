/**
 * @author ZhangYi
 * @fileoverview 
 */

/**
 * 生日：2
 * 工号：0
 * 汉字：1
 */
var SecurityConfig = {
	'-1' : {
		 c : '请选择问题',
		 idx : -1
	},
	1 : {
		c : '您父亲的姓名是？',
		idx : 1,
		t : 1
	},
	2 : {
		c : '您父亲的生日是？',
		idx : 2,
		t : 2
	},
	3 : {
		c : '您父亲的职业是？',
		idx : 3,
		t : 1
	},
	4 : {
		c : '您母亲的姓名是？',
		idx : 4,
		t : 1
	}, 
	5 : {
		c : '您母亲的生日是？',
		idx : 5,
		t : 2
	}, 
	6 : {
		c : '您母亲的职业是？',
		idx : 6,
		t : 1
	},
	7 : {
		c : '您配偶的姓名是？',
		idx : 7,
		t : 1
	},
	8 : {
		c : '您配偶的生日是？',
		idx : 8,
		t : 2
	},
	9 : {
		c : '您配偶的职业是？',
		idx : 9,
		t : 1
	},
	10 : {
		c : '您小学班主任的名字是？',
		idx : 10,
		t : 1
	},
	11 : {
		c : '您初中班主任的名字是？',
		idx : 11,
		t : 1
	},
	12 : {
		c : '您高中班主任的名字是？',
		idx : 12,
		t : 1
	},
	13 : {
		c : '您的学号（或工号）是？',
		idx : 13,
		t : 0
	},
	14 : {
		c : '您的出生地是？',
		idx : 14,
		t : 1
	},
	15 : {
		c : '您的小学校名是？',
		idx : 15,
		t : 1
	},
	16 : {
		c : '您最熟悉的童年好友名字是？',
		idx : 16,
		t : 1
	},
	17 : {
		c : '您最熟悉的学校宿舍室友名字是？',
		idx : 17,
		t : 1
	},
	18 : {
		c : '对您影响最大的人名字是？',
		idx : 18,
		t : 1
	}
}

var TipManage = function() {
	var inner;
	var elem = null;
	var timer = null;
	
	function getEl() {
		if (!elem) {
			elem = document.createElement('div');
			document.body.appendChild(elem);
		}
		
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		
		return elem;
	}
		
	return inner = {
		showLoading : function(msg) {
			Array.prototype.push.call(arguments, 'S_Tips_loading');
			inner.setContent.apply(null, arguments);
		},
		showErr : function() {
			Array.prototype.push.call(arguments, 'F_Tips');
			inner.setContent.apply(null, arguments);
		},
		showNormal : function(msg) {
			Array.prototype.push.call(arguments, 'S_Tips');
			inner.setContent.apply(null, arguments);
		},
		setContent : function(msg, className) {
			inner.hide();
			getEl().className = className;
			getEl().innerHTML = msg;
			inner.show();
		},
		show : function() {
			getEl().style.display = 'block';
		},
		hide : function() {
			getEl().style.display = 'none';
		},
		delayHide : function(t) {
			timer = setTimeout(inner.hide, t || 5*1000);
		}
	}
}();

/**
 * 选择问题 1
 * 答案首尾不能含有空格 2
 * 中文答案里不能含有空格 5
 * 您输入的答案过于简单 6
 */
var regConfig = {
	order : [-1, 4, 3, 8, 13, 5, 12, 1, 14, 10, 15, 2, 7, 6, 11, 9, 16, 17, 18],
	reg : {
		1 : /^[\u4e00-\u9fa5]{1,}[　 ]/,
		2 : /^([\u4e00-\u9fa5]{2,19}|[A-Za-z ]{3,38})$/,
		3 : /^(\d{4})(\d{2})(\d{2})$/,
		4 : /^([A-Za-z0-9_-]+@(\w+\.)+\w{2,3})$/
	},
	tips : [
		'请填写2至16个阿拉伯数字',
		'请填写2-19个中文或3-38个英文',
		'请填写日期，例如20080619',
		'请先选择机密问题，并请慎重填写和牢记表示'
	]
}

/**
 * 检测当前登录的身份是否已更换
 * 
 * @param {String} uid 登录前的用户ID
 */
function checkLogin(uid) {
	FWK.widget.userLogin(function() {
		if (FWK.getLoginInfo()[0] != uid) {//登录身份已更换
			document.location.reload();
		}
	});
}

function validQuestion(uid, callback) {
	var cookieKey = uid + '_qs';
	var qs = FWK.getCookie(cookieKey);
	
	if (qs) {
		return callback(true);
	}
	
	Ajax('/service/passport/security.mgr?m=showPwdQue', {data:{'uid':uid}}, function(json) {
		if (json && json.code == "0") {//填写过密保资料
			FWK.Cookie.set(cookieKey, json.SQuestion1 + "_" + json.SQuestion2, "kf.9917.com");
			callback(true);
		} else if (json.code == '31100'){//没有填写密保资料
			callback();
		} else if (json.code === '1007') {//登录身份过期
			checkLogin(uid);
		} else {
			FWK.widget.Dialog(null, json.msg);
		}
	}, FWK.widget.Dialog);
}

/**
 * 需要验证是否要进行密保
 * 
 * @param {String} title
 * @param {回调函数} fn
 */
function modifyHandler_1(title, fn) {
	
	if (typeof modifyHandler_1._callback != 'function') {
		fn();
	} else {
		validQuestion(UID, function(flag) {
			if (flag) {
				modifyHandler_1._callback = fn;
				FWK.widget.Dialog(title, '<iframe frameBorder="0" scrolling="no" src="/accountSecurity/answer_1.html?callback=modifyHandler_1._callback" id="answer" name="answer" style="height:260px; width:360px;"></iframe>', {
					w : 365,
					h : 295
				});
			} else {
				fn();
			}
		});
	}
}
modifyHandler_1._callback = null;
