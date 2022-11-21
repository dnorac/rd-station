function telMask(telefone) {
  const ddd = telefone.slice(0, 2);
  const numero = telefone.slice(2);
  const beforeIf = numero.length >= 9 ? numero.slice(0, 5) : numero.slice(0, 4);
  const resto = -(numero.length - beforeIf.length);
  let afterIf = resto == 0 ? "" : numero.slice(resto);

  return `(${ddd}) ${beforeIf}-${afterIf}`;
}

function removeTelMask(telefonemask) {
  return telefonemask.replace(/\D/g, "");
}

export default function (element) {
  element.addEventListener("keyup", () => {
    element.value = telMask(removeTelMask(element.value));
  });
}