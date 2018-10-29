jQuery(function(){
	var cookies = document.cookie;
	if(cookies.length>0){
		cookiesArr = cookies.split("; ");
		cookiesArr.forEach(function(item){
	        var yrr = item.split("=");
	        if(yrr[0] == "uname"){
	            $(".yh").html(yrr[1]);
	            $(".zc").html("欢迎您").css("color","red");
	        }
        })
	};
	arr = $.ajax({url:"./../api/shopping.php",async:false});
	console.log(arr.responseText);
	var _arr = arr.responseText;
	var obj = eval("("+_arr+")");
	var str = "";
	for(var i=0;i<obj.length;i++){
		if(i%2==1){
		str += '<div class="pro_detail addLeft">'
		+'<a rel="nofollow" href="detail.html" isconvert="1" target="_blank"><img src="'
		+ obj[i].imgurl+'"height="272" style="border: 0;max-width:272px;"></a>'
		+'<div class="pro_intro fr">'
		+'<p class="pro_title"><a href="detail.html" rel="nofollow" target="_blank" biz-itemid="549239069755" isconvert="1" title="【南极人袜子10双】高档精品棉袜" style="font-size: 16px;">'+obj[i].tittle+'</a></p>'
		+'<div class="pro_price color_p">'
		+'<span class="coupon"><em class="quan-left"></em>券<b><i>￥</i>3.00</b><em class="quan-right"></em></span>'
		+'<div class="out-time">过期时间<span style="font-family: Arial; margin-left: 6px;">2018-10-14</span></div>'
		+'</div>'
		+'<div class="residue">优惠券剩余<i class="color_p">'+obj[i].quan+'</i>张，已领取 <i class="color_p">'+obj[i].yiling+'</i> 张'
		+'</div>'
		+'<div  class="residue">销量<i class="color_p">'+obj[i].xiaoliang+'</i>件'
		+'</div>'
		+'<div class="pro_nowPri">'
		+'<div class="buy-price">'+obj[i].nowprice+'</div>'
		+'<div class="old-price">'
		+'<p><i>￥</i>'+obj[i].passprice+'</p>'
		+'<span>券后价</span>'
		+'</div>'
		+'<div class="go-buy"><a href="detail.html" target="_blank">去下单</a></div>'
		+'</div>'		
		+'</div>'
		+'</div>'
		+'</div>'
		}else if(i%2==0){
		str += '<div class="pro_detail fr">'
		+'<a rel="nofollow" href="detail.html" isconvert="1" target="_blank"><img src="'
		+ obj[i].imgurl+'"height="272" style="border: 0;max-width:272px;"></a>'
		+'<div class="pro_intro fr">'
		+'<p class="pro_title"><a href="detail.html" rel="nofollow" target="_blank" biz-itemid="549239069755" isconvert="1" title="【南极人袜子10双】高档精品棉袜" style="font-size: 16px;">'+obj[i].tittle+'</a></p>'
		+'<div class="pro_price color_p">'
		+'<span class="coupon"><em class="quan-left"></em>券<b><i>￥</i>3.00</b><em class="quan-right"></em></span>'
		+'<div class="out-time">过期时间<span style="font-family: Arial; margin-left: 6px;">2018-10-14</span></div>'
		+'</div>'
		+'<div class="residue">优惠券剩余<i class="color_p">'+obj[i].quan+'</i>张，已领取 <i class="color_p">'+obj[i].yiling+'</i> 张'
		+'</div>'
		+'<div  class="residue">销量<i class="color_p">'+obj[i].xiaoliang+'</i>件'
		+'</div>'
		+'<div class="pro_nowPri">'
		+'<div class="buy-price">'+obj[i].nowprice+'</div>'
		+'<div class="old-price">'
		+'<p><i>￥</i>'+obj[i].passprice+'</p>'
		+'<span>券后价</span>'
		+'</div>'
		+'<div class="go-buy"><a href="detail.html" target="_blank">去下单</a></div>'
		+'</div>'		
		+'</div>'
		+'</div>'
		+'</div>'
		}
	}
	$(".dis_product").append(str);
	// console.log(str)
	window.onscroll=function(){
		if(window.scrollY>500){
			$(".toTop").css("display","block");
		}else if(window.scrollY<500){
			$(".toTop").css("display","none");
		}
	};
	$(".toTop").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });
	





})