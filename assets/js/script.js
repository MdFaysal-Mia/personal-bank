// /* Login Button Event Handler */ 
// const loginButton = document.getElementById("login-btn");
// loginButton.addEventListener("click", function(){
//     const emailField = document.getElementById("user-email");
    // const userEmail = emailField.value;
//     const passwordField = document.getElementById("user-password");
    // const userPassword = passwordField.value;
//     // console.log("Email",userEmail,"Password",userPassword);
//     if(userEmail === "" && userPassword === "") {
//         alert("Please get your email and password");
//     }
//     else {
//         const loginSection = document.getElementById("login-section");
//         loginSection.style.display = "none";
//         const transactionSection = document.getElementById("transaction-section");
//         transactionSection.style.display = "block";
//     }
// });

/* Deposit Button Event Handler */ 

document.getElementById("deposit-btn").addEventListener("click", function(){

    const depositInput = document.getElementById("deposit-money");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    console.log("Deposit Money",newDepositAmount);

    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    console.log("Deposit Total",previousDepositText);
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    console.log("Total Deposit",depositTotal.innerText);
    
    // Clear Deposit input field
    depositInput.value = '';
})

