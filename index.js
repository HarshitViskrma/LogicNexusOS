// scroll btn - It is use to scroll up and down.//

function scrollup() {
	window.scrollTo(0, 0);
}


// background theme color //

function color(){
	var body = document.getElementById("bg");
	body.bgColor = "black";
}


// This is for feedback form only //

function SendMail(){
	var params = {
		from_name : document.getElementById("fullName").value,
		email_id : document.getElementById("email_id").value,
		subject : document.getElementById("subject").value,
		message  : document.getElementById("message").value
	}
	emailjs.send("service_wp0uil8", "template_om26i9y", params).then(function(res){
		alert("Message send successfully! " + res.status);
	})
}