function RunSentimentAnalysis() {
    var textToAnalyze = document.getElementById("textToAnalyze").value.trim();
    var output = document.getElementById("system_response");

    if (textToAnalyze === "") {
        output.textContent = "Please enter some text to analyze.";
        return;
    }

    output.textContent = "Analyzing your text...";

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                output.textContent = xhttp.responseText;
            } else {
                output.textContent = "Request failed. Error: " + xhttp.status;
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
