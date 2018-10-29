jQuery(function(){
	brr = $.ajax({
					type:'POST',
					url:"./../api/shopping_list.php",
					// data:{qty:qty,curpage:curpage},
					async:false
				});
	// console.log(brr.responseText);
	var _brr = brr.responseText;
	var obj2 = eval("("+_brr+")");
	for(var p=0;p<obj2.length/12;p++){
		var a = document.createElement("a");
		var paishu1 = document.querySelector(".paishu1");
		a.innerHTML = p + 1;
		paishu1.appendChild(a);
	};
	var prr = [];
	var curpage=1;
	var qty = 12;
	var obj3;
	var _list2 = document.querySelector(".list2");
	// console.log(_list2);
	$(".paishu1").click(function(e){
		curpage = e.target.innerHTML*1;
		// $(".paishu1").children.style.backgroundColor = "#fff";
		// e.target.style.backgroundColor = "#FF3366";
		// e.target.siblings().style.backgroundColor = "#fff";
		$(".list2").empty();
		// _list2.innerHTML == "";		
		console.log(_list2);
		render();
		// console.log(curpage);
	})
	// Array.prototype.slice.call(obj2);
	// console.log(obj2);
	// console.log(curpage);
	
	
	// var qty = 20;
	// var curpage = obj2.length/qty;
	// var _obj = obj2.slice((curpage-1)*qty,qty);
	// console.log(_obj)

	// console.log(obj2);
	function render(){
		// console.log(obj2);
		// console.log(curpage);
		var fanye = "";
		obj3 = obj2.slice((curpage-1)*qty,qty*curpage);
		console.log(obj3);
		for(var g=0;g<obj3.length;g++){
		fanye += '<li class="">'
		+'<a href="" class="img" rel="nofollow" target="_blank">'
		+'<i class="today-new"></i> '
		+'<img src="'+obj3[g].imgurl+'"width="260px" height="260px">'
		+'</a>'
		+'<div class="goods-padding">'
		+'<div class="coupon-wrap clearfix">'
		+'<span class="price"><b><i>￥</i>'+obj3[g].nowprice+'</b>券后</span>'
		+'<span class="old-price"><i>￥</i>'+obj3[g].passprice+'</span>'
		+'<span class="coupon"><em class="quan-left"></em>券<b><i>￥</i>10</b><em class="quan-right"></em></span>'
		+'</div>'
		+'<div class="title">'
		+'<a target="_blank" href="detail.html">'+obj3[g].tittle
		+'</a>'
		+'</div>'
		+'<div class="goods-num-type">'
		+'<div class="goods-type">'
		+'<i class="tmall" title="天猫"></i>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</li>'
		}
		$(".list2").append(fanye);
	};
	render();
	
	// console.log(fanye);
})