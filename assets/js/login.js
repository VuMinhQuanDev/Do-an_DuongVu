const loginSelections = document.getElementById('login-selection');
const registerSelections = document.getElementById('register-selection');

const formLogin = document.querySelector('.form-login');
const formRegister = document.querySelector('.form-register');

loginSelections.onclick = () => {
    if(!formLogin.className.includes('active')) {
        loginSelections.classList.add('active')
        registerSelections.classList.remove('active')
        formLogin.classList.add('active')
        formRegister.classList.remove('active')
    }
}

registerSelections.onclick = () => {
    if(!formRegister.className.includes('active')) {
        loginSelections.classList.remove('active')
        registerSelections.classList.add('active')
        formRegister.classList.add('active')
        formLogin.classList.remove('active')
    }
}