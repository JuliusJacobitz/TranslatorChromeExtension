document.addEventListener('DOMContentLoaded', function() { 
document.getElementById('BearCountButton').addEventListener('click',onclick,false)
function onclick() {

    chrome.tabs.query({currentWindow: true, active: true }, 
        (tabs) => {

            chrome.tabs.sendMessage(tabs[0].id,"hi",setCount)
        })
        
       
        function setCount(res){
            
            const div = document.createElement('div')
            
            div.textContent = `${res.count} bears `
            document.body.appendChild(div)
        }
    } 
}, false) 