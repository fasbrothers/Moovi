// Auto Text
// text appears in #h1 
const autoText = "Welcome to Moovi website"
let index = 0;

// the function is for slicing autoText element, then each slice of word appears one by one in #h1
function writeText() {
    document.getElementById("h1").innerText = autoText.slice(0, index);
    index++;

    if (index > autoText.length) index = 0;
}
// interval of each word is 0.2s 
setInterval(writeText, 200);