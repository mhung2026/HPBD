function blowCandles() {
    var audio = document.getElementById("HPBDAudio");
    audio.play();
    audio.volume = 0.1;

    var flameElements = document.querySelectorAll('.image');
    var buttonElements = document.getElementById('showImageButton');
    flameElements.forEach(function (flameElement) {
        flameElement.style.opacity = '0';
    });
    // buttonElements.style.display = 'none';   
    setTimeout(function () {
        document.getElementById('gift').classList.toggle('hidden');
    }, 2000);
}
document.addEventListener('DOMContentLoaded', function () {
    var openWebsiteBtn = document.getElementById('gift');
    openWebsiteBtn.addEventListener('click', function () {
        window.open('https://www.instagram.com/hung.2026', '_blank');
    });
});