async function translateText() {

let text =
document.getElementById(
"inputText"
).value;

if(!text){

alert("Enter some text");

return;

}

let source =
document.getElementById(
"source"
).value;

let target =
document.getElementById(
"target"
).value;

let response =
await fetch(
"/translate",
{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify({
text,
source,
target
})

}
);

let data =
await response.json();

document.getElementById(
"output"
).innerText =
data.translation;

}