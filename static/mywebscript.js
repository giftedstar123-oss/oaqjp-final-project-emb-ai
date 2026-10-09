function RunSentimentAnalysis() {
const textToAnalyze = document.getElementById(“textToAnalyze”).value.trim();
const output = document.getElementById(“system_response”);

if (!textToAnalyze) {
    output.textContent = "Please enter some text to analyze.";
    return;
}
output.textContent = "Analyzing your text...";
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            output.textContent = this.responseText;
        } else {
            output.textContent =
                "The request failed. Please try again. Error: " + this.status;
        }
    }
};
xhttp.onerror = function () {
    output.textContent = "Unable to connect to the server.";
};
xhttp.open(
    "GET",
    "/emotionDetector?textToAnalyze=" + encodeURIComponent(textToAnalyze),
    true
);
xhttp.send();

}
