function login() {
    const username = document.getElementById('user name value').value;


    if(username === "admin" && password === "password") {
        alert("login successfull");
    } else {
        alert("invalid username or password");
    }
}