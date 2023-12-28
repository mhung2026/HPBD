function blowCandles() {
    var flameElements = document.querySelectorAll('.flame, .flame1, .flame2');
    var showButton = document.querySelectorAll(".showButton")

    flameElements.forEach(function (flameElement) {
        flameElement.style.opacity = '0';
    });
    showButton.forEach(function (showButton) {
        showButton.style.opacity = '100';
    });
}
// document.addEventListener('DOMContentLoaded', function () {
//     var showImageButton = document.getElementById('showImageButton');
//     var imageContainer = document.getElementById('imageContainer');
//     showImageButton.addEventListener('click', function () {
//         imageContainer.style.display = 'block';
//         var imgElement = document.createElement('img');
//         var imgCake = document.querySelectorAll(".BC");
//         imgElement.src = 'gift.jpg';
//         imgElement.alt = 'Hình ảnh';
//         imgElement.style.width = '300px';
//         imgElement.style.height = '200px';
//         imageContainer.innerHTML = '';
//         imageContainer.appendChild(imgElement);
//     });
// });
function clickGift() {

}
