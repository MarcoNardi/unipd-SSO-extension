var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("change", function (event) {
    var data = new FormData(form);
    var output = "";
    console.log(data);

    for (const entry of data) {
        output = output + entry[0] + "=" + entry[1] + "\r";
    };
    log.innerText = output;
    event.preventDefault();
}, false);