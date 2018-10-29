jQuery(function(){
	var cookies = document.cookie;
	console.log(cookies);
	if(cookies.length>0){
		cookiesArr = cookies.split("; ");
		cookiesArr.forEach(function(item){
	        var yrr = item.split("=");
	        if(yrr[0] == "uname"){
	            $(".yh").html(yrr[1]);
	            $(".zc").html("欢迎您").css("color","red");
	        }
        })
	}
	$(".detail_l").mouseenter(function(){
		$(".detail_l img:nth-child(2)").css({"display":"block","left":500+'px',"top":180+'px'});
	})
	$(".detail_l").mouseleave(function(){
		$(".detail_l img:nth-child(2)").css("display","none")
	})
	arr = $.ajax({url:"./../api/detail.php",async:false});
	var _arr = arr.responseText;
	var obj = eval("("+_arr+")");
	var str = "";
	for(var i=0;i<obj.length;i++){
		str += '<li>'
		+'<a href=""><img src="'+ obj[i].imgurl+'"</a>'
		+'<p>'+obj[i].tittle+'</p>'
		+'<span class="nowprice">￥'+obj[i].nowprice+'</span>'
		+'<span class="passprice" style="text-decoration:line-through">'+obj[i].passprice+'</span>'
		+'</li>'
	}
	// console.log(str);
	var list = document.querySelector(".list_list");
	list.innerHTML = str;
	$(".list_list li").css({"padding-bottom":30+'px'})
	$(".list_list li p").css({"margin-left":10+'px',"color":"#000","font-size":16+'px',"margin-top":20+'px',"margin-bottom":14+'px'});
	$(".nowprice").css({"margin-left":10+'px',"font-size":24+'px',"color":"#ED145B"});
	$(".passprice").css({"margin-left":50+'px',"font-size":18+'px',"color":"#AAAAAA"});
	// console.log(arr.responseText);
	var dimg = $(".small").prop("src");
	console.log(dimg);
	var dname = $(".detail_c h3").html();
	console.log(dname);
	$(".car").click(function(){
		 $.ajax({
			type:'GET',
			url:"./../api/addcarlist.php",
			data:{imgurl:dimg,uname:dname,price:12.6,jianshu:1,guid:9999},
			async:false
		});
		alert("加入成功");
	});
	
})

