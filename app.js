let currentUser = {};

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Update the current user data
    currentUser.username = username;
    currentUser.email = email;
    
    // Display the current user data in the console
    console.clear();
    console.log('Current User:', currentUser);
    
    // Clear the form fields
    document.getElementById('userForm').reset();
});
