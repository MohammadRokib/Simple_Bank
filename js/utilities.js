function getInputValueById(inputID) {
    const inputField = document.getElementById(inputID);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getInputTextById(inputID) {
    const inputValue = parseFloat(document.getElementById(inputID).innerText);
    return inputValue;
}

function setElementTextById(elementId, elementValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = elementValue;
    return;
}