const form = document.querySelector(".login-form");
let data1 = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert("Всі поля повинні бути заповнені");
    } else {
        data1.email = email.value, data1.password = password.value;
        console.log(data1);
        event.currentTarget.reset();
    }
});