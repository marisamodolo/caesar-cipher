let result;
let finalAscii;
let msgResult;

function caesarEncode(){
    const string = document.getElementById("message").value;
    const offset = document.getElementById("offset").value;
    msgResult = encode(offset, string);
    document.getElementById("resultmsg").innerHTML = msgResult;
}

function caesarDecode(){
    const string = document.getElementById("messageDecode").value;
    const offset = document.getElementById("offset").value;
    msgResult = decode(offset, string);
    document.getElementById("resultmsg").innerHTML = msgResult;
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
      finalAscii = ((currentLetter[i] - 33 - offset)%94)+ 33;
      currentLetter[i] = String.fromCharCode(finalAscii);
      result = currentLetter.join("");
      console.log(finalAscii);

    }
    return result;

}

