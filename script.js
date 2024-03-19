document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); //prevent the default form submission

    
    // Retrieve the values entered by the user
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    //check if fields are empty
    if (username.trim() === '' || password.trim() === '') {
        alert('Missing fields please do not leave empty.');
        return;
    } 

    const fs = require('fs');
    //read json and check if username has been in use
    const data = fs.readFileSync('users.json');
    jsonData.users.push({
        username: username,
        password: password
    })
    //write user details into json file 
    const jsonData = JSON.parse(data);


    //username is not in use 
    alert('Register successful! Please sign-in.');
    window.location.assign("sign-in.html");
    console.log(username, password)

    
    //the password verfication is not needed
});
