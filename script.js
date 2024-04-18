const formEncrypt = document.querySelector("#form");
formEncrypt.addEventListener("submit", (event) => {
  event.preventDefault();
});

const btn_cripto = document.querySelector("#btn_cripto");
btn_cripto.addEventListener("click", () => {
  const textValue = String(formEncrypt.querySelector("#textarea").value);
  if (textValue == "") {
    return alert("Obrigatório colocar uma palavra para criptografar");
  }
  encrypt(textValue);
});

const btn_decripto = document.querySelector("#btn_decripto");
btn_decripto.addEventListener("click", () => {
  const textValue = String(formEncrypt.querySelector("#textarea").value);
  if (textValue == "") {
    return alert("Obrigatório colocar uma palavra para descriptografar");
  }
  decrypt(textValue);
});

function encrypt(textValue) {
  const result = document.querySelector(".result");
  result.innerHTML = ""; // Limpa o conteúdo anterior
  let arrayText = textValue.split("");
  let encryptText;
  encryptText = arrayText
    .join("")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  result.innerHTML += ` ${encryptText}`;
}

function decrypt(textValue) {
  const result = document.querySelector(".result");
  result.innerHTML = ""; // Limpa o conteúdo anterior
  let arrayText = textValue.split("");
  let encryptText;
  encryptText = arrayText
    .join("")
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  result.innerHTML += ` ${encryptText}`;

  console.log(arrayText);
}

document.querySelector('#btn__copy').addEventListener('click', function (){
  var textoAlert = document.getElementById("paragrafo__result").innerHTML
  alert ("Texto copiado com sucesso!", textoAlert)
  navigator.clipboard.writeText(textoAlert);
});
