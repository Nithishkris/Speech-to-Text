# Speech-to-Text

The provided HTML, CSS, and JavaScript code creates a simple web application for speech-to-text conversion. Below is a brief description of each file and its role in the application:

1) index.html:
* This is the main HTML file that defines the structure of the web page.
* It includes a button labeled "Start Recording" and a paragraph element () to display the recognized speech output.
* The HTML file links to the external style.css and script.js files.

2) style.css:
* This CSS file contains styles for the web page elements.
* It styles the button with a green background and white text for a visually appealing appearance.
* Additionally, it sets the background color of the webpage to a light gray shade.

3) script.js:
* This JavaScript file handles the functionality of the speech-to-text conversion.
* It checks whether the browser supports the SpeechRecognition API and logs the result in the console.
* The startSpeechRecognition function is triggered when the "Start Recording" button is clicked.
* Inside this function, a new SpeechRecognition instance is created, configured, and started.
* The onresult event is used to capture the recognized speech, and the result is displayed in the paragraph with the id outputText.
* The onerror event handles errors that may occur during the speech recognition process.
* The onend event logs a message when the speech recognition ends.

  
This simple web application allows users to click the "Start Recording" button, speak into their microphone, and see the recognized text displayed on the webpage. Users are prompted to allow access to the microphone, and the application captures and displays the recognized speech in real-time.
