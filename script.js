function blowCandles() {
    var flameElements = document.querySelectorAll('.flame, .flame1, .flame2');
    var showButton = document.querySelectorAll(".showButton")
    flameElements.forEach(function (flameElement) {
        flameElement.style.opacity = '0';
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var showImageButton = document.getElementById('showImageButton');
    var imageContainer = document.getElementById('imageContainer');
    var divContainer = document.getElementsByClassName("container")
    showImageButton.addEventListener('click', function () {
        imageContainer.style.display = 'block';
        var imgElement = document.createElement('img');
        imgElement.src = 'https://lh3.googleusercontent.com/pw/ABLVV87ddGkUNa-GPmPdaKJUY2taOqbHViH-AepuFFJ7mp1kFB82LdkOhq7EBHjXi0Tz-ero7qrp0TeTBOHcMrcvWGIkgsZzPl0wOONYSBMMP05BDS9Id6zyJjEFsRdGIxZQw_a1TM2_nmaqS7O-VIIbIy5R9ad8XeR7TWo2lY6zhK4KJzA-T2zgQ3Lp8jJ4dXFdOHfQldlZ6M7h-NCy7Cu_uSK_C2zs7O8m9qPApKuKeAu9Hvox3hH38168BvYFnEM40z17uaJajzLFOJwjmm08wFZm3kIBadm8lPjRMzxaS9YOYjE3XRXSqWZHy4TF4mHrTm1UGhRKQ8BIF76ldC00C52KIjpX7k7zCw8bXqMRf6og7LxXMjedXF3BsbnXqpy5Gw4NwS6hWzRQoOML2VDKHcmgelN88BHlTGHFWaXAoSo5M9JRde-082WQzbDvW5rNdjUrsZbsDbPrcj4oV8i6CjZ2dVTcdjwHTbK2ZIbpI5ZXNkDSsGubiQ1SYj5XZVRr4Jhk92So1EcwuUZG_X1lYNd4if6XGxF8hemU2jccdB7oYILHX_shAVaao2_PkQpfF8nz3-Orc-StstM-7M1wwaFZwp3AF79ovkIb-MhKH1JK2L3yGDMh32hHYqFJ15IPNJw0jCM7ezrc0HaaUzbJUbezf3Dxdf8zL9llF-zRLeKJabcqzM79vHeRClYj6eKoyHFUDr8DmSg9d6ewvxVAKGlXysdxwWakFtssNBF559Zk8I0voquhJvs_OHRjTM3mw2cW2MASrPCCa_YTo9vo-GZwQ4d4quhZTpbKwtvI7D9FKeezdFXLGllHHWSXOlEL1NXSJngB9XnSnGgxhF1soDVwx5FQ3U0JFmPXjMcssdy7Ged-7-iy27-lhZH2YxHSaUx8DA=w879-h879-s-no-gm?authuser=0';
        imgElement.alt = 'Hình ảnh';
        imgElement.style.width = '300px';
        imgElement.style.height = '300px';
        imgElement.style.transform = 'translate(-400px, 0px)';
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imgElement);
        for (var i = 0; i < divContainer.length; i++) {
            divContainer[i].style.transform = 'translate(150px, 0px)';
          }

    });
});
var openWebsiteBtn = document.getElementById('openWebsiteBtn');

openWebsiteBtn.addEventListener('click', function() {
  // Mở trang web khi nút được nhấn
  window.open('https://www.instagram.com/direct/t/111487736906115/', '_blank'); // '_blank' để mở trong cửa sổ/tab mới
});
