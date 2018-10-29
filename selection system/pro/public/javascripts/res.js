jQuery(function(){	
	$('#zhuce').click(function(){
			var uname = $("#uname").val();
			var gender = $('#gender').val();
			var psw = $('#psw').val();
			var email = $('#email').val();
			var resetpsw = $('#reset').val();
			var ban = $('#ban').val();
			var xuehao = $('#xuehao').val();
			var xi = $('#xi').val();
		if(!/^[a-z][\w\-]{5,19}$/i.test(uname)){
            alert("你的用户名不满足条件");
            return false;
        };
        if(!/^[a-z][\w\-]{5,15}$/i.test(psw)){
            alert("你的密码不满足条件");
            return false;
        };
         if(!/^[a-zA-Z]*@[\da-z\-]{1,63}(\.[a-z]+)+$/.test(email)){
            alert("你的电子邮箱不满足条件");
            return false;
        };
        if(resetpsw != psw){
            alert('两次输入密码不一致');
            return false;
        };
      	$.ajax({
	        type:'POST',
	        url:'http://localhost:3000/good/mgd',
	        // dataType:'json',
	        data:{
	        	uname:uname,
	        	psw:psw,
	        	gender:gender,
	        	email:email,
	        	ban:ban,
	        	xuehao:xuehao,
	        	xi:xi
	        },
	        success:function(docs){
	        	if(docs.length>0){
	        		console.log(docs);
	        		alert('你已经注册过了');
	        	}else{
	        		alert('恭喜你注册成功')
	        	}
	        }
        })
	})
})