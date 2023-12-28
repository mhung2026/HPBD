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
        imgElement.src = 'https://lh3.googleusercontent.com/pw/ABLVV87-bKxngNTvddMXVdxL_Pd4aenteNlKYaKo3Rdt6ga_P11riAK1PA1uJxDbdqcEqb7-aVczCeEY2RiaeR88Sx9Z1-X7LcJfclctpXwgoUg9leuQ84G54n4B2izKEMRGu2vQdNhbG5TuxHCwWVk7ch7F9SWfL-HQLufVRKgjydtGggi1SLOAxJzyCqod9RKMYDM5TGs2GD5A4K7xuAiieI-XmsozRKoidnm3b4Bc6dnQn_oiQgtDlJu3HJRI2cuO7xo_GBfudoz-_OhyoPNkIP2HBG6uVEQg0YMC_CGHD-GcwWPor98UPGKW33F6tlRGvqGuVrmndAwUgrMmznj6HedxFMWZ_08Bi6_6WTsaAYg_M22lvsPdKIvDxlGQS7e3FCsU0umC-ncssvbvWmccJVg1NaHY0rl7lKnXk-Z6LPYqAt9g317ncIfJSA9HBXNnohPG7HMFAGtiDSrCVN50cGd1eF1sYkyO-ayUbsT8QArb9VhzLM0hxFscnvtYJGu9z91wwvtW8VwM4KZfppO6GgJzFUtkmrRCbGQbfXhCgHlb3Ps4EHEzUE5GHvRIoY9SDPgjwubpRoGlLMocI3-BZ4kCDgvD9iYabRA30x5TmHwBNmwysW79mAjCvE55vONae2z4Q8aEjvHkHPwB7fREf_BS1sBg5Wu8MH9wdi8b7PPtHBwrV3865_gpl39l_5wKPzZoityVTZGzBTWv9Ak4p8b7vv4zNhLHzVK8vO3EhVHRdXiFHrgmhoVbGQzwl99bCWrjFmiCNZQfJu0b3_XXcqEFIhTHn5SBOAVN8yfH0jwxXereO7bMRFdXg1OA4Ky-isLFLFCzv-M1LzJ_eUZQNRL-tGtqJZkaDSlIQaudHJGK1CZELMy6_uhZVnkgWxHL7bkEWQ=w879-h879-s-no-gm?authuser=0';
        imgElement.alt = 'Image';
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
  window.open('https://www.instagram.com/hung.2026', '_blank');
});
