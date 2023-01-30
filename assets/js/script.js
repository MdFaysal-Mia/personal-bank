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

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // Clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(updateTotalField, amount) {
    const totalElement = document.getElementById(updateTotalField);
    const totalText = totalElement.innerText;
    const previousTotalAmount = parseFloat(totalText);
    totalElement.innerText = previousTotalAmount + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }

}

/* Deposit Button Event Handler */

document.getElementById("deposit-btn").addEventListener("click", function () {
    const newDepositAmount = getInputValue("deposit-money");
    if (newDepositAmount > 0) {
        updateTotalField("deposit-total", newDepositAmount);
        // update account balance
        updateBalance(newDepositAmount, true);
    }

})

/*  Withdraw Button Event Handler */

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-money");
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField("withdraw-total", newWithdrawAmount);
        // update total balance
        updateBalance(newWithdrawAmount, false);
    }
});
