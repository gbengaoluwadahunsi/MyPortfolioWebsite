

document.addEventListener('DOMContentLoaded', function() {

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const icon = document.querySelector('i');



menuToggle.addEventListener('click', () => {
menu.classList.toggle('active');
// Toggle between the bars and X icon
if (icon.classList.contains('fa-bars')) {
  icon.classList.remove('fa-bars');
  icon.classList.add('fa-times');
} else {
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
 
}

  

});

  
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click',  submitForm)
   
    
    function submitForm(event) {
      event.preventDefault(); // Prevent the default form submission
     

      // Get the values of name, email, and message inputs
      const  name = document.querySelector("input[type='text']").value;
      const  email = document.querySelector("input[type='email']").value;
      const  message = document.querySelector("#message").value;

      // Check if any of the fields are empty
      if (name === "" || email === "" || message === "") {
        // Display an alert if any of the fields are empty
        alert("Please fill in the required information.");
      } else {
        // Display a thank you message if all fields are filled
        const nameInput = document.querySelector('#contact-form input[name="name"]');
            const firstName = nameInput.value.split(' ')[0];
        alert(`Thank you for reaching out to me, ${firstName}!. I will get back to you as soon as possible.`);
        // Reset the form
        document.getElementById("contact-form").reset();
      }
    };

      document.addEventListener('click', function(event) {
        let targetElement = event.target;
    
        if (targetElement !== menuToggle && !menu.contains(targetElement)) {
          menu.classList.remove('active');
          menuToggle.classList.remove('fa-times');
          menuToggle.classList.add('fa-bars');
          
          
        }
      });
    
    });



    





    
 

