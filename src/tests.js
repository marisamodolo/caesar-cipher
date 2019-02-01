function testCipher(result, expected){
if(result === expected){
    console.log("Está funcionando. Resultado: " + result + ". Esperado: "+ expected +".")
}else{
    console.log("Não está funcionando. Resultado: " + result + ". Esperado: "+ expected +".")}
}

testCipher(encode(1, "abc"), "bcd");
testCipher(encode(2, "ABC"), "CDE");
testCipher(encode(3, "ÀÈÌÒÙ"), "ÀÈÌÒÙ");
testCipher(encode(2, "AaBbCc"), "CcDdEe");
testCipher(encode(2, "Abacaxi!"), "Cdceczk!");
testCipher(encode(2, "Oi, tudo bem?"), "Qk, vwfq dgo?");;
testCipher(encode(200, "Z"), "R");

testCipher(decode(1, "bcd"), "abc");
testCipher(decode(2, "CDE"), "ABC");
testCipher(decode(3, "ÀÈÌÒÙ"), "ÀÈÌÒÙ");
testCipher(decode(2, "CcDdEe"), "AaBbCc");
testCipher(decode(2, "Cdceczk!"), "Abacaxi!");
testCipher(decode(2, "Qk, vwfq dgo?"), "Oi, tudo bem?");
testCipher(decode(200, "R"), "Z");

console.log("---TESTES COM ERROS PROPOSITAIS---");

testCipher(encode(1, "abc"), "efg");
testCipher(encode(2, "ABC"), "HgY");
testCipher(encode(3, "ÀÈÌÒÙ"), "BnH");
testCipher(encode(2, "AaBbCc"), "CcDdEe1");
testCipher(encode(2, "Abacaxi!"), "Cdceczk !");
testCipher(encode(2, "Oi, tudo bem?"), "Qk, dagh dgo?");;
testCipher(encode(200, "Z"), "L");

testCipher(decode(1, "efg"), "abc");
testCipher(decode(2, "HgY"), "ABC");
testCipher(decode(3, "BnH"), "ÀÈÌÒÙ");
testCipher(decode(2, "CcDdEe1"), "AaBbCc");
testCipher(decode(2, "Cdceczk !"), "Abacaxi!");
testCipher(decode(2, "Qk, dagh dgo?"), "Oi, tudo bem?");
testCipher(decode(200, "L"), "Z");
