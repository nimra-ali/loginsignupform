const inputs = document.querySelectorAll("input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function btn(){
	var email =document.getElementById("mail").value
	var pswd1 =document.getElementById("pswd").value
	if(email==="abc@gmail.com"&& pswd1 === Number){
		alert ("login suceesfully")

	}
	else{
		alert ("Try again")
	}
}

function btn2(){
	var email2 =document.getElementById("email").value
	var pswd2 =document.getElementById("pswd2").value
	var user  = document.getElementById("mail2").value
	if(email2 ==="abc@gmail.com" && pswd2 === Number && user === " " ){
		alert ("signup complete")

	}
	else{
		alert ("signup uncomplete ")
	}
}
let link = document.getElementById("block");
	let hideShow = document.getElementById("loginform");
	let signupContent = document.getElementById("other");
	link.addEventListener("click" , function(){
		if(hideShow.style.display === "block"){
			hideShow.style.display = "none"
			signupContent.style.display = "block"
		}else{
			hideShow.style.display === "block"
			signupContent.style.display = "none"

		}
	})
	let link2 = document.getElementById("none");
	let hideShow2 = document.getElementById("other");
	let loginContent = document.getElementById("loginform");

	link2.addEventListener("click" , function(){
		if(hideShow2.style.display === "block"){
			hideShow2.style.display = "none"
			loginContent.style.display = "block"

		}else{
			hideShow2.style.display === "none"
			loginContent.style.display = "block"
		}
	})	
var users = [ ];
function btn2(){
	var email =document.getElementById("email").value 
	var password =document.getElementById("pswd2").value
	var uname =document.getElementById("mail2").value
	var user ={
		username:email,
		password:password,
		person:uname,
	};
	if(user){
	users.push(user)
	localStorage.setItem('userData' , JSON.stringify(users));
	// localStorage.setItem('user' , JSON.stringify(user));
	// window.location.href='dashboard.html'
} 
let isExist = false
users.filter((value =>{
	if(value.person === user.person){
		isExist = true
	}
	else{
		alert("not exit")
	}
}));
if(isExist){
alert("already exist")
}
}

function btn(){
	 var email = document.getElementById('mail').value;
	 var password = document.getElementById('pswd').value;
	 const userData = JSON.parse(localStorage.getItem('userData'));
	 userData.map((value)=>{
		if(value.password === password && value.username == email){
			// window.location.href = 'dashboard.html';
			alert("succesfull")
}
// else{
// 			alert("try again")
// 		}
 })
}

// };
// <div class="login-content" id="first" style="display: block;">

//  var users ; [];

// 		let users = [
// 			name = document.getElementById("mail").value,
// 			pswd1 = document.getElementById("pswd").value
		
// 		]
// 		user = JSON.stringify(users)
// 		console.log(user);

// 		var users = [ ];
// 		function btn(){
// 			var email =document.getElementById("mail").value 
// 			var pswd =document.getElementById("pswd").// 			var email =document.getElementById("mail").value 

// 			console.log(email);
// 			console.log(pswd);
		
// 		var user={
// 			email: email,
// 			pswd:pswd
			
// 		}
// 		console.log(user)
// 		 users.push(user)
// 		 console.log(users)

		// }