var re = "ERROR!"
function YandexRequest(srcL,trgtL,texts) {
    
    const request = new XMLHttpRequest()
    var url = ""


    const base = "https://translate.yandex.net/api/v1.5/tr.json/translate"
    const APIKEY = 'trnsl.1.1.20200226T195431Z.1cd979c15441b1cc.c821796bffa7156971ea828237a0102d64cb5235' //fk it it's free 
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
        
      }                                          
      // Send request
      request.send();
}

function setPresets(srcll,trgt) {
    var sourceLanIn = document.getElementById("SourceLanguage")
    sourceLanIn.value = srcll

    var targetLanIN = document.getElementById("TargetLanguage")
    targetLanIN.value = trgt
}
function delPresets(params) {
    localStorage.removeItem("sLan")
    localStorage.removeItem("tLan")

    document.getElementById("SourceLanguage").value  = ""
    document.getElementById("TargetLanguage").value = ""
}

//changes local storage values (on change)
function changesLanPS() {
    localStorage.setItem("sLan",document.getElementById("SourceLanguage").value)
}
function changetLanPS() {
    localStorage.setItem("tLan",document.getElementById("TargetLanguage").value)
}

document.addEventListener('DOMContentLoaded', function () {
    
    
    let TransButton = document.getElementById("TranslateButton")
    let RevButton = document.getElementById("reversePresets")
    RevButton.addEventListener('click',reversePresetsFunc,false)
    TransButton.addEventListener('click',onTranslateClick,false)


    let sLanIn = document.getElementById("SourceLanguage")
    let TLanIn = document.getElementById("TargetLanguage")
    sLanIn.addEventListener('change',changesLanPS,false)
    TLanIn.addEventListener('change',changetLanPS,false)   //how can I acess the value change

    document.getElementById("DelPresetsButton").addEventListener('click',delPresets,false);
    document.getElementById("clipboardButton").addEventListener('click',onClipboardClick,false);
    document.getElementById("getLanCodesButton").addEventListener('click',getLanCodes,false)

    document.getElementById("ClearButton").addEventListener('click',() => {
        document.getElementById("UserTransInput").value = ""
    })
    //sets presets if there are none yet, else accesses presets
    if (localStorage.getItem("sLan") === null) {
        //alert("we set presets")  //comment out
        setPresets("en","de")
        localStorage.setItem("sLan","en")
        localStorage.setItem("tLan","de")
    }
    else{
        setPresets(localStorage.getItem("sLan"), localStorage.getItem("tLan"))
        //alert("old presets")  //comment out 
    }

}, false)

function reversePresetsFunc() {
    var sourceLanIn = document.getElementById("SourceLanguage")
    var currentSrc = sourceLanIn.value 
    

    var targetLanIN = document.getElementById("TargetLanguage")
    var currentTrgt = targetLanIN.value 

    sourceLanIn.value = currentTrgt
    targetLanIN.value = currentSrc

    localStorage.setItem("sLan",currentTrgt)
    localStorage.setItem("tLan",currentSrc)
   

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

function onClipboardClick(){
   /* navigator.clipboard.readText().then(
        clipText =>{
        alert("got clip text"); 
        document.getElementById("UserTransInput").value = clipText});   //doenst get the promise ..
                                                                        // maybe with context menu 
                                            
      */
     
      document.getElementById("UserTransInput").value = localStorage.getItem("selText")
} 

function getLanCodes() {
    open("https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes")
}




