document.getElementById("register-form").addEventListener("submit", function(event) {
    console.log("form submitted")
    event.preventDefault(); // Prevent the default form submission

    
    // Retrieve the values entered by the user
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    //check if fields are empty
    if (username.trim() === '' || password.trim() === '') {
        alert('Missing fields please do not leave empty.');
        return;
    }
    
    //read json and check if email has been in use
    alert('Register successful!');
    console.log(username, password)

    
    //the password verfication is not needed
});
