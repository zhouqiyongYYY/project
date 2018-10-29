jQuery(function(){
	$('#login').click(function(){
		var username = $('#username').val();
		var password = $('#password').val();
		$.ajax({
			type:'POST',
			url:'http://localhost:3000/good/log',
			data:{
				username:username,
				password:password,
			},
			success:function(docs){
				// console.log(docs);
				if(docs.length>0&&docs[0].uname==username&&docs[0].password==password){
					document.cookie = '';
					var d = new Date();
                	d.setDate(d.getDate()+7);
					document.cookie = 'username='+docs[0].uname+'; password='+docs[0].password+'; expires='+d.toUTCString()+'; path=/' 
					alert('登录成功');
					window.location.href='index.html';
				}else{
					alert('不存在该账号或账号密码不正确')
				};
			}
		});

	})
})