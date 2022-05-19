let slideIndex  = 1;
showSlides(slideIndex);

// Next/Pervious Controls

function plusSlides(n) {

    showSlides(slideIndex  += n);

}

// Image controls
function currentSlide(n) {
    showSlides(slideIndex  = n);
}

function showSlides(n) {

    let i = 0;

    let slides = document.getElementsByClassName("bannerSlide");
    
    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    console.log(slides);
    console.log(slideIndex);
    console.log(slides[0]);
    slides[slideIndex-1].style.display = "block";
}

