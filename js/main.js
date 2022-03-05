'use strict';  //We will write strict javascript, helps the engine to be faster.
/*
ПРИМЕР РАБОТЫ С preventDefault()
*/
const firstname = document.querySelector("#firstnm");
const lastname = document.querySelector("#lastnm");
const phonenumber = document.querySelector("#phonenumber");
const password = document.querySelector("#password");
const postalcode = document.querySelector("#postalcode");
const email = document.querySelector("#email");
/*const submitbutton = document.querySelector("#submitbutton");*/

function checkForm(form) {
  // Check Valid Name
    let errors=[];

      if(!firstname.value) {
      errors.push("Error: Enter first name \n");
      
  }
  // Check Valid Surname
      if(!lastname.value) {
      errors.push("Error: Enter last name \n");
      
  }
  // Check Valid Email
  let email_input=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (!email_input.test(email.value)){
      errors.push("Error: Email should have '@' sign \n");
      
    }
    // Check Valid Phone Number
    let tel_input=/^(\(?(0|\+375)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/;
    if (!tel_input.test(phonenumber.value)){
      errors.push("Error: Phone number should contain country code eg.+375XXXXXXXXX \n");
      
    }

    // Check Valid PostCode
        
    let postalcode_input=/^[0-9]{6}?$/;
      if (postalcode.value != '' && !postalcode_input.test(postalcode.value)){
      errors.push("Error: Postcode should be 6 digit numbers \n");
      
    }
    // Check Valid Password
    if(!password.value) {
      errors.push("Error: Enter password \n");
      
   }

    if(errors.length>0){
      let msg="ERRORS:\n";
      for(let i=0; i<errors.length; i++){
        msg+=errors[i];
        function cancel(event) {
        event.preventDefault();
      }

      document.getElementById('submitbutton').addEventListener(
        'click', cancel, false
      );
      }
      
      alert(msg);
    }

  return true;
}