const mediaResult = window.matchMedia("(max-width: 700px)");

if (mediaResult.matches == false) {
    var slider = document.getElementById("slide");

    window.addEventListener('scroll', () => {
        var scrolled = window.scrollY;
        slider.style.left = -scrolled * 0.82 + 'px';
    });
}
else {
    var slider = document.getElementById("slide");

    window.addEventListener('scroll', () => {
        var scrolled = window.scrollY;
        slider.style.top = -scrolled * 0.464 + 'px';
    });
}