
// var username= prompt("Your name");
// document.write("Hello "+ username);

var myname = "Vipasyan Telaprolu";
document.write("Made By "+ myname);

let emailElement = document.querySelector('#email');
let messageElement= document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) 
{
	e.preventDefault();
	
	let emailValue = emailElement.value;
	let messageValue = messageElement.value;
	
	console.log('Email: ', emailValue);
	console.log('message: ', messageValue);
	
	if(emailValue.includes('@')) {
		alert('Thanks for your message');
	} else {
		alert('invalid email address');
	}
		
	
})

