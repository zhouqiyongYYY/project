jQuery(function(){
	$("#denglu").click(function(){
		var _username = $("#username").val();
		var _password = $("#psw").val();
		$.ajax({
			url:"../api/login.php",
			data:{
				username:_username,
				password:_password
			},
			success:function(data){
				if(data=="true"){
					console.log(data);
					document.cookie="";
					var d = new Date();
                	d.setDate(d.getDate()+7);
					document.cookie = "uname = " + _username + "; expires=" + d.toUTCString()+"; path=/";
					window.location.href="shopping.html";
					alert("登录成功");
				}else{
					alert("该用户名不存在或密码不正确");
				}
			}
		});
	
	})
})