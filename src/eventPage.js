var contextMenuItem = {
    "id": "translateText",
    "title": "TranslateText",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "translateText" && clickData.selectionText){
        // maybe more selection later 
        //get the text and put it in the input field
        var selectedText = clickData.selectionText
        localStorage.setItem("selText",selectedText)
    }   

})