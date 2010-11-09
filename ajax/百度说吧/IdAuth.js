baidu.dom.ready(function(){
	//表单验证
	baiduTalk.valid(baidu.G('idauth-form'),
	{
		rules: {
			name: {
				required: true,
				minlen: 2,
				maxlen: 18,
				chinese: true
			},
			identification: {
				required: true,
				idcard: true
			}
		},
		errors: {
			name: {
				required: "姓名不能为空，请重新输入",
				minlen: "姓名输入错误，请重新输入",
				maxlen: "姓名输入错误，请重新输入",
				chinese: "姓名输入错误，请重新输入"
			},
			identification: {
				required: "身份证号不能为空，请重新输入",
				idcard: "身份证号输入错误，请重新输入"
			}
		},
		formFunc: function(){
			if(baidu.G('agree').checked == false){
				baiduTalk.alert('请接受百度说吧认证服务协议');
				return false;
			} else {
				return true;
			}
		}
	});
});