/* Login Button Event Handler */ 
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function(){
    const userEmail = document.getElementById("user-email").value;
    const userPassword = document.getElementById("user-password").value;
    // console.log("Email",userEmail,"Password",userPassword);
    if(userEmail === "" && userPassword === "") {
        alert("Please get your email and password");
    }
    else {
        const loginSection = document.getElementById("login-section");
        loginSection.style.display = "none";
        const transactionSection = document.getElementById("transaction-section");
        transactionSection.style.display = "block";
    }
});

