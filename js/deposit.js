document.getElementById('dp-btn').addEventListener('click', function() {
    const depositBalance = getInputTextById('dpBalance');
    const depositAmount = getInputValueById('dpAmount');
    const balance = getInputTextById('balance');

    if (isNaN(depositAmount)) {
        alert("Invalid amount");
        return;
    }

    const newDepositBalance = depositBalance + depositAmount;
    const newBalance = balance + depositAmount;

    setElementTextById('dpBalance', newDepositBalance);
    setElementTextById('balance', newBalance);
});