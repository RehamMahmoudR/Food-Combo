
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const emailValue = emailInput.value.trim();
      if (!isValidEmail(emailValue)) {
          emailError.textContent = 'Please enter a valid email address.';
          emailInput.focus();
          return false;
      } else {
          emailError.textContent = ''; 
      }
      
      
      const passwordValue = passwordInput.value.trim();
      if (passwordValue.length < 6) {
          passwordError.textContent = 'Password must be at least 6 characters long.';
          passwordInput.focus();
          return false;
      } else {
          passwordError.textContent = ''; 
      }
    
      this.submit();
  });

  function isValidEmail(email) {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
document.getElementById('signup-form').addEventListener('submit', function(event) {
  var password = document.getElementById('password').value;
  var confirm_password = document.getElementById('confirm_password').value;
  var passwordError = document.getElementById('password-error');
  
  if (password !== confirm_password) {
    passwordError.textContent = "Passwords do not match";
    event.preventDefault();
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    event.preventDefault();
  } else {
    passwordError.textContent = "";
  }
});

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());