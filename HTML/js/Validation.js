function registration(){
    var name = first.value;
    var surname = last.value;
    var mail = emailaddress.value;
    var login = userId.value;
    var password = pass.value;
    var password1 = confpassword.value;
    if(checkName(name) && checkName(surname) ){
        //alert("ok")
    } 

    console.log(last.value)
}

function checkName(name){
    if(name.length == 0){
        document.getElementsByClassName("error")[0].innerHTML = "!!! Please enter your first name";
        return false;
     } else if(letters(name)){

     } else {
        return true;
    }
}

function letters(text){
    var letter =  /^[A-Za-z]+$/;
    if(text.match(letter))
    {
        return true;
    } else {
        document.getElementsByClassName("error")[0].innerHTML = "!!! Must have alphabet characters only";
        text.focus();
    return false;
    }
}
