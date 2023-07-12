document.getElementById('btn-submit').addEventListener('click', function(event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const em = "student@gmail.com";
    const pas = "password123";
    if (email.value.toLowerCase() === em && password.value === pas) {
        window.location.href = 'bank.html';
    }
    else {
        alert("Wrong username or password")
    }

    console.log(email.value);
    console.log(password.value);
})