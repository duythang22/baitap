window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "60px";
    document.getElementById("mobile").style.height = "30px";
    document.getElementById("navbar-right").style.padding = "10px";
    document.getElementById("navbar").style.padding = "0 calc((100% - 1000px)/2)"
  } else {
    document.getElementById("logo").style.height = "80px";
    document.getElementById("mobile").style.height = "40px";
    document.getElementById("navbar-right").style.padding = "20px 0";

  }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "120px";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow__slides");
    var dots = document.getElementsByClassName("slideshow__dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function validateForm() {
    var x;
    var y;
    var z;
    x = document.forms["Form"]["name"].value;
    y = document.forms["Form"]["mail"].value;
    z = document.forms["Form"]["mess"].value;
    if (x == "") {
    alert("Vui lòng tên");
    return false;
    } else if (y == "") {
    alert("Vui lòng mail");
    return false;
    } else if (z == "") {
        alert("Vui lòng để lại lời nhắn");
        return false;
    } else {
        alert("Cảm ơn bạn đã để lại thông tin");
         document.getElementById("Message").style.display = "none";
            }
        }