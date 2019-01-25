let result;
let finalAscii;
let msgResultEncode;
let msgResultDecode;
let mudarDiv;

function caesarEncode(){
  console.log("entrou no caesar encode");
    let string = document.getElementById("message").value;
    let offset = document.getElementById("offset").value;
    msgResultEncode = encode(offset, string);
    document.getElementById("resultMsg1").innerHTML = msgResultEncode;
    mudarDiv = document.getElementById('boxMsgEncode').style.display;
  
    if(mudarDiv == "none"){
      document.getElementById('boxMsgEncode').style.display = 'block';
      document.getElementById('boxMsgDecode').style.display = 'none';
    }
    
}

function caesarDecode(){
  console.log("entrou no caesar decode");
    let string = document.getElementById("messageDecode").value;
    let offset = document.getElementById("offset2").value;
    msgResultDecode = decode(offset, string);
    document.getElementById("resultMsg2").innerHTML = msgResultDecode;
    mudarDiv = document.getElementById('boxMsgDecode').style.display;
  
    if(mudarDiv == "none"){
      document.getElementById('boxMsgDecode').style.display = 'block';
      document.getElementById('boxMsgEncode').style.display = 'none';
    }
}

function encode(offset, string){
    offset = parseInt(offset);
    let currentLetter = [];
    
    for(let i=0; i < string.length; i++){
       currentLetter[i] = string.charCodeAt(i);
       finalAscii =(( currentLetter[i] - 33 + offset)%94)+33;
       currentLetter[i] = String.fromCharCode(finalAscii);
       result = currentLetter.join("");
       console.log(finalAscii);
    }
    return result;
}

function decode(offset, string){
    offset = parseInt(offset);
    let currentLetter = [];

    for(let i=0; i < string.length; i++){
      currentLetter[i] = string.charCodeAt(i);
      if( offset >=62){
       
       console.log("entrou no maior que 62")
      }
      finalAscii = ((currentLetter[i] - 33 - offset)%94)+33;
      currentLetter[i] = String.fromCharCode(finalAscii);
      result = currentLetter.join("");
      console.log(finalAscii);

    }
    return result;

}

