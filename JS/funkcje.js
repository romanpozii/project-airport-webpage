window.addEventListener('load',function() {
    var slider = document.getElementById('slider');
    var images = ['img/air.png', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];
    var currentImage = 0;

    function nextSlide() {
        currentImage = (currentImage + 1) % images.length;
        slider.style.backgroundImage = `url(${images[currentImage]})`;
        slider.querySelector('.slide').classList.add('active');
        setTimeout(function() {
            slider.querySelector('.slide:not(.active)').style.backgroundImage = `url(${images[currentImage]})`;
            slider.querySelector('.slide:not(.active)').classList.remove('active');
        }, 500);
    }
    setInterval(nextSlide, 3000)
});