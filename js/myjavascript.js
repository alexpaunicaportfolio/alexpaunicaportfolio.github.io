function check() {
      var email1 = document.getElementById('email_addr');
      var email2 = document.getElementById('email_repeat');
 	 		if ( email1.value != email2.value) {
 	 			 alert("The email addresses do not match.");
         return false;
  		}
}
