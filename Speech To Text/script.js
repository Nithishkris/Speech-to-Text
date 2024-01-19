document.addEventListener('DOMContentLoaded', function () {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        // Speech recognition supported
        console.log('Speech recognition supported.');
    } else {
        // Speech recognition not supported
        console.error('Speech recognition not supported.');
        alert('Speech recognition is not supported in your browser. Please use a modern browser.');
    }
});

function startSpeechRecognition() {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function (event) {
        var result = event.results[0][0].transcript;
        document.getElementById('outputText').innerText = 'You said: ' + result;
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
        alert('Error occurred during speech recognition. Please try again.');
    };

    recognition.onend = function () {
        console.log('Speech recognition ended.');
    };

    recognition.start();
}
