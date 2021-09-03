//var form = document.getElementById("contactForm");
var form = document.querySelector("#showWorks");
var allInputs = form.querySelectorAll('input');
var spinner = document.getElementById("loader");
let formType = 'Show work Request';

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
		var form = document.getElementById("showWorks");
	var email = document.getElementsByName("email")[0].value;
	
	

	let table;
	table = "<html><head></head><body bgcolor='white' text='#000000' >" +
            "<div style='background-color:white;' align='center'><br />" +
            "<table style='font-family: Arial, Helvetica, sans-serif; color: #666666; font-size: 10px; border:1px solid #c3d5e4;padding:1px;-moz-border-radius:1px;-moz-border-radius:1px;-webkit-box-shadow:0px 0px 1px #000; -moz-box-shadow:0px 1px 1px #000;box-shadow:0px 1px 1px #000;z-index:1;' " +
            "border='0' width='700' cellspacing='0' cellpadding='0' align='center' bgcolor='#FFFFFF'>" +
            "<tbody><tr><td colspan='2' bgcolor='#FFFFFF'  align='left' style='color:#3E4D9C;text-decoration:none;text-indent:-9999px;'>" +
            "<table><tr>"+
"<tr><td width='700' align='center' >" +

"<!-- inside table start-->" +
            "<table width='680' style='font:normal 12px Verdana, Geneva, sans-serif;color:#5b5386;'>" +
"<tr><td valign='middle' style='background-color:#39434c;color:#FFFFFF;text-align:center;' height='20' align='left'>&nbsp; <b>" + formType + " Submission</b> </td></tr>" +

//Email Id 
            "<tr><td valign='middle'  height='10' width='680' align='center' ><table width='300'><tr><td height='0' width='100'> Email Id </td><td width='30' align='center' >:</td><td width='170'>" + email  + "</td></tr></table> </td> </tr>" +

"<tr><td valign='middle' height='10'></td></tr>" +
                //line
            "<tr ><td height='1' style='background-color:#39434c;'></td></tr>" +



"<tr><td valign='middle' height='20'></td></tr>" +



"</table><!--inside table End-->" +

"</td></tr>" +

"<tr><td style='color: #ffffff; padding: 5px; font-size: 10px;' colspan='2' align='center' bgcolor='#999999'>" +
            "© Copyrights Antony Dev 2021. All Rights Reserved." +
            "</td></tr>" +

"</tbody></table><p>&nbsp;</p>" +
            "</div> " +
            "</body></html>";
			spinner.classList.remove('active');    
			Email.send({
  Host: "smtp.gmail.com",
  Username : "noreplyantonydev@gmail.com",
  Password : "AntonyDev@1994",
  To : 'antonywebdevelopment@gmail.com',
  From : "noreplyantonydev@gmail.com",
  Subject : formType,
  Body : table,
  Attachments : [
  	{
  		name : "smtpjs.png",
  		path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
  	}]
  }).then(
  	message => status.innerHTML = alert("mail sent successfully")
	  
  );

});
}



















































// function validateForm(event) { 
//     event.preventDefault();
// console.log('form submit');
//  } 
// form.addEventListener('submit', handleForm);