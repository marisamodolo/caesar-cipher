function encode(offset, message){
    const messageNoCodif = document.getElementById("message").value;
    const offsetMsg = document.getElementById("offset").value;
    const result = [];

    for(let i = 0; i < messageNoCodif.length; i++){
        result[i] = messageNoCodif.charCodeAt(i);
        let b = result[i]
        const a = ((result - 32 + offset)%26)+ 32;
        
        
        }
    return result;


    }
