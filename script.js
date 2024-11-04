
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const main_btn = document.getElementById("main-btn");
const api_url = "https://api.quotable.io/random";
async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
};
getQuote(api_url);
main_btn.addEventListener("click", function () {
    getQuote(api_url);
});

function tweet() {
    window.open(`https://twitter.com/intent/tweet?text="${quote.innerHTML} ---- by  ${author.innerHTML}`);
};
