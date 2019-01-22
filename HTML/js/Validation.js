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
                        if(passValidation(password)){
                            if(password == password1){
                                var data = {};
                                data.name = name;
                                data.lastName  = surname;
                                data.email  = mail;
                                data.login  = login;
                                data.password  = password;
                                data.password1  = password1;
                                console.log(data)
                                fetch('http://rest.learncode.academy/api/learncode/friends', {
                                    headers: { "Content-Type": "application/json; charset=utf-8" },
                                    method: 'POST',
                                    body: JSON.stringify({data
                                    })
                                })
                                alert("You have been successfully registered");

                            } else{
                                document.getElementsByClassName("error")[5].innerHTML = "!!! The password and confirmation password do not match";
                            }
                        } else{
                            document.getElementsByClassName("error")[4].innerHTML = "!!! Password must be between 6 to 8 digit and contain at least 1 lowercase and 1 uppercase alphabetic characters and 1 number";
                        } 
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
function passValidation(text){
    pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,8})/;
    if(text.match(pass))
    {
        return true;
    } else {
        return false;
    }

}

