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

    //reads json and checks if 
    regVerification();
    
    //username is not in use 
    alert('Register successful! Please sign-in.');
    window.location.assign("sign-in.html");

    console.log(username, password);

    
    //the password verfication is not needed
});


//create new function for read and write 
function regVerification(){
   fetch('users.json')
   .then(response => response.json())
   .then(data => console.log(data))

   console.log(data.ID)


}

