
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



// filtering images

filterSelection("all") // execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

// show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

// hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Accordion

// grab question class by DOM
const questions = document.querySelectorAll(".question");


questions.forEach(question => {
    const btnn = question.querySelector(".question-btn");
    btnn.addEventListener("click", () => {
        questions.forEach(item => {
            /* Toggle between hiding and showing the show-text class */
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text");
    })
})

// Validation form

// grab btnSubmit id by DOM
const btnSubmit = document.getElementById('btnSubmit');

//  this event is for poping up message, when the button is clicked 
btnSubmit.addEventListener("click", e => {
    e.preventDefault();

    var firstName = document.getElementById("fName").value;
    var surName = document.getElementById("sName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (firstName === "" || surName === "" || email === "" || phone === "" || message === "") {
        alert("Please, fill all the required fields")
    } else {
        confirm("You have successfully send a message!")
    }

})
