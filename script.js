function blowCandles() {
    var flameElements = document.querySelectorAll('.flame');
    var showButton = document.querySelectorAll(".showButton")
    flameElements.forEach(function (flameElement) {
        flameElement.style.opacity = '0';
    });

    var showImageButton = document.getElementById('showImageButton');
    var imageContainer = document.getElementById('imageContainer');
    showImageButton.addEventListener('click', function () {
        imageContainer.style.display = 'block';
        var imgElement = document.createElement('img');
        imgElement.src = 'https://lh3.googleusercontent.com/pw/ABLVV864zu3MLyAhswhWYf5SnfytxJLdzKPxBd_tt60nK4Q0XafA_0QFN0tzb0_sKotEVBAm4ZlgQaSKj3_8xshlqfSA8fHMU1Rm-VY3YH3G0b0dBwN3Zj3jlo93ubXI4NWL582zQHF2ZHQEXVBfVwqgQageMrMzSENkrSRyi9c0rPE4vF_-Hnv_H9pbNGyDKz94TTmyo114qd-HJOhic199YACZGWt6sH_Y9XWOcGzoP0n9S05La_K2NKTL0ZbxhnWzSqzSqjITqdum2Md5R51-1q_QSt7-7nceT6DucJtEjxruc-k-Zkx6U3yIpRTW2LV9ln-l2qmF6BEtUIAyx-ONiLmZXZ6ZVIAmjhdGB-WAUOZyTCyiwRS9e3fgWBKjpWg_GuJwav3G-kz1jsrlKL5o8uN4FTST7BS1CrqCCVdRqMgXj7W9TaLjYs6mTeZ_lvKKnMtJdFgu_xLWl-UOKs64Fxs8HfF7_WhsfaPxQnn5kbmgS8H-uLS6BgkIod9cE9MHGvv4g_oUAqsxI4X3ZvfPUj6YUbY9fkaiouYuqlaTS7x7smzDjIWZQPFOc1j3mn4dbBzYS31UXvoy3Z03w8pYTs0LjpCLIT7MxdY9vrKlNRBfpj1cA0JWKyL7uTK6qXKKoX2kMu7w9aB9fW84Zqwiv4dJidRVEe46tSCL5XhgxLgxoFryeVEober3wkQlfhAeFfv11knaQhVgL5WdcJmQrcpxn5o1UNHl0lUwAFxTBgTXexHfJ6qF4rO78wMWRC6am9RZHAcqXxlwpTyOzKvNUJLHyppxwkR34vqaQMiJ1jMjJE0kDoot_hGNuajuxoOYoBYAe3_Ob1WAbV-h-hgiRnPypkjS4tVTDfoW_7TNtXWCRzhxBJR99oceGcrhQtdZct3Img=w1099-h879-s-no-gm?authuser=0';
        imgElement.alt = 'Image';
        imgElement.style.width = '70%';
        imgElement.style.height = '70%';
        imageContainer.style.transform = 'translateX(0%)';
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imgElement);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    
});
document.addEventListener('DOMContentLoaded', function () {
    var openWebsiteBtn = document.getElementById('openWebsiteBtn');
    openWebsiteBtn.addEventListener('click', function () {
        window.open('https://www.instagram.com/hung.2026', '_blank');
    });
});
