//Login Validation

var UName = document.forms["SignIn"]["Username"]; 
var Pass = document.forms["SignIn"]["Password"]; 
 

var pass = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var uname_error = document.getElementById("username-error");
var pass_error = document.getElementById("password-error");
var invalid_pass= document.getElementById("password-error");

function validate(){ 
    if(UName.value == ""){
        UName.style.border = "1px solid red";
        Uname_error.textContent = "Username is Required";
        UName.focus();
        return true;
    }

    if(Pass.value == ""){
        Pass.style.border = "1px solid red";
        Pass_error.textContent = "Password is Required";
        Pass_error.focus();
        return true;
    }

    if(pass.test(pass.value) == false){
        pass.style.border = "1px solid red";
        pass.textContent = "Invalid email format";
        pass.focus();
        return false;
    }

   return alert("Success!");
  }
  
  //validates all textboxes
  document.getElementById("Login").onclick = function(){
    for( var i = 0, t = document.getElementsByName( "input" ), l = t.length; i < l; i++ )   {
        if( t[i].value && !/^\s+$/.test( t[i].value ) ) { 
           return true;
        }
        else{
            UName.style.border = "1px solid red";
            name_error.textContent = "Username is Required";

            Pass.style.border = "1px solid red";
            Pass_error.textContent = "Password is Required";
        }
    }

  }