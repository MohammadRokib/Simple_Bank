document.getElementById('wd-btn').addEventListener('click', function(event) {
    const withdrawBalance = getInputTextById('wdBalance');
    const withdrawAmount = getInputValueById('wdAmount');
    const balance = getInputTextById('balance');

    if (isNaN(withdrawAmount)) {
        alert("Invalid Amount");
        return;
    }

    if (withdrawAmount > balance) {
        alert("Insufficient Balance");
        return;
    }

    const newWithdrawBalance = withdrawBalance + withdrawAmount;
    const newBalance = balance - withdrawAmount;

    setElementTextById('wdBalance', newWithdrawBalance);
    setElementTextById('balance', newBalance);
});