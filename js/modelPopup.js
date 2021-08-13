
let serviceForm=document.querySelector(".service-form");
let overlay=document.querySelector("body");
let closeForm=document.querySelector(".close-icon");

document.addEventListener('DOMContentLoaded', () => {
    let enquireBtn=document.querySelectorAll(".enquire-now");
    enquireBtn.forEach(function(btn) {
        btn.addEventListener('click', () => {
            serviceForm.classList.add('active');
            overlay.classList.add('overlay');
        console.log('add');
        });
 
    });
    closeForm.addEventListener('click', () => {
        serviceForm.classList.remove('active');
        overlay.classList.remove('overlay');
    });

});