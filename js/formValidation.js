//var form = document.getElementById("contactForm");
var form = document.querySelector("#contactForm");
var allInputs = form.querySelectorAll('input,select,textarea');


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
        console.log(ele);
        console.log(ele.dataset.errorLabel + 'error label');

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
		console.log(new URLSearchParams(new FormData(this)));
		const formData = new URLSearchParams(new FormData(this));
	});
}



















































// function validateForm(event) { 
//     event.preventDefault();
// console.log('form submit');
//  } 
// form.addEventListener('submit', handleForm);