const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = message;
};

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};

function checkEmail(input) {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regexp.test(input.value.trim())) {
        showSuccess(input);
    }else {
        showError(input, "Email is not invalid")
    }
};

function checkRequired(_inputArr) {
    _inputArr.forEach(function (input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
};

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
};

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

function checkPasswordsMatch(input1, input2) {
    if (!input1.value == input2.value) {
        showError(input2, "Passwords do not match")
    } else {
        elem.style.borderColor = "2ecc71"
    }
};

form.addEventListener("submit", function (e) {
        e.preventDefault();
        checkRequired([username, email, password, password2]);
        checkLength(username, 3, 20);
        checkLength(password, 6, 14);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
});

const elem = document.getElementById("password2")
elem.oninput = function () {
    if (!password.value === password2.value) {
        elem.style.borderColor = "red";
    } else {
        elem.style.borderColor = "2ecc71";
    }
};

////////////////////////////////////////////////////////////////////////////////

const usernameData = document.getElementById("username");
const emailData = document.getElementById("email");
const passwordData = document.getElementById("password");
const password2Data = document.getElementById("password2");
const removeBtn = document.getElementById("tests");

usernameData.addEventListener("click", () => {
    localStorage.setItem("uid", "123");
});
emailData.addEventListener("click", () => {
    localStorage.setItem("uid", "123");
});
passwordData.addEventListener("click", () => {
    localStorage.setItem("uid", "123");
});
password2Data.addEventListener("click", () => {
    localStorage.setItem("uid", "123");
});


removeBtn.addEventListener("click", () => {
    localStorage.clear();
});