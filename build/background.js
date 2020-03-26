
console.log('this is background data////////')
chrome.tabs.onActiveChanged.addListener((data)=>{
     chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(typeof(url)+'......this is the current url')
    
    fetch('http://localhost:3000/*****/****/data',{
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body:{'data':url}
    }).then(function(response) {
        return response.json();
    }).catch((error)=>{
        console.log('error......'+error)
    })
    
}) 
    console.log(data+'...........data')
}) 