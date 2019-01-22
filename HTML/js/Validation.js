function registration(){
    var name = first.value;
    var surname = last.value;
    var mail = emailaddress.value;
    var login = userId.value;
    var password = pass.value;
    var password1 = confpassword.value;
    if(checkName(name)){
        if(letters(name)){
            if(checkName(surname)){
                if(letters(surname)){
                    if(mailAddress(mail)){
                        

                    } else{                        
                        document.getElementsByClassName("error")[2].innerHTML = "!!! Please enter correct email address";
                    }
                } else {            
                    document.getElementsByClassName("error")[1].innerHTML = "!!! Must have alphabet characters only";
                }
            } else {
                document.getElementsByClassName("error")[1].innerHTML = "!!! Please enter your last name";
            }            
        } else {            
            document.getElementsByClassName("error")[0].innerHTML = "!!! Must have alphabet characters only";
        }
    } else {        
        document.getElementsByClassName("error")[0].innerHTML = "!!! Please enter your first name";
    }
}

function checkName(name){
    if(name.length == 0){
        return false;
     }  else {
        return true;
    }
}

function letters(text){
    var letter =  /^[A-Za-z]+$/;
    if(text.match(letter))
    {
        return true;
    } else {
        return false;
    }
}

function mailAddress(text){
    var emailaddres = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(text.match(emailaddres))
    {
        return true;
    } else {
        return false;
    }

}

