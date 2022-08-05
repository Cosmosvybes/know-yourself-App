var SlideIndex = 0;
autoslide();
function autoslide() {
    var images = document.getElementsByClassName('slides');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    SlideIndex++;
    if (SlideIndex > images.length) {
        SlideIndex = 1;
    }
    images[SlideIndex - 1].style.display = "block";
    images[SlideIndex - 1].style.animation = " fadeIn 2s";
    setTimeout(autoslide, 5000);

}
