//var form = document.getElementById("contactForm");
var form = document.querySelector("#contactForm, #serviceForm");
var allInputs = form.querySelectorAll('input,select,textarea');
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
		for (i = 0; i < form.length; i++) {
				if (form[i].nodeName === "INPUT") {
					console.log(form[i].value.toLocaleUpperCase());
				}
			}
});
}



















































// function validateForm(event) { 
//     event.preventDefault();
// console.log('form submit');
//  } 
// form.addEventListener('submit', handleForm);