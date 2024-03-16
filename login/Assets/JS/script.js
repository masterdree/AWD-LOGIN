document.getElementById('signupButton').addEventListener('click', function() {
    var inputs = document.querySelectorAll('.registration form input[type="text"], .registration form input[type="password"]');
    var allFilled = true;
    var userData = {};
    inputs.forEach(function(input) {
      if (input.value === '') {
        allFilled = false;
        return;
      }
      userData[input.placeholder] = input.value;
    });
  
    if (allFilled) {
      alert('Welcome! You have successfully signed up. Here are your details:\n' +
            'First Name: ' + userData['Enter your firstname'] + '\n' +
            'Last Name: ' + userData['Enter your lastname'] + '\n' +
            'Email: ' + userData['Enter your email']);
    } else {
      alert('Please fill in all fields.');
    }
  });
  