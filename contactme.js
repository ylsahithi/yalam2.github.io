function validate_fields(){
    var name = document.getElementById("Name").value;
    var email = document.forms("email").value;
    var Message = document.forms("message").value;
    // var error = document.getElementById("Error");
    // error.style.padding = "10px";
    var text;
    if(name == ""){
        text = "Enter valid name";
        return false;
    }
    if(email.indexOf("@") == -1){
        text = "Enter valid email";
        return false;
    }
    if(Message.length < 1){
        text = "Enter valid message";
        return false;
    }
    document.getElementById("contact").innerHTML = text;
    // alert("Form submitted successfully!!");
    // return true;


}