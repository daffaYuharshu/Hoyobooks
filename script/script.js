var slideIndex = 1;
showSlide(slideIndex);

var slideIndex2 = 1;
showSlide2(slideIndex2);
        
        
function nextslide(n){
    showSlide(slideIndex += n);
}

function nextslide2(n){
    showSlide2(slideIndex2 += n);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("imgslide");

    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function showSlide2(n){
    var i;
    var slides = document.getElementsByClassName("imgslide2");

    if(n > slides.length) {
        slideIndex2 = 1;
    }

    if(n < 1) {
        slideIndex2 = slides.length;
    }

    for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
    }

    slides[slideIndex2 - 1].style.display = "block";
}
