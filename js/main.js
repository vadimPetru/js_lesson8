'use strict';  //We will write strict javascript, helps the engine to be faster.


let firstname = document.querySelector("#firstnm");
let lastname = document.querySelector("#lastnm");
let phonenumber = document.querySelector("#phonenumber");
let password = document.querySelector("#password");
let postalcode = document.querySelector("#postalcode");
let email = document.querySelector("#email");
/*const submitbutton = document.querySelector("#submitbutton");*/

function checkForm(form) {

 
   // Check Valid Name
    let errors=[];
 
     if(firstname.value == '') {
      errors.push("Error: Enter first name \n");
      alert("Enter your name")
       return false;
     }
// Check Valid Surname
      if(lastname.value == '') {
      errors.push("Error: Enter last name \n");
      alert("Enter your Surname")
         return false;

}


// Check Valid Email
  if (email.value == '') {
    errors.push("Error: Enter email \n");
    alert("Enter your Email")
    return false;
  }
 else {
          let email_input=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (!email_input.test(email.value)){
      errors.push("Error: Email should have '@' sign \n");
      alert("Email should have '@' sign and (gmail.ru) ")
      return false;
    }
 

    }


// Check Valid Phone Number
if (phonenumber.value == '') {
    errors.push("Error: Enter phone number \n");
    alert ("Error: Enter phone number")
    return false;
}
else {


    let tel_input=/^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!tel_input.test(phonenumber.value)){
      errors.push("Error: Phone number should contain country code eg.+375XXXXXXXXX \n");
      alert("Phone number should contain country code eg.+375 (XX) XXXXXXX")
       return false;
    }
  }

// Check Valid PostCode

    let postalcode_input=/^[0-9]{6}?$/;
      if (postalcode.value != '' && !postalcode_input.test(postalcode.value)){
      errors.push("Error: Postcode should be 6 digit numbers \n");
      alert("Postcode should be 6 digit numbers")
       return false;

    }
    // Check Valid Password
    if(password.value== '') {
      errors.push("Error: Enter password \n");
      alert('Enter password');
      return false;
   }
  
  

    if(errors.length>0){
      let msg="ERRORS:\n";
      for(let i=0; i<errors.length; i++){
        msg+=errors[i];
        return false
       
      }

      alert(msg);
    }

  return true;

     
}