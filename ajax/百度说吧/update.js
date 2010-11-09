//生日选择框
var selectBirthday = function(){
	var year = baidu.G('bd_year');
	var month = baidu.G('bd_month');
	var date = baidu.G('bd_date');
	var birthday = baidu.G('birthday');
	var bd_value = birthday.value.split('-');
	var defaultYearOption = new Option("请选择", "0");
	var defaultMonthOption = new Option("请选择", "0");
	var defaultDateOption = new Option("请选择", "0");
	year.add(defaultYearOption, undefined);
	month.add(defaultMonthOption, undefined);
	date.add(defaultDateOption, undefined);
	var today = new Date();
	for (var i = today.getFullYear(); i > 1960; i--) {
		var newOption = new Option(i, i);
		year.add(newOption, undefined);
	}
	for (var i = 1; i <= 12; i++) {
		var newOption = new Option(i, i);
		month.add(newOption, undefined);
	}
	var setDay = function(max){
		baiduTalk.empty(date);
		var defaultDateOptionNew = new Option("请选择", "0");
		date.add(defaultDateOptionNew, undefined);
		for (var i = 1; i <= max; i++) {
			var newOption = new Option(i, i);
			date.add(newOption, undefined);
		}
	}
	var bigMonth = /^[13578]{1}$|10|12/;//大月
	var smallMonth = /^[469]{1}$|11/;//小月
	var leapYear = function(val){
		if ((val%4 == 0 && val%100 != 0) || (val%100 == 0 && val%400 == 0)){
			return true;
		} else {
			return false;
		}
	}
	var birthVal = function(){
		var value = year.value + '-' + (month.value < 10 ? '0' + month.value : month.value) + '-' + (date.value < 10 ? '0' + date.value : date.value);
		if (value == '0-00-00'){
			value = '';
		}
		return value;
	}
	baidu.event.on(year, 'change', function(){
		birthday.value = birthVal();
		if (month.value == 2){
			var dateNow = date.value;
			if (leapYear(year.value)) {
				setDay(29);
			} else {
				setDay(28);
			}
			date.value = dateNow || 0;
		}
	});
	baidu.event.on(month, 'change', function(){
		var dateNow = date.value;
		if (bigMonth.test(month.value)){
			setDay(31);
		} else if (smallMonth.test(month.value)){
			setDay(30);
		} else if (month.value == 2){
			if (leapYear(year.value)) {
				setDay(29);
			} else {
				setDay(28);
			}
		}
		date.value = dateNow;
		if (date.value == ''){
			date.value = 0;
		}
		birthday.value = birthVal();
	});
	baidu.event.on(date, 'change', function(){
		birthday.value = birthVal();
	});
	if (bd_value.length == 3) {
		year.value = parseFloat(bd_value[0]);
		month.value = parseFloat(bd_value[1]);
		if (bigMonth.test(month.value)){
			setDay(31);
		} else if (smallMonth.test(month.value)){
			setDay(30);
		} else if (month.value == 2){
			if (leapYear(year.value)) {
				setDay(29);
			} else {
				setDay(28);
			}
		}
		date.value = parseFloat(bd_value[2]);
	}
	else {
		year.value = 0;
		month.value = 0;
		date.value = 0;
	}
	//对0000-00-00初始化
	birthday.value = birthVal();
}

baidu.dom.ready(function(){
	var cm = new CityTripleModule;
	var nation = document.createElement("select");
	var province = baidu.g('province');
	var city = baidu.g('city');
	cm.initC1(nation);
	var region=baidu.g('location').value!=''?baidu.g('location').value:'CN.jb.10.';
	cm.Init(nation, province, city, region);
	baidu.on(baidu.g('province'), 'change', function(){
		cm.initC3(city, cm.getSelValue(nation), cm.getSelValue(province));
		baidu.g('location').value = '';
	});
	baidu.on(baidu.g('city'), 'change', function(){
		baidu.g('location').value = cm.getSelValue(city);
	});
	//cityOption.Init(baidu.g('nation'), baidu.g('province'), baidu.g('city'), '');
	
	selectBirthday();
	
	//设置身高
	if (baidu.G('htall')) {
		var tall = baidu.G('htall').value;
		baidu.G('ProfileForm_tall').value = tall;
	}
	
	//表单验证
	baiduTalk.valid(baidu.G('profile-form'),
	{
		rules: {
			name: {
				required: true,
				minlen: 2,
				maxlen: 18,
				chinese: true
			},
			nickname: {
				maxlen: 16
			},
			location: {
				required: true
			},
			birthday: {
				date: true
			},
			school: {
				maxlen: 40
			},
			company: {
				maxlen: 40
			},
			email: {
				email: true
			},
			homepage: {
				url: true
			},
			about_me: {
				maxlen: 140
			}
		},
		errors: {
			name: {
				required: "姓名不能为空，请重新输入",
				minlen: "姓名输入错误，请重新输入",
				maxlen: "姓名输入错误，请重新输入",
				chinese: "姓名输入错误，请重新输入"
			},
			nickname: {
				maxlen: "昵称不能超过16个字符，请重新输入"
			},
			location: {
				required: "所在地不能为空，请选择"
			},
			birthday: {
				date: "请选择有效的日期"
			},
			mail: {
				email: "电子邮件输入错误，请重新输入"
			},
			homepage: {
				url: "博客地址输入错误，请重新输入"
			},
			about_me: {
				maxlen: "内容超出了140个字符，请重新输入"
			}
		},
		tips: {
			name: "请填写你的真实姓名",
			nickname: "请填写你的昵称，不要超过16个字符"
		}
	}
	);

});
