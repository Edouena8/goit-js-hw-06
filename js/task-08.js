const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget;
    
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені');

    } else {
        const formData = {
            email,
            password,
        };

        console.log(formData);
    };

    formEl.reset();
};
