jQuery(function(){
			//获取cookie
			var cookies = document.cookie;
			// console.log(cookies);
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
			//获取元素
			var username = $.cookie("uname");
			// console.log(username);
			var datalist = document.getElementById("datalist");
			var carList = document.getElementById("carList");
			var carTotal = document.getElementsByClassName("carTotal")[0];
			var saveTotal = document.getElementsByClassName("saveTotal")[0];
			// var jjss = document.getElementsByClassName("jjss")[0];
			var jian = 1;
			//呈现购物车下方的商品
			var carlist_ul = "";	
			$.ajax({
				// type:'POST',
				url:"./../api/carlist.php",
				// data:{qty:qty,curpage:curpage},
				success:function(data){
					var obj5 = JSON.parse(data);
					// console.log(data);
					for(var u=0;u<obj5.length;u++){
						carlist_ul += '<li data-num='+obj5[u].guid+'>'
						+'<img src="'+obj5[u].imgurl+'">'
						+'<p>' + obj5[u].guid + '</p>'
						+'<p>' + obj5[u].uname + '</p>'
						+'<p>' + obj5[u].price + '</p>'
						+'<input type="button" value="Add to" class="addBtn"/>'
						+'</li>'
						datalist.innerHTML = carlist_ul;
						};
					}
				});							
			var carobj;
			var currentId;
			//购物车下方的商品添加进购物车(外加去重效果)
			datalist.onclick = function(e){
			var guid = e.target.parentElement.getAttribute("data-num");
			var currentLi = e.target.parentElement;
			var uname = currentLi.children[2].innerHTML;
			var price = currentLi.children[3].innerHTML;
			var imgurl = currentLi.children[0].src;
			// console.log(imgurl);
			// console.log(guid);
			$.ajax({
					type:'GET',
					url:"./../api/addcarlist.php",
					data:{
						imgurl:imgurl,
						guid:guid,
						uname:uname,
						price:price,
						jianshu:jian,
						user:username
					},
					success:function(){
						$.ajax({
							type:"GET",
							url:"../api/addlist2.php",
							data:{
								user:username
							},
							success:function(data){					
								carobj = JSON.parse(data);
								xuanran();
					           }
				        })			
					}
				});
								
			};
			carlist.onclick = function(e){
				//单个删除购物车物品
				if(e.target.className == "delBtn"){
					var currentId = e.target.parentElement.getAttribute("data-guid");
					/*console.log(currentId);*/;
					$.ajax({
						type:'GET',
						url:'../api/del.php',
						data:{
							guid:currentId,
							user:username
						},
						success:function(){
							$.ajax({
								type:"GET",
								url:"../api/addlist2.php",
								data:{
									user:username
								},
								success:function(data){					
									carobj = JSON.parse(data);
									xuanran();
						           }
						        })
						}
					});
				};
				//件数减少1
				if(e.target.className == "jian"){
					var currentId = e.target.parentElement.parentElement.getAttribute("data-guid");
					$.ajax({
						type:'GET',
						url:'../api/jian.php',
						data:{
							guid:currentId,
							user:username
						},
						success:function(){
							$.ajax({
								type:"GET",
								url:"../api/addlist2.php",
								data:{
									user:username
								},
								success:function(data){					
									carobj = JSON.parse(data);
									xuanran();
						           }
						    })
						}
					})
				};
				//件数增加1
				if(e.target.className == "jia"){
					var currentId = e.target.parentElement.parentElement.getAttribute("data-guid");
					$.ajax({
						type:'GET',
						url:'../api/jia.php',
						data:{
							guid:currentId,
							user:username
						},
						success:function(){
							$.ajax({
								type:"GET",
								url:"../api/addlist2.php",
								data:{
									user:username
								},
								success:function(data){					
									carobj = JSON.parse(data);
									xuanran();
						           }
						    })
						}
					})
				}
											
			};
			//渲染页面
			function xuanran(){
				var newstr = "";
				for(var i=0;i<carobj.length;i++){
				newstr += '<li data-guid='+carobj[i].guid+'>'
				+ '<span><img src="'+carobj[i].imgurl+'" width="130px" height="130px"></span>'
				+ '<span>'+carobj[i].uname+'</span>'
				+ '<span><span class="jian">-</span><span class="jjss">' + carobj[i].jianshu + '</span><span class="jia">+</span></span>'
				+ '<span>'+carobj[i].price+'</span>'
				+ '<span class="total">'+(carobj[i].price*carobj[i].jianshu).toFixed(2)+'</span>'
				+ '<input type="button" class="delBtn" value="x" />'
				+ '</li>';
				};
				carlist.innerHTML = newstr;
				// jian = carobj[i].jianshu;
			};
			//进入页面时渲染页面
			$.ajax({
				type:"GET",
				url:"../api/addlist2.php",
				data:{
					user:username
				},
				success:function(data){					
					carobj = JSON.parse(data);
					xuanran();
		           }
		        })
				
				


})