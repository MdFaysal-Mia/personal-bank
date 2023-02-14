/* ========================================
        Login Button Event Handler 
========================================= */
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    if (userEmail === "" && userPassword === "" ) {
        alert("Email and Password field must be filled out");
    }
    else {
        const loginSection = document.getElementById("login-section");
        loginSection.style.display = "none";
        const transactionSection = document.getElementById("transaction");
        transactionSection.style.display = "block";
    }
});
/* ========================================
        User Input Value Function  
========================================= */
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // Clear input field
    inputField.value = '';
    return amountValue;
}
/* ========================================
        Update Input Value Function  
========================================= */
function updateTotalField(updateTotalField, amount) {
    const totalElement = document.getElementById(updateTotalField);
    const totalText = totalElement.innerText;
    const previousTotalAmount = parseFloat(totalText);
    totalElement.innerText = previousTotalAmount + amount;
}
/* ========================================
        Current Balance Function  
========================================= */
function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
/* ========================================
        Update Balance Function  
========================================= */
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

/* ========================================
        Deposit Button Event Handler 
========================================= */

document.getElementById("deposit-btn").addEventListener("click", function () {
    const newDepositAmount = getInputValue("deposit-money");
    if (newDepositAmount > 0) {
        updateTotalField("deposit-total", newDepositAmount);
        // update account balance
        updateBalance(newDepositAmount, true);
    }
    else {
        alert("Please enter the Amount");
    }

})

/* ========================================
        Withdraw Button Event Handler 
========================================= */

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-money");
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField("withdraw-total", newWithdrawAmount);
        // update total balance
        updateBalance(newWithdrawAmount, false);
    }
    else {
        alert("Please enter the amount");
    }
});
