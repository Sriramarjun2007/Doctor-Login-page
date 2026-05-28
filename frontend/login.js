const correcteemail = "srirmarjun2007@gmail.com";
const correctpass = "Sriramarjun";
const form=document.querySelector("form")
const emailInput = document.getElementById("emailtype");
const passInput = document.getElementById("passtype");
const errorText = document.getElementById("error-message");

form.addEventListener("submit", function (event)
{
    event.preventDefault();
    const useremail=document.getElementById('emailtype').value;
    const paslogin=document.getElementById('passtype').value;
    const errorText = document.getElementById("error-message");
    if(useremail===correcteemail && paslogin===correctpass){
        errorText.textContent = "";
        window.location.href = "dashboard.html";
    }
    else{
        errorText.textContent = "Invalid  email or password";
        errorText.style.color = "red";
        form.reset()
    }
});
emailInput.addEventListener("focus", function () {

    errorText.textContent = "";

});

passInput.addEventListener("focus", function () {

    errorText.textContent = "";

});