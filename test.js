var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var data = null;

var outpt 

function setOup(i){
outpt = i
console.log("output = " ,i)
}

function setURL(sourceLan, targetLan,UserIn){
    const basicS = "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?"
    const sourceS = "source="
    const targetS= "&target="
    const inputS = "&input="
    const spaceS= "%2520"
    const sourceL = sourceLan
    const targetL = targetLan

    var UserIn = UserIn
    
    var returnS = basicS+sourceS+sourceL+targetS+targetL+inputS+encodeURIComponent(UserIn)
    return returnS
    

}
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(this.responseText);
        var a = JSON.parse(this.responseText)
        //console.log(typeof(a),a.outputs[0].output)
        a =  a.outputs[0].output
        a = decodeURI(a)
        //console.log(a)
        setOup(a)

        
	}
});

xhr.open("GET", setURL("en","de","Tomorrow I want to go climbing"));
xhr.setRequestHeader("x-rapidapi-host", "systran-systran-platform-for-language-processing-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "eae58d1691msh80b861a0cfe79bbp1501c5jsna12867e424bb");

xhr.send(data);

