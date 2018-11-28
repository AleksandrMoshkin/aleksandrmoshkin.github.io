var slideIndexTestimonials =1;
showSlidesTestimonials(slideIndexTestimonials);

function currentSlideTestimonials(n) {
	showSlidesTestimonials(slideIndexTestimonials = n);
}
var Message =1;
showContactForm(Message);

function usersMessage(n) {
	showContactForm(n);
}

function showContactForm(n){
	var showForm = document.getElementsByClassName("contact");
	var closeForm = document.getElementsByClassName("contact-form");

if (n===1){closeForm[0].style.display="block"; showForm[0].style.display="none";}
if (n===0){showForm[0].style.display="block"; closeForm[0].style.display="none";}

}