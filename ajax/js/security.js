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
 * 验证身份证输入
 * 
 * @param {String} _identity
 */
function validIdentity(_identity) {
	var ReDate15 = /\d{6}(\d{6})\d{3}/;
    var ReDate18 = /\d{6}(\d{8})\d{3}/;
	
    function _CheckSum(strID){
        Re18Digital = /(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})([0-9xX]{1})/;
        Arr = Re18Digital.exec(strID);
        var Wi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        Sum = 0;
        for (i = 0; i <= 16; i++) 
            Sum += Arr[i + 1] * Wi[i];
        ArrCheckSum = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
        strCheckSum = ArrCheckSum[Sum % 11];
        if (strCheckSum == Arr[18].toUpperCase()) 
            return true;
        else 
            return false;
    }
	
    function _CheckDate(strDate, DateFrom, DateTo){
        ReDigital8 = /\d{8}/;
        ReAutoDate = /\d{4}-{1}\d{1,2}-\d{1,2}/;
        if (strDate.indexOf("-") > -1) {
            if (ReAutoDate.test(strDate) == false) 
                return false;
            Arr = strDate.split("-");
            strDate = (Arr[0]) + "" + (Arr[1].length < 2 ? "0" : "") + Arr[1] + (Arr[2].length < 2 ? "0" : "") + (Arr[2]);
        }
        if (strDate.length != 8) 
            return false;
        if (ReDigital8.test(strDate) == false) 
            return false;
        MyDate = eval(strDate.replace(/^(\d{4})(\d{2})(\d{2})$/, "new Date($1,$2-1,$3)"));
        strMyDate = MyDate.getFullYear() + (MyDate.getMonth() < 9 ? "0" : "") + (MyDate.getMonth() + 1) + "" + (MyDate.getDate() <= 9 ? "0" : "") + MyDate.getDate();
        if (strMyDate != strDate) 
            return false;
        if (MyDate >= DateFrom && MyDate <= DateTo) 
            return true;
        else 
            return false;
    }
	
    function _validIdentity(identity){
        var ReDigital15 = /\d{15}/;
        var ReDigital18 = /\d{17}[0-9xX]{1}/;
        var strMsg1 = "身份证号码中包含非法字符，请重新输入";
        var strMsg2 = "身份证位数不正确，请重新输入";
        var strMsg3 = "身份证号码无效，请重新输入";
        switch (identity.length) {
            case 15:
                if (identity == "111111111111111") {
                    return strMsg3;
                }
                if (ReDigital15.test(identity) == false) {
                    return strMsg1;
                }
                Arr = ReDate15.exec(identity);
                strDate = "19" + Arr[1];
                if (_CheckDate(strDate, new Date(1900, 0, 1), new Date(1999, 11, 31)) == false) {
                    return strMsg3;
                }
                break;
            case 18:
                if (ReDigital18.test(identity) == false) {
                    return strMsg1;
                }
                Arr = ReDate18.exec(identity);
                strDate = Arr[1];
                if (_CheckDate(strDate, new Date(1900, 0, 1), new Date()) == false) {
                    return strMsg3;
                }
                if (_CheckSum(identity) == false) {
                    return strMsg3;
                }
                break;
            case 0:
                break;
            default:
                return strMsg2;
                break;
        }
        return true;
    }
	
    return _validIdentity(_identity);
}

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
		4 : /^([A-Za-z0-9_-]+@(\w+\.)+\w{2,3})$/,
		5 : /^[\u4E00-\u9FA5]{2,10}$/
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


/**
 * 检测输入的密码强度
 * @param {String} pwd 密码
 * @param {String} uid 数字帐号
 */
function checkPwdSecurity(pwd, uid) {
	
	function consectiveStr(value) {
        if (/^\d+$/.test(value)) {
            var arr = str2Array(value);
            if (48 == arr[0] && 57 == arr[1]) {
                arr[0] = 58
            }
            if (48 == arr[arr.length - 1] && 57 == arr[arr.length - 2]) {
                arr[arr.length - 1] = 58
            }
            return consectiveStr2(arr)
        }
        if (/^[A-Z]+$/.test(value) || /^[a-z]+$/.test(value)) {
            return consectiveStr2(str2Array(value))
        }
        return false
    }
	
	function consectiveStr2(arr){
		//检测每两个值之间的差值规律
		var diff = arr[1] - arr[0];
		if (diff != 1 && diff != -1) {
			return false;
		}
		
		for (var i = 2, len = arr.length; i < len; i++) {
			if (arr[i] - arr[i - 1] != diff) {
				return false;
			}
		}
		
		return true;
	}
	
	function str2Array(value) {
		var arr = [];
		for (var i = 0, len = value.length; i < len; ++i) {
			arr.push(value.charCodeAt(i));
		}
		return arr;
	}
	
	if (pwd.length == 0) {
		return {
			level : 0,
			detail : 0
		}
	} else if (/ /.test(pwd)) {
		return {
			level : 0,
			detail : 5
		}
	} else if (pwd.length < checkPwdConfig.min_len) {
		return {
			level : 0,
			detail : 1
		}
	} else if (pwd.length > checkPwdConfig.max_len) {
		return {
			level : 0,
			detail : 2
		}
	} else if (pwd == uid) {
		return {
			level : 0,
			detail : 3
		}
	} else if (new RegExp("^\\d{1,"+checkPwdConfig.uin_len+"}$").test(pwd)) {
		return {
			level : 0,
			detail : 4
		}
	} else if (/^(.)\1+$/.test(pwd)) {
		return {
			level : 0,
			detail : 6
		}
	} else if (consectiveStr(pwd)) {
		return {
			level : 0,
			detail : 7
		}
	} else {
		var mode = 0,
			type = 0,
			charCode = null;
			
		for (var i = 0, len = pwd.length; i < len; ++i) {
			charCode = pwd.charCodeAt(i);
			if (charCode >= 48 && charCode <= 57) {//0~9
				mode |= 1;
			} else if (charCode >= 65 && charCode <= 90) {//A~Z
				mode |= 2;
			} else if (charCode >= 97 && charCode <= 122) {//a~z
				mode |= 4;
			} else {
				mode |= 8;
			}
		}
		
		while (mode != 0) {
			type++;
			mode &= (mode - 1);
		}
		
		if (type == 1) {
			return {
				level : 1,
				detail : 0
			}
		} else if (type == 2) {
			return {
				level : 2,
				detail : 0
			}
		} else {
			return {
				level : 3,
				detail : 0
			}
		}
	}
}