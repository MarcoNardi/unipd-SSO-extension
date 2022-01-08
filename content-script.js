chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        changeMail(request);
        sendResponse({
            farewell: "goodbye"
        });
        return true;
    }
);
//select radio button based on email used
function changeMail(mail) {
    if (mail == "mail=@studenti.unipd.it") {

        document.getElementById("radio2").checked = true;
    } else {
        document.getElementById("radio1").checked = true;
    }
}

//get saved email setting and apply it
chrome.storage.sync.get("mail", function (result) {
    console.log('Value currently is ' + result);
    console.log(result.mail);
    var mail = result.mail;
    changeMail(mail);
});

/*
//automatically update page if settings are changed
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.mail?.newValue) {
        console.log(changes.mail.newValue);
        var mail=changes.mail.newValue
        changeMail(mail);
    }
});
*/


/*
        console.log(mail);
if (mail == "mail=@studenti.unipd.it") {

    document.getElementById("radio2").checked = true;
} else {
    document.getElementById("radio1").checked = true;
}*/