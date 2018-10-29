jQuery(function(){
	//获取登录的用户信息
		var cookies = document.cookie;
		cookiesArr = cookies.split('; ');
		var arr = cookiesArr[0].split('=');
		var yh = arr[1];
		$('.yh').html(yh);
	//个人信息
	$('.infor').click(function(){
		var cookies = document.cookie;
		cookiesArr = cookies.split('; ');
		var arr = cookiesArr[0].split('=');
		// console.log(arr[1]);
		var uname = arr[1];
		$.ajax({
			type:'POST',
			url:'http://localhost:3000/good/personal',
			async:true,
			data:{
				username:uname
			},
			success:function(docs){
				// console.log(docs);
				var str = '';
				str += `<div class="person">
							<h3>个人信息</h3>
							<img src="" id="logo" width="100px" height="100px"></br>	
							<input type="file" id="file" name="logo"/><input type="submit" value="提交" id="upfile"/>
							<p>学号：${docs[0].xuehao}</p>
							<p>用户名：${docs[0].uname}</p>
							<p>性别：${docs[0].gender}</p>
							<p>邮箱：${docs[0].email}</p>
							<p>系部：${docs[0].xi}
						</div>`
				$('.lesson_br').html(str)					
			}
		})
	})
	//修改密码
	$('.revise').click(function(){
		$('.lesson_br').empty();
		var str2 = '';
		str2 += `<div class="rev">
					<h3>修改密码</h3>
					<label for="rev_uname">用户名：</label><input type="text" id="rev_uname"/></br>
					<label for="rev_uname">密码：</label><input type="password" id="rev_password"/></br>
					<label for="rev_newpsw">新的密码：</label><input type="password" id="rev_newpsw"/></br>
					<label for="rev_confirm">确认密码：</label><input type="password" id="rev_confirm"/></br>
					<input type="button" value="确认修改" id="xiugai">
				</div>`
		$('.lesson_br').html(str2);
	})
	$('.lesson_br').on('click','#xiugai',function(){
		// console.log(666);
		var uname = $('#rev_uname').val();
		var password = $('#rev_password').val();
		var newpsw = $('#rev_newpsw').val();
		var confirm = $('#rev_confirm').val();
		// if(!/^[a-z][\w\-]{5,15}$/i.test(newpsw)){
  //           alert("你的密码不满足条件");
  //           return false;
  //       };
		//  if(confirm != password){
  //           alert('两次输入密码不一致');
  //           return false;
  //       };
		$.ajax({
			type:'POST',
			url:'http://localhost:3000/good/xiugai',
			data:{
				uname:uname,
				password:password,
				newpsw:newpsw,				
			},
			success:function(data){
				console.log(data);
				alert(data);
			}
		})
	})
	//选择课程
	$('.select').click(function(){
		$('.lesson_br').empty();
		lesoonArr = $.ajax({
			type:'POST',
			url:'http://localhost:3000/good/lesson',
			success:function(docs){
				// console.log(docs);
				var str3 = `<ul class="list_top">
								<li>选择</li>
								<li>课程ID</li>
								<li>课程名称</li>
								<li>上课时间</li>
								<li>上课地点</li>
								<li>任课老师</li>
							</ul>`;
				for(var i=0;i<docs.length;i++){
				str3 +=	`<ul class="lesson_list">
							<li><input type="checkbox" class="xuankuang"/></li>
							<li>${docs[i].lessonId}</li>
							<li>${docs[i].lesson}</li>
							<li>${docs[i].times}</li>
							<li>${docs[i].place}</li>
							<li>${docs[i].teacher}</li>
						</ul>`
				}
				str3+=`<input type="button" value='添加' id="queren"/>`
				$('.lesson_br').html(str3);
			}
		});
		$('.lesson_br').on('click','#queren',function(){
			var xuanze = document.querySelectorAll('.xuanze');
			var cookies = document.cookie;
			cookiesArr = cookies.split('; ');
			var arr = cookiesArr[0].split('=');
			// console.log(arr[1]);
			var uname = arr[1];
			console.log(xuanze);
			// console.log(xuanze[0].children[1]);
			var brr = [];
			for(var i=0;i<xuanze.length;i++){
				var good = {
					lessonId:xuanze[i].children[1].innerHTML,
					lessonName:xuanze[i].children[2].innerHTML,
					lessontime:xuanze[i].children[3].innerHTML,
					lessonplace:xuanze[i].children[4].innerHTML,
					teacher:xuanze[i].children[5].innerHTML,
				};
				brr.push(good);
			};
			for(var g=0;g<brr.length;g++){				
				$.ajax({
				type:'POST',
				url:'http://localhost:3000/good/xuanke',
				data:{
					lessonId:brr[g].lessonId,
					lessonName:brr[g].lessonName,
					lessontime:brr[g].lessontime,
					lessonplace:brr[g].lessonplace,
					teacher:brr[g].teacher,
					uname:uname
				},
					async:true,
					// success:function(data){
					// 	alert(data);
					// }
				});
			};
			alert('选择成功');
			$('.select').click(); 

		});
		//选中框的样式
		$('.lesson_br').click(function(e){
			var target = e.target;			
			var tagName = target.tagName.toLowerCase();
			// console.log(target);
			//点击当前行目标为li的样式
			if(tagName === 'li'){
				e.stopPropagation();
				var currentCheckbox = target.parentElement.children[0].querySelector('input[type=checkbox]');
				// console.log(currentCheckbox);
				currentCheckbox.checked = !currentCheckbox.checked;
				e.target.parentElement.classList[currentCheckbox.checked?'add':'remove']('xuanze');	
			//点击当前行目标为checkbox的样式	
			}else if(target.className='xuankuang'){
				e.stopPropagation();
				e.target.parentElement.parentElement.classList[target.checked?'add':'remove']('xuanze');
			}
			

		});

		$('.lesson_br').on('scroll','.lesson_list',function(){
			console.log(22222);
			$('.list_top').addClass('xiding')
		})
		
	});
	//查看已选择的课程
	$('.check').click(function(){
		$('.lesson_br').empty();
		var str5 = `<ul class="check_up">
						<li>课程ID</li>
						<li>课程名称</li>
						<li>上课时间</li>
						<li>上课地点</li>
						<li>授课老师</li>
					</ul>
					<div class="check_down"></div>
					`;
		str5 += `<input type="text" class="check_t" placeholder="请输入您的用户名"/></br>
				<input type="button" class="check_b" value="查询"/>`;
		$('.lesson_br').html(str5);
		$('.lesson_br').on('click','.check_b',function(){
			// console.log(7777);
			var uname_c = $('.check_t').val();
			var str6='';
			$.ajax({
				type:'POST',
				url:'http://localhost:3000/good/check',
				data:{
					uname:uname_c
				},
				success:function(docs){
					// console.log(docs);
					for(var o=0;o<docs.length;o++){
						str6 += `<ul class="checked_out">
						<li>${docs[o].lessonId}</li>
						<li>${docs[o].lessonName}</li>
						<li>${docs[o].lessontime}</li>
						<li>${docs[o].lessonplace}</li>
						<li>${docs[o].teacher}</li>
						<li><input type="button" value="删除" class="del"/></li>
						</ul>`
					};
					$('.check_down').empty();
					$('.check_down').html(str6);
				}
			});
		});
		$('.lesson_br').on('click','.del',function(e){
			// console.log(33333);
			var target = e.target;
			var currentUl = e.target.parentElement.parentElement;
			var tagName = target.tagName.toLowerCase();
			if(tagName==='input'){
				var cookies = document.cookie;
				cookiesArr = cookies.split('; ');
				var arr = cookiesArr[0].split('=');
				// console.log(arr[1]);
				var uname = arr[1];
				var currentId = currentUl.children[0].innerHTML;
				currentUl.parentElement.removeChild(currentUl);
				$.ajax({
					type:'POST',
					url:'http://localhost:3000/good/del',
					data:{
						id:currentId,
						uname:uname
					}
				})
			}
		})
	});
	//公告信息
	$('.notice').click(function(){
		$('.lesson_br').empty();
		//接受服务器传来的信息
		var socket = io('http://localhost:3059');
		socket.on('sendNotice',function(data){
			// console.log(data);
			var str7 = `<ul class="notice_top">
							<li>公告</li>
							<li>发布时间</li>
						</ul>`;
			for(var n=0;n<data.length;n++){
				str7 += `<ul class="notice_content">
							<li data-id=${n}><a href="#" class="gonggao">${data[n].title}</a></li>
							<li>${data[n].time}</li>
						</ul>`	
			};			
			$('.lesson_br').html(str7);
			$('.lesson_br').on('click','.gonggao',function(e){
				// console.log(49494);
				var target = e.target;
				var id = e.target.parentElement.getAttribute('data-id');
				// console.log(data);
				// console.log(id);
				var content = data[id].content;
				var sign = data[id].sign;
				var times = data[id].time;
				$('.lesson_br').empty();
				var str8 = `<p class="gonggao_c">${content}</p>
							<p class="gonggao_s">${sign}</p>
							<p class="gonggao_t">${times}</p>`

							$('.lesson_br').html(str8);
				
				

			})
			
		});
		


	})
	//聊天室
	$('.board').click(function(){
		window.location.href='talk.html'		
	});
	//退出系统
	//清除所有cookie
	$('.quit').click(function(){
		var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
		if (keys) { 
		for (var i = keys.length; i--;) 
		document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
		};
		//回到登录系统
		window.location.href='login.html'
	})

})