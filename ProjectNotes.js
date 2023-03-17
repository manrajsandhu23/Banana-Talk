// --------------Declaring Variables ------------//

var btnTranslate = document.querySelector("#btnTranslate");
var inputText = document.querySelector("#inputText");
var outputText = document.querySelector("#outputText");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

//************************************/

// --------------------Functions-----------------//
// -------Api-Link-Builder------//
function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}
//---------Error-Handler--------//
function errorHandler(params) {
  alert("Error Occured")
}
// ------------On-Click----------//
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
// -----------Close-Pop---------//
function closePop() {
  document.getElementById("pop").style.display = "none";
}
// --------Empty-Values-------//
function checkingEmptyInputs() {
  if ((inputText.value == null) | (inputText.value == "")) {
    document.getElementById("pop").style.display = "block";
    return false;
  }
}
//************************************//
// -----------------Event Listeners----------------//
// -----On-Click Process----//
btnTranslate.addEventListener("click", clickEventHandler);
// ---Checking Empty Values---//
btnTranslate.addEventListener("click", checkingEmptyInputs);

// ****************************************************//
