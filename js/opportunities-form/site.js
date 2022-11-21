export default function () {
  const siteInput = document.querySelector('#site');
  const radios = document.querySelectorAll('input[name="website"]');
  const hasWebsiteRadio = Array.from(radios).find(r => r.value === 'has-website');
  const noWebsiteRadio = Array.from(radios).find(r => r.value === 'no-website');

  siteInput.addEventListener('input', handleInput);
  hasWebsiteRadio.addEventListener('change', requireWebsite);
  noWebsiteRadio.addEventListener('change', () => { clearSiteInput(); requireWebsite() });

  function handleInput() {
    if (siteInput.value) {
      hasWebsiteRadio.checked = true;
      noWebsiteRadio.checked = false;
      siteInput.required = true;
    } else {
      noWebsiteRadio.checked = true;
      hasWebsiteRadio.checked = false;
      siteInput.required = false;
    }
  }

  function requireWebsite() {
    if (hasWebsiteRadio.checked) {
      siteInput.setAttribute('required', 'required')
    } else {
      siteInput.removeAttribute('required')
    }
  }

  function clearSiteInput() {
    siteInput.value = '';
  }
}