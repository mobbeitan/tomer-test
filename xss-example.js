var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');

var unsafe_div = window.document.getElementById("vulnerable-div");
//The below is vulnerable to XSS
unsafe_div.innerHTML = "Hello " + name; 
//unsafe_div.innerText = "Hello " + name;

