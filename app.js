var btnTranslate = document.querySelector("#btnTranslate");
var inputText = document.querySelector("#inputText");
var outputText = document.querySelector("#outputText");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(params) {
  alert("Error Occured")
}

function clickEventHandler() {
  var translatedText = inputText.value;

  fetch(getTranslation(translatedText))
    .then(response => response.json())
    .then(json => {

      var translatedTextAPI =json.contents.translated;
      outputText.innerText= translatedTextAPI 
    })
    .catch(errorHandler)
}

function closePop() {
  document.getElementById("pop").style.display = "none";
}

function checkingEmptyInputs() {
  if ((inputText.value == null) | (inputText.value == "")) {
    document.getElementById("pop").style.display = "block";
    return false;
  }
}

btnTranslate.addEventListener("click", clickEventHandler);  
btnTranslate.addEventListener("click", checkingEmptyInputs);
