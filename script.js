function blowCandles() {
    var audio = document.getElementById("HPBDAudio");
    audio.play();
    audio.volume = 0.1;

    var flameElements = document.querySelectorAll('.image');
    var buttonElements = document.getElementById('showImageButton');
    flameElements.forEach(function (flameElement) {
        flameElement.style.opacity = '0';
    });
    setTimeout(function () {
        document.getElementById('gift').classList.toggle('hidden');
    }, 2000);
}
document.addEventListener('DOMContentLoaded', function () {
    var openWebsiteBtn = document.getElementById('gift');
    openWebsiteBtn.addEventListener('click', function () {
        window.open('https://lh3.googleusercontent.com/pw/ABLVV8772JbM1-HBTM_FJjRZ7XC5wr93ACCC4yOTa6oeZtmS6N9hzTMI40UDLAubJLVniA_VV-rNcaj3HBfzr0XbwiDC2kixLCiQnArSa93hYqaG1aHUdZlex99CqSOnGDFBmiumP1DHrBIXUOQxXzC7mHZSfO-DG7cwMEfRskG9nKwaMhgrJFWloAbaWvwhMMlzjD3yvCqZ8NMCpAMgOVFcYpt90s6qKbwU9AJA_nE2CvF4XdvzMPwmmjNgrRuG9Xd1UtT-ZeqPeTsthp-f8jD7dbTdI1NJnjaAAvFWabOcA0l8Wj_X_0fsB5l0vz9LjKvnrspMjZgpXZeh61a0jr8TP5qLK0D5oygnGmeptXWphWdX7oSN9zdzBokOb4jGLbi-IJ-PnN7N_qoQrTMcWe_BcS5NbHuOUT7AN81KCS4vtM0pwd76KEoihGu4Vs0wyulPckbgbmNsmnl_GOeGjgLkQ320s_hsaMFeythzkYY55N8ERXwVs-RdIcMLE9J1XaE0poanc4avkmcDGgwgz8w0ZcM86NkAmcIkcVVdwzWEG0zOlAP6Z43iqIfGPAxKW9h6koI-e8UsFi9fxVrF2SvP_RAq9muISn-W0TumtAqL0Kp-ZXKXkRG6bSdWkApjkxZcZ0AcL8YgmWW8tzetbGbHLDctwNxOD4xw01Xv1X22TwqT42QEB3bURhBMJKWL0lcOEbiCLsiXIQz0hIIaMrw7r-L_ptL4khM0f9j07YE3ftM15u8wZxo1dcxNlEJnHoDlsPRWQJUUgpQm4mI1ezOjiDioVBLb3mRgIW2cePy-ywMLJ5WKOxdh_zTsxXzs6HsVzAsUN-HiwrGJEHTFMktbDlPq02SlYWXNNSUANKA0nv--mo1fp86tq5aaLz2HF4DTxLrGMw=w1152-h648-s-no-gm?authuser=0', '_blank');
    });
});
