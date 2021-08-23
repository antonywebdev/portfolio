//var form = document.getElementById("contactForm");
var form = document.querySelector("#contactForm, #serviceForm");
var allInputs = form.querySelectorAll('input,select,textarea');

var spinner = document.getElementById("loader");

let formType;
function formtype(ele1) {
	formType = ele1;
	console.log(formType);
}

if (form != null) {
	form.addEventListener(
		"invalid",
		(function () {
			return function (e) {
				e.preventDefault();

				myValidation(e.target);
			};
		})(),
		true
	);
	allInputs.forEach((ele) => {
		ele.addEventListener("input", (e) => {
			e.target.parentNode.querySelector(".form-field-error")
				? (e.target.parentNode.querySelector(".form-field-error").innerText =
						"")
				: null;
		});
		ele.addEventListener("change", (e) => {
			e.target.parentNode.querySelector(".form-field-error")
				? (e.target.parentNode.querySelector(".form-field-error").innerText =
						"")
				: null;
		});
	});
	function myValidation(ele) {
		var errorLabel = ele.dataset.errorLabel;
		if (ele.value == "") {
			ele.parentNode.querySelector(
				".form-field-error"
			).innerText = `${errorLabel} is required`;
		} else if (ele.validity) {
			ele.parentNode.querySelector(
				".form-field-error"
			).innerText = `You have enter a valid ${errorLabel}`;
		} else {
			firstname.setCustomValidity("");
		}
	}
	form.addEventListener("submit", function (e) {
		var errorContainer = document.getElementById("FormSubmitError");
		errorContainer.innerHTML = "";
		e.preventDefault();
		var form = document.getElementById("contactForm");
		if(form == undefined || form  == null) {
			form = document.getElementById("serviceForm");
		}
  async function handleSubmit(event) {
    event.preventDefault();
	spinner.style.display = 'block';
	Email.send({
  Host: "smtp.gmail.com",
  Username : "noreplyantonydev@gmail.com",
  Password : "AntonyDev@1994",
  To : 'antonywebdevelopment@gmail.com',
  From : "noreplyantonydev@gmail.com",
  Subject : "subject",
  Body : "body",
  Attachments : [
  	{
  		name : "smtpjs.png",
  		path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
  	}]
  }).then(
  	message => status.innerHTML = alert("mail sent successfully")
	  
  );
  spinner.style.display = 'none';
  }
  form.addEventListener("submit", handleSubmit)

});
}



















































// function validateForm(event) { 
//     event.preventDefault();
// console.log('form submit');
//  } 
// form.addEventListener('submit', handleForm);