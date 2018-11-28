var slideIndexTestimonials =1;
showSlidesTestimonials(slideIndexTestimonials);

function currentSlideTestimonials(n) {
	showSlidesTestimonials(slideIndexTestimonials = n);
}

function showSlidesTestimonials(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides-testimonials");
	var dots = document.getElementsByClassName("testimonials-dot");
	
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndexTestimonials = slides.length}
	for (i=0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[slideIndexTestimonials-1].style.display="block";
	dots[slideIndexTestimonials-1].className+= " active-testimonials";
}