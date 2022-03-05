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

     }
// Check Valid Surname
      if(lastname.value == '') {
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
    if(password.value== ' ') {
      errors.push("Error: Enter password \n");

   }

    if(errors.length>0){
      let msg="ERRORS:\n";
      for(let i=0; i<errors.length; i++){
        msg+=errors[i];
        function StopEv(eve) {
        eve.preventDefault();
      }

      document.getElementById('submitbutton').addEventListener(
        'click', StopEv, false
      );
      }

      alert(msg);
    }

  return true;

     
}