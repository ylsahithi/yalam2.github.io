let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let submit = document.querySelector("#submit");
  let name = document.querySelector("#Name");
  let Email = document.querySelector("#Email");
  let Date = document.querySelector("#Message");
  if (name.value == "") {
    alert("You must enter some name to submit this form");
    return;
  }
  if (Email.value == "") {
    alert("You must enter some email to submit this form");
    return;
  }
  if (Message.value == "") {
    alert("You must enter message to submit this form");
    return;
  }
  console.log("*******Form Submission*******");
  console.log("Name:", name.value);
  console.log("Email:", Email.value);
  console.log("******Thank you !!!*******");
  document.querySelector(".form > h1").innerHTML = "Thank you!";
  submit.innerHTML = "Sent!";
  
}