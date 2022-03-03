'use strict';  //We will write strict javascript, helps the engine to be faster.

const firstname= document.querySelector("#firstnm");
const lastname= document.querySelector("#lastnm");
const phonenumber=document.querySelector("#phonenumber");
const password=document.querySelector("#passwrd");
const postalcode = document.querySelector("#postalcode");
const email = document.querySelector("#email");


function checkForm(form) {

    let errors=[];

      if(firstname.value=='') {
      errors.push("Error: Enter first name \n");
  }

      if(lastname.value=='') {
      errors.push("Error: Enter last name \n");
  }

    let postalcode_input=/^[0-9]{6}?$/;
      if (postalcode!=postalcode_input){
      errors.push("Error: Postcode should be 6 digit numbers \n");
    }

    let email_input=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
      if (email!=email_input){
      errors.push("Error: Email should have '@' sign \n");
    }

    let tel_input=/^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (phonenumber!=tel_input){
      errors.push("Error: Phone number should contain country code eg.+358 1234556 \n");
    }

    if(password.value=='') {
      errors.push("Error: Enter password \n");
   }

    if(errors.length>0){
      let msg="ERRORS:\n";
      for(let i=0; i<errors.length; i++){
        msg+=errors[i];
      }
      alert(msg);
    }

  return true;
}
