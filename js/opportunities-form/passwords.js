export default function () {
  const firstPasswordBox = document.querySelector('#password-box');
  const secondPasswordBox = document.querySelector('#second-password-box');
  const firstInput = firstPasswordBox.querySelector('input');
  const secondInput = secondPasswordBox.querySelector('input');
  const error1 = firstPasswordBox.querySelector('.fieldlabel-error');
  const error2 = secondPasswordBox.querySelector('.fieldlabel-error');

  firstInput.addEventListener('input', () => checkPasswords({
    password1: firstInput.value,
    password2: secondInput.value,
    error1, error2
  }));
  secondInput.addEventListener('input', () => checkPasswords({
    password1: firstInput.value,
    password2: secondInput.value,
    error1, error2
  }));

  initVisibilityToggler({
    passwordBox: firstPasswordBox
  });
  initVisibilityToggler({
    passwordBox: secondPasswordBox
  });
}

function checkPasswords({
  password1,
  error1,
  password2,
  error2
}) {
  // Validates, then shows the error message or success if there is no error.
  const e1 = validatePassword(password1);
  error1.innerHTML = `${e1 || '✅'}<br>`;
  error2.innerHTML = `${!passwordsAreEqual(password1, password2) ? '⚠️ Não é igual' : '✅'}<br>`;
}

// This validator is separate from the validators object
// because it only applies to the last input
function passwordsAreEqual(firstPassword, secondPassword) {
  return secondPassword && firstPassword === secondPassword;
}

const validators = {
  isCorrectSize: {
    validate: (password) => password.length >= 6 && password.length <= 12,
    error: '⚠️ A senha deve conter mais de 6 dígitos'
  },
  hasUpperCaseLetters: {
    validate: (password) => /[A-Z]+/.test(password),
    error: '⚠️ A senha deve conter letras maiúsculas'
  },
  hasLowerCaseLetters: {
    validate: (password) => /[a-z]+/.test(password),
    error: '⚠️ A senha deve conter letras minúsculas'
  },
  hasNumbers: {
    validate: (password) => /[0-9]+/.test(password),
    error: '⚠️ A senha deve conter números'
  },
  hasSpecialChars: {
    validate: (password) => /[^a-zA-Z\d\s:]+/.test(password),
    error: '⚠️ A senha deve conter caracteres especiais'
  },
}

function validatePassword(password) {
  const validatorArray = Object.values(validators);
  // Applies all validators returning either an empty string or the first available error message.
  return validatorArray.reduce((e, v) => e || (v.validate(password) ? '' : v.error), '');
}

function initVisibilityToggler({
  passwordBox
}) {
  const passwordInput = passwordBox.querySelector("input");
  const showHideBtn = passwordBox.querySelector(".inputfield-icon");
  showHideBtn.addEventListener('click', () => {
    if (passwordInput.type == "password") {
      passwordInput.type = "text";
      showHideBtn.classList.add("hide-pass");
    } else {
      passwordInput.type = "password";
      showHideBtn.classList.remove("hide-pass");
    }
  })
}