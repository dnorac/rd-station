import initPhoneInput from './phone-input.js';
import initPasswords from './passwords.js';
import initWebsiteRadioButtons from './site.js';

export default function () {
  const API_URL = "https://rdstation-signup-psel.herokuapp.com";

  const form = document.querySelector('#opportunities-form');
  const phoneInput = form.querySelector("#tel-input");

  form.addEventListener("submit", (e) => showFeedback(e, form));
  initPhoneInput(phoneInput);
  initPasswords();
  initWebsiteRadioButtons();

  function showFeedback(e, form) {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => res.json())
      .then(() => {
        form.innerHTML = `
    <article> 
      <p> 
      Obrigado! Entraremos em contato. 😊
      </p>
    </article> 
  `;
      })
      .catch((error) => {
        form.innerHTML = `
        <article> 
          <p> 
          Não foi possível enviar o formulário, tente novamente mais tarde.
          </p>
        </article> 
      `;
      });
  }
}

