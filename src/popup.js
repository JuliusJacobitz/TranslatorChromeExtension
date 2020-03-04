

var re = "ERROR!"
function YandexRequest(srcL,trgtL,texts) {
    
    const request = new XMLHttpRequest()
    var url = ""


    const base = "https://translate.yandex.net/api/v1.5/tr.json/translate"
    const APIKEY = 'trnsl.1.1.20200226T195431Z.1cd979c15441b1cc.c821796bffa7156971ea828237a0102d64cb5235'
    var inText = encodeURI(texts)
    var lan = srcL+"-"+trgtL               //en-ru


    url = base+"?key="+APIKEY+"&text="+inText+"&lang="+lan

    
    request.open('GET',url,true)
    request.onloadend = function() {
        
        let res = this.response
        let Jres = JSON.parse(res)
        re = Jres.text[0]
        

        let outDiv = document.getElementById("odiv")
        
        let newP = "<p>" + re + "</p>" +"\n" 
    outDiv.innerHTML = newP

        
        
      }                                             //problem: den response als retrun zurück geben 
      
      // Send request
      request.send();
      


}

function setPresets(srcll,trgt) {
    var sourceLanIn = document.getElementById("SourceLanguage")
    sourceLanIn.value = srcll

    var targetLanIN = document.getElementById("TargetLanguage")
    targetLanIN.value = trgt
}

document.addEventListener('DOMContentLoaded', function () {
    let TransButton = document.getElementById("TranslateButton")
    let RevButton = document.getElementById("reversePresets")
    RevButton.addEventListener('click',reversePresetsFunc,false)
    TransButton.addEventListener('click',onTranslateClick,false)
    setPresets("en","de") //later get srcll and trgt from a log file, which stores the previously used settings
   
    
    
    
   



}, false)

function reversePresetsFunc() {
    var sourceLanIn = document.getElementById("SourceLanguage")
    var currentSrc = sourceLanIn.value 
    

    var targetLanIN = document.getElementById("TargetLanguage")
    var currentTrgt = targetLanIN.value 

    sourceLanIn.value = currentTrgt
    targetLanIN.value = currentSrc

}
function onTranslateClick() {
    
    
    var inputValue = document.getElementById("UserTransInput").value
    //alert(inputValue)
   
    var sourceLanguages = document.getElementById("SourceLanguage").value
    var targetLanguages = document.getElementById("TargetLanguage").value
    YandexRequest(sourceLanguages,targetLanguages,inputValue)

    
    let sATDiv = document.getElementById("sourceAndTarget")
    sATDiv.innerHTML =   "\n" + "<p>" + "Source: "+ sourceLanguages +"<br>"+ "Target: "+ targetLanguages+ "</p>"
    


}






