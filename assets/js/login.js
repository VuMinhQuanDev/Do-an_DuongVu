const loginSelections = document.getElementById("login-selection");
const registerSelections = document.getElementById("register-selection");

const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");

const submit = document.querySelector(".form-submit");
const emailValue = document.getElementById("email-input");
const passwordValue = document.getElementById("password-input");
const errorEmail = document.querySelector(".errorMesEmail");
const errorPassword = document.querySelector(".errorMesPassword");
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g;

const login = async () => {
    const response = await fetch('http://localhost:3000/account')
    .then(res => res.json())
    return response
}

function checkEmail(value) {
  if (value === "") {
    return "Email không được để trống";
  }
  if (regEmail.test(value)) {
    return "";
  } else {
    return "Email không hợp lệ";
  }
}

function checkPassword(value) {
  if (value === "") {
    return "Mật khẩu không được để trống";
  }
  if (regPass.test(value)) {
    return "";
  } else {
    return "Mật khẩu chứa ít nhất 6 kí tự, bao gồm ít nhất 1 chữ cái và 1 chữ số";
  }
}

function checkValidate() {
    if(checkEmail(emailValue.value) === "" && checkPassword(passwordValue.value) === ""){

        emailValue.value = "";
        passwordValue.value = "";
        return true
    }else {
        return false
    }
}

function showMessage() {
    errorEmail.innerHTML = checkEmail(emailValue.value);
    errorPassword.innerHTML = checkPassword(passwordValue.value)
}

submit.onclick = (e) => {
  e.preventDefault();
  console.log(emailValue.value, passwordValue.value);
  checkValidate() ? login().then(data => data.map(item => {
    if(item.username === emailValue.value && item.password === passwordValue.value){
        alert("Dang nhap thanh cong")
    }else {
        alert("Sai tai khoan")
    }
  })) : (showMessage())
};
