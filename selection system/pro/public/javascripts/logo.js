function uploadFile(){
	var fileNode = document.getElementById("file");
	// console.log(fileNode);
			var xmlhttp = new XMLHttpRequest();
			//构造form数据 
			var data = new FormData();
			console.log(fileNode.files)
			data.append("logo", fileNode.files[0]);
			console.log(data)
				//设置请求，true：表示异步  
			xmlhttp.open("post", "http://localhost:3000/good/head", true);
			//不要缓存  
			//xmlhttp.setRequestHeader("If-Modified-Since", "0");  
			//提交请求  
			xmlhttp.send(data);
			xmlhttp.onreadystatechange = function() {
				//上传成功，返回的文件名，设置到父节点的背景中  
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					console.log(xmlhttp.responseText);
					$('#logo').attr('src','./uploads/'+xmlhttp.responseText);
				}
			}
			//清除掉，否则下一次选择同样的文件就进入不到onchange函数中了  
			fileNode.value = null;

	}
	function upfile(){
		$('.lesson_br').on('click','#upfile',function(){
			// console.log(5555);
			uploadFile()
		})
	}
	window.onload = function(){
		upfile();
	}


	


