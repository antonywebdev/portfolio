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
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
	console.log(new FormData(event.target), 'schema');
	console.log(event, 'schema event');

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
		spinner.style.display = 'none';
      status.innerHTML = "Thanks for your submission! We will get back to you";
      form.reset()
    }).catch(error => {
		spinner.style.display = 'none';
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)

});
}



















































// function validateForm(event) { 
//     event.preventDefault();
// console.log('form submit');
//  } 
// form.addEventListener('submit', handleForm);