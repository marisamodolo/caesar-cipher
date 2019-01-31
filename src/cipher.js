let finalAscii;
let showDiv;
function aboutCaesar(){
  if(document.getElementById("divCaesar").style.display === 'block'){
    document.getElementById("divCaesar").style.display = 'none';
    document.getElementById("btnCaesar").innerHTML = "Sobre a Cifra de César";
}else{
  document.getElementById("divCaesar").style.display = 'block';
    document.getElementById("btnCaesar").innerHTML = "Voltar";
}
}
function caesarEncode(){
  console.log("entrou no caesar encode");
    let string = document.getElementById("message").value;
    let offset = document.getElementById("offset").value;
    let msgResultEncode = encode(offset, string);
    document.getElementById("resultMsg1").innerHTML = msgResultEncode;
    showDiv = document.getElementById('boxMsgEncode').style.display;
  
    if(showDiv == "none" &&  string !== "" && offset !== ""){
      document.getElementById('boxMsgEncode').style.display = 'block';
      document.getElementById('boxMsgDecode').style.display = 'none';
    }else if(showDiv == "block" && string !== "" && offset !== "") {
      document.getElementById('boxMsgEncode').style.display = 'block';
    }else{
      document.getElementById('boxMsgEncode').style.display = 'none';
      alert("Preencha os campos corretamente!");
    }
    console.log(msgResultEncode)

    document.getElementById("message").value = "";
    document.getElementById("offset").value = "";
   

    
}

function caesarDecode(){
  console.log("entrou no caesar decode");
    let string = document.getElementById("messageDecode").value;
    let offset = document.getElementById("offset2").value;
    let msgResultDecode = decode(offset, string);
    document.getElementById("resultMsg2").innerHTML = msgResultDecode;
    showDiv = document.getElementById('boxMsgDecode').style.display;
  
    if(showDiv == "none" && string !== "" && offset != "" ){
      document.getElementById('boxMsgDecode').style.display = 'block';
      document.getElementById('boxMsgEncode').style.display = 'none';
    }else if(showDiv == "block" && string !== "" && offset != "") {
      alert("Preencha os campos corretamente!");
      document.getElementById('boxMsgDecode').style.display = 'block';
    }else{
      document.getElementById('boxMsgDecode').style.display = 'none';
      alert("Preencha os campos corretamente!");
    }

    console.log(msgResultDecode)
    document.getElementById("messageDecode").value = "";
    document.getElementById("offset2").value = "";
}

function encode(offset, string){
    offset = parseInt(offset);
    let result= "";
        
    for(let i=0; i < string.length; i++){
      if(string.charCodeAt(i)>= 65 && string.charCodeAt(i) <= 90){
        finalAscii =( string.charCodeAt(i) - 65 +(offset%26)+26)%26+65;
      }else if (string.charCodeAt(i)>= 97 && string.charCodeAt(i) <= 122){
      finalAscii =( string.charCodeAt(i) - 97 +(offset%26)+26)%26+97;
      }else{
       finalAscii = string.charCodeAt(i);
      }
       result += String.fromCharCode(finalAscii);
       console.log(result);
    }
    return result;
}

function decode(offset, string){
    offset = parseInt(offset);
    let result="";

    for(let i=0; i < string.length; i++){
      if(string.charCodeAt(i)>= 65 && string.charCodeAt(i) <= 90){
        finalAscii =( string.charCodeAt(i) - 65 -(offset%26)+26)%26+65;
      }else if (string.charCodeAt(i)>= 97 && string.charCodeAt(i) <= 122){
      finalAscii =( string.charCodeAt(i) - 97 -(offset%26)+26)%26+97;
      }else{
       finalAscii = string.charCodeAt(i);
      }
       result += String.fromCharCode(finalAscii);
       console.log(result);
    }
    return result;

}

