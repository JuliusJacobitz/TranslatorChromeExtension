let sourceLanguage = ""
let targetLanguage = ""
document.addEventListener('DOMContentLoaded', function () {
    let TransButton = document.getElementById("TranslateButton")
    TransButton.addEventListener('click',onTranslateClick,false)

    
    




}, false)


function onTranslateClick() {
    
    
    var inputValue = document.getElementById("UserTransInput").value
    //alert(inputValue)
    let outDiv = document.getElementById("odiv")
    let sATDiv = document.getElementById("sourceAndTarget")
    let newP = "<p>" + inputValue + "</p>" +"\n" 
    outDiv.innerHTML = newP
    sATDiv.innerHTML =   "\n" + "<p>" + "Source: "+ sourceLanguage +"<br>"+ "Target: "+ targetLanguage + "</p>"

}







