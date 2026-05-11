const inputAge = document.getElementById("input-age");
const buttonSubmit = document.getElementById("button-submit");

buttonSubmit.onclick = function () {
  const age = Number(inputAge.value);

  const isCrianca = age > 0 && age < 12;
  const isAdolescente = age >= 12 && age < 18;
  const isAdulto = age >= 18 && age < 60;
  const isIdoso = age >= 60 && age <= 130;
  const isInvalido = age <= 0 || age > 130;

  isCrianca && alert("É criança");
  isAdolescente && alert("É adolescente");
  isAdulto && alert("É adulto");
  isIdoso && alert("É idoso");
  isInvalido && alert("Você ainda não nasceu ou é parente da Rainha Elizabeth");
};
