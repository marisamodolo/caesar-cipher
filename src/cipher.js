let finalAscii;
let showDiv;

//aaaa

function caesarEncode(){
  console.log("entrou no caesar encode");
    let string = document.getElementById("message").value;
    let offset = document.getElementById("offset").value;
    let msgResultEncode = encode(offset, string);
    document.getElementById("resultMsg1").innerHTML = msgResultEncode;
    showDiv = document.getElementById('boxMsgEncode').style.display;
  
    if(showDiv == "none" &&  msgResultEncode != undefined && offset != ""){
      document.getElementById('boxMsgEncode').style.display = 'block';
      document.getElementById('boxMsgDecode').style.display = 'none';
    }else if(showDiv == "block" && msgResultEncode != undefined && offset != "") {
      document.getElementById('boxMsgEncode').style.display = 'block';
    }else{
      document.getElementById('boxMsgEncode').style.display = 'none';
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
  
    if(showDiv == "none" && msgResultDecode != undefined && offset != "" ){
      document.getElementById('boxMsgDecode').style.display = 'block';
      document.getElementById('boxMsgEncode').style.display = 'none';
    }else if(showDiv == "block" && msgResultDecode != undefined && offset != "") {
      document.getElementById('boxMsgDecode').style.display = 'block';
    }else{
      document.getElementById('boxMsgDecode').style.display = 'none';
    }

    console.log(msgResultDecode)
    document.getElementById("messageDecode").value = "";
    document.getElementById("offset2").value = "";
}

function encode(offset, string){
    offset = parseInt(offset);
    let currentLetter = [];
    let result;
        
    for(let i=0; i < string.length; i++){
       currentLetter[i] = string.charCodeAt(i);
       if(currentLetter[i]>= 192 && currentLetter[i] <= 253){
        finalAscii =( currentLetter[i] - 192 +(offset%61)+61)%61+192;
      }else{
       finalAscii =( currentLetter[i] - 32 +(offset%94)+94)%94+32;
      }
       currentLetter[i] = String.fromCharCode(finalAscii);
       result = currentLetter.join("");
       console.log(result);
    }
    return result;
}

function decode(offset, string){
    offset = parseInt(offset);
    let currentLetter = [];
    let result;

    for(let i=0; i < string.length; i++){
      currentLetter[i] = string.charCodeAt(i);
      if(currentLetter[i]>= 192 && currentLetter[i] <= 253){
        finalAscii =( currentLetter[i] - 192 -(offset%61)+61)%61+192;
      }else{
      finalAscii = ( currentLetter[i] - 32 -(offset%94)+94)%94+32;
      }
      currentLetter[i] = String.fromCharCode(finalAscii);
      result = currentLetter.join("");
      console.log(result);

    }
    return result;

}

