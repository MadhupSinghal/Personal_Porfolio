var contbtn = document.getElementById("contactBtn");
var contform = document.getElementById("contactPopup");
var closeBtn = document.getElementById("close");

//Open the form with button
contbtn.onclick = function () {
  contform.style.display = "block";
  //contform.style.position = "static";
};

//Closing the form
closeBtn.onclick = function () {
  contform.style.display = "none";
};

//handle submit button

var response = document.getElementById("submitBtn");

contform.onsubmit = function (event) {
  event.preventDefault();
};

var formData = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  message: document.getElementById("message").value,
};

fetch("/submit", {
  method: "POST",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("success", data);
    alert("Your message has been sent!");
    contform.style.display = "none";
  })
  .catch((error) => {
    console.error("Error", error);
  });
