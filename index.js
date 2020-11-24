// filtering images
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

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


const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    const btnn = question.querySelector(".question-btn");
    btnn.addEventListener("click", () => {
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text");
    })
})

// Validation form

const btnSubmit = document.getElementById('btnSubmit');


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
