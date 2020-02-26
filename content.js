// alert("maja's looking thiccc")
chrome.runtime.onMessage.addListener((request,sender,sendResponse) => { 

    const re = new RegExp('bear','gi')
    const matches = document.documentElement.innerHTML.match(re)
    let cm = {}
    if(matches == null){
        cm.count = 0 
        
    }
    else{
        cm.count = matches.length
    }
 
    console.log(cm)
    sendResponse(cm)

})
