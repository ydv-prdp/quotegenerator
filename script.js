const api = `https://api.quotable.io/quotes/random`;

let thought = document.getElementById("thought");
let authName = document.getElementById("authName");

async function newQuote(){
    let raw = await fetch(api);
    let data = await raw.json();
    thought.textContent = `"${data[0].content}"`;
    authName.textContent = data[0].author;
}

newQuote();

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + thought.innerHTML + "------ by", "Tweet Window", "width=600, height=300");
}