window.onload = () => {
  document.getElementById("btnCaesar").addEventListener("click", aboutCaesar);
  let button = document.getElementsByClassName("btn-click");
  for (let i of button) {
    i.addEventListener("click", choose);
  }
}

function choose (event) {
  let operator = event.target.value;
  let string = document.getElementById("message").value;
  let offset = document.getElementById("offset").value;
  clearInput("message", "offset");
  if (string === "" || offset === "" || typeof offset == ! Number) {
    document.getElementById("resultMsg").innerHTML = "Não foi possível (des)codificar sua mensagem. Cheque se preencheu os campos corretamente!";
  } else {
    document.getElementById("resultMsg").innerHTML = caesar(offset, string, operator);
  }
}

function caesar (offset, string, operator) {
  switch (operator) {
    case "encode" : operator = (offset % 26);
    break;
    case "decode" : operator = - (offset % 26);
  }
  let result = "";
  let finalAscii;
  offset = parseInt(offset);
  for (let i of string.split("")) {
    if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
      finalAscii = (i.charCodeAt() - 65 + operator + 26) % 26 + 65;
    } else if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
      finalAscii = (i.charCodeAt() - 97 + operator + 26) % 26 + 97;
    } else {
      finalAscii = i.charCodeAt();
    }
    result += String.fromCharCode(finalAscii);
  }
  return result;
}

function clearInput (message, offset) {
  document.getElementById(message).value = "";
  document.getElementById(offset).value = "";
}

function aboutCaesar (event) {
  event.target.value === "Voltar" ? 
  event.target.value = "Sobre a Cifra de César" : event.target.value = "Voltar" ;
  document.getElementById("artcAboutCaesar").classList.toggle("dp-none");
  document.getElementById("gif").classList.toggle("dp-none");
}