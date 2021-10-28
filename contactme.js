function validate(){
    if(document.contactme.Name.value == "")
    {
        alert("Enter a valid name")
        document.contactme.Name.focus();
        return false;
    }
    if(document.contactme.Email.value == "")
    {
        alert("Enter a valid email")
        document.contactme.Email.focus();
        return false;
    }
    if(document.contactme.Message.value == "" || document.contactme.Message.length <= 5  )
    {
        alert("Enter a valid mesaage")
        document.contactme.Message.focus();
        return false;
    }
    return true;
}