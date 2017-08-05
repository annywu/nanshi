// var r=document.referrer;
// 		console.log(r);

// $('#btn_login').on('click',function(e){
// 	e.preventDefault()
// 	var user=$('#user').val();
// 	var pwd=$('#pwd').val();
// 	console.log(user)
// 	$.ajax({
// 		url:'../js/login.json',
// 		type:'post',
// 		data:{
// 			user:user,
// 			pwd:pwd,
// 		},
// 		dateType:"json",
// 		success:function(data){
// 			var data=JSON.parse(data);
			
// 			for(var i=0;i<data.length;i++){
// 				if(data[i].username==user&&data[i].pwd==pwd){
// 					setCookie("username",user,1)
// 				}
// 			}
// 		}
// 	})
// })
