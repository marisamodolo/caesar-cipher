function caesarEncode () {
  let string = document.getElementById("message").value;
  let offset = document.getElementById("offset").value;
  clearInput("message", "offset");
  document.getElementById("resultMsg1").innerHTML = caesar(offset, string, "encode");
  checkDisplay("boxMsgEncode", "boxMsgDecode", string, offset);
}

function caesarDecode () {
  let string = document.getElementById("messageDecode").value;
  let offset = document.getElementById("offset2").value;
  clearInput("messageDecode", "offset2");
  document.getElementById("resultMsg2").innerHTML = caesar(offset, string, "decode");
  checkDisplay("boxMsgDecode", "boxMsgEncode", string, offset);
}

function caesar (offset, string, operator) {
  switch (operator){
    case "encode" : operator = (offset % 26);
    break;
    case "decode" :  operator = - (offset % 26);
    }
  let result = "";
  let finalAscii;
  offset = parseInt(offset);
  for (i of string.split("")) {
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

function checkDisplay (element, elementToHide, string, offset) {
  showDiv = document.getElementById(element).classList.contains("dp-none");
  if (showDiv && string !== "" && offset !== "") {
    changeClass(element, "dp-none", "dp-block");
    changeClass(elementToHide, "dp-block", "dp-none");
  } else if (string === "" || offset === "") {
    changeClass(element, "dp-block", "dp-none");
    alert("Preencha os campos corretamente!");
  }
}

function changeClass (element, before, after) {
  document.getElementById(element).classList.remove(before);
  document.getElementById(element).classList.add(after);
}

function clearInput (message, offset) {
  document.getElementById(message).value = "";
  document.getElementById(offset).value = "";
}

function aboutCaesar () {
  document.getElementById("divCaesar").classList.toggle("dp-block");
}