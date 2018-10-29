jQuery(function(){
    //验证码
	 function yzm(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V',
        'W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
        't','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ )
            str += ''+arr[Math.floor(Math.random() * arr.length)];
        return str;
    }
    // yzm();
    var Num = yzm();
    // console.log(Num);
    // console.log($(".randomNum"))
    $(".randomNum").html(Num);
    //判断账户是否已存在
    $("#username").blur(function(){
        // console.log(5555);
        var kong  =  $("#username").val().trim();
        if(kong == ""){
            $("#username").next().html("用户名不能为空").css("color","red");
            return false;
        };
        var _username = $("#username").val();
        $.ajax({
            type:'POST',
            url:"../api/yanzheng.php",
            async:true,
            data:{
                username:_username
            },
            success:function(res){
                // console.log(res);
                if(res=="true"){
                    $("#username").next().html("账户已经被注册").css("color","red")
                }else{
                   $("#username").next().html("用户名可用").css("color","green") 
                }
            }
        });
       
    })
    //点击变换验证码
   	$(".randomNum").click(function(){
   		var Num = yzm();
   		$(".randomNum").html(Num);
   	});
   	// 正则功能
   	$(".free").click(function(){
		var username = document.getElementById('username').value;
        var reg = /^\s+|\s+$/g;
     	
   		if(!/^[a-z][\w\-]{5,19}$/i.test(username)){
            alert("你的用户名不满足条件");
            return false;
        };
       
        var psw = document.getElementById("psw").value;
        var reg = /^\s+|\s+$/g;
     	psw = psw.replace(reg,"");
     	if(!/^[a-z][\w\-]{5,15}$/i.test(username)){
            alert("你的密码不满足条件");
            return false;
        };
        var email = document.getElementById('email').value;
        if(!/^[a-zA-Z][\w\-\.]*@[\da-z\-]{1,63}(\.[a-z]+)+$/.test(email)){
            alert("你的电子邮箱不满足条件");
            return false;
        };
        var check_psw = document.getElementById('check_psw').value;
        if(check_psw != psw){
            alert('两次输入密码不一致');
            return false;
        };
        var yanzheng = document.getElementById("yanzheng").value;
        // var _randomNum = document.querySelector("randomNum").innerHTML;
        // console.log(Num);
        if(yanzheng != Num){
        	alert("验证码错误");
        	Num = yzm();
        	$(".randomNum").html(Num);
            return false;
        }
        alert("恭喜你,注册成功");
        username = username.replace(reg,"");
        // console.log(username);
        $.ajax({
            type:'POST',
            url:'./../api/reg.php',
            // dataType:'json',
            data:{username:username,psw:psw},
            })
        window.location.href = "login.html"



   	})  
})
