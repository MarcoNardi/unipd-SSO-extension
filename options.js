chrome.storage.sync.get("mail", function (result) {
    console.log('Value currently is ' + result);
    console.log(result.mail);
    var mail = result.mail;
    if (mail == "mail=@studenti.unipd.it") {

        document.getElementById("studenti").checked = true;
    } else {
        document.getElementById("unipd").checked = true;
    }
});

var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("change", function (event) {
    var data = new FormData(form);
    var output = "";
    console.log(data);

    for (const entry of data) {
        output = output + entry[0] + "=" + entry[1] ;
    };
    chrome.storage.sync.set({mail: output}, function(){
        console.log("mail set to "+ output);
    });
    log.innerText = output;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log("sending message");
        chrome.tabs.sendMessage(tabs[0].id, output);
      });
    event.preventDefault();
}, false);