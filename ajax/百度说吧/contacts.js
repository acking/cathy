var delContacts=function(uid,uname){
	baiduTalk.confirm('确认把 <b>'+ uname +'</b> 从通讯录里删除吗？<br/>（你也会从对方的通讯录里删除）',{
		onaccept: function(){
			baidu.ajax.get("/contacts/delete?rn="+ 100 * Math.random()+"&uid="+uid, 
					function(xhr,responseText){
			            if (xhr.status==200){
				            window.location.reload();
			            }
	        	} 
			);
		}
	});
};
/**
 * 忽略交换手机请求
 * @param uid
 * @return
 */
var delRequest=function(uid){
	baidu.G("btndel_"+uid).disabled = 'disabled';
	baidu.ajax.get("/contacts/deletemsg?rn="+ 100 * Math.random()+"&uid="+uid, 
			function(xhr,responseText){
	            if (xhr.status==200){
		            window.location.reload();
	            }
    	} 
	);
};
/**
 * 同意交换手机请求
 * @param uid
 * @return
 */
var agreeRequest=function(uid){
	baidu.G("btnagree_"+uid).disabled = 'disabled';
	baidu.ajax.get("/contacts/agree?rn="+ 100 * Math.random()+"&uid="+uid, 
			function(xhr,responseText){
	            if (xhr.status==200){
		            window.location.reload();
	            }
    	} 
	);
};