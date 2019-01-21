function registration(){
    var name = first.value;
    var surname = last.value;
    var mail = emailaddress.value;
    var login = userId.value;
    var password = pass.value;
    var password1 = confpassword.value;
    if(checkName(name)){
        alert("ok")
    } 

    console.log(last.value)
}

function checkName(name){
    if(name.length == 0){
        document.getElementsByClassName("error")[0].innerHTML = "!!! Please enter your first name";
        return false;
     } //else if(){

    // } 
    else {
        return true;
    }
}