function encode(offset, message){
    let messageNoCodif = document.getElementById("message").value;
    let offsetMsg = document.getElementById("offset").value;

    let result = []; 
    let x = parseInt(offsetMsg); 
    let b = [];
    let y; 
    let a;

    for(let i = 0; i < messageNoCodif.length; i++){
        result[i] = messageNoCodif.charCodeAt(i);
       // if(x > 0){
            a = (( result[i] - 32 + x)%94)+ 32;
       // }
        /*if(x < 0){
            a = (( result[i] - 65 - (-x))%26)+ 65;
         console.log("negativo")
        }*/
        b[i] = String.fromCharCode(a);
        y = b.join("");
        console.log(b); 
        }  
        document.getElementById("resultmsg").innerHTML = y;
    }
//criar função para encode e decode que use os paramentros;
    function decode(offset, messageDecode){
    let messageNoCodif = document.getElementById("messageDecode").value;
    let offsetMsg = document.getElementById("offset").value;

    let result = []; 
    let x = parseInt(offsetMsg); 
    let b = [];
    let y; 
    let a;

    for(let i = 0; i < messageNoCodif.length; i++){
        result[i] = messageNoCodif.charCodeAt(i);
        //if(x > 0){
            a = ((( result[i] - 32 + -x)%94)+32);
            
        //}
        /*if(x < 0){
            a = (( result[i] - 65 - (-x))%26)+ 65;
         console.log("negativo")
        }*/
        b[i] = String.fromCharCode(a);
        y = b.join("");
        
        console.log(a); 
        }  
        document.getElementById("resultmsg").innerHTML = y;


    }

    function caesarEncode()
