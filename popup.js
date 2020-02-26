let sourceLanguage = ""
let targetLanguage = ""
document.addEventListener('DOMContentLoaded', function () {
    let TransButton = document.getElementById("TranslateButton")
    TransButton.addEventListener('click',onTranslateClick,false)

    
     //dev test 
    //dev1 test only dev changes 




}, false)


function onTranslateClick() {
    
    
    var inputValue = document.getElementById("UserTransInput").value
    //alert(inputValue)
    let outDiv = document.getElementById("odiv")
    let newP = "<p>" + inputValue + "</p>" +"\n"+"Source: " + sourceLanguage
    outDiv.innerHTML = newP


}







