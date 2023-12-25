function blowCandles() {
    var candles = document.querySelectorAll('.candles');
    var flames = document.querySelectorAll('.flame');
    var audio = new Audio('path/to/sound.mp3'); // Đặt đường dẫn đúng đến file âm thanh của bạn
    audio.play();
    flames.forEach(function(flame) {
        flame.style.display = 'none';
    });
    candles.forEach(function(candle) {
        candle.style.top = '200px';
        candle.style.left = '200px';
    });
}
