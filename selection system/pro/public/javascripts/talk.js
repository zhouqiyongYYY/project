jQuery(function(){
			var socket = io('http://localhost:3060');
			$('#send').click(function(){
				var data = $('#talk').val();
				$('#talk').val('');
				// socket.on('getServerMessage', function(data) {
				// console.log(data)
				// });
				socket.emit('sendMessage',data)
			});
			socket.on('getMessage',function(data){
				// console.log(data);
				$('#message').append(`
					<li>${data}</li>
				`)
			});
			document.onkeyup = e=>{
						if(e.keyCode === 13&&e.ctrlKey){
							$('#send').click();
						}
					}
})