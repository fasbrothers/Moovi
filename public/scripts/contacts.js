// Validation form
// grab btnSubmit id by DOM
const btnSubmit = document.getElementById('btnSubmit');

//  this event is for poping up message, when the button is clicked 
btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

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