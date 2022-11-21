export default function ({
  element, onClick
}) {
  element.addEventListener('click', onClick);
  window.addEventListener('click', onClick);
}