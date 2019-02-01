# Cifra de César

## O que é?

A **Cifra de César** é uma tecnica de criptografia que utiliza a substituição de letras, onde cada letra é substituida por outra, dada uma chave de deslocamento.
Por exemplo: "**ABC**" se tornaria, com uma chave de deslocamento 3, "**CDE**".

## Objetivo:
O site contendo a Cifra de César foi desenvolvido para atender as pessoas que necessitam de privacidade e procuram uma forma de criptografar suas mensagens, porém não sendo necessário um nível muito complexo para a cifragem e decifragem. O site funciona de forma simples e intuitiva.

## Como funciona?
* O usuário preenche os campos necessários com a mensagem que deseja criptografar e o número de deslocamentos.
* Ao clicar no GIF referente ao campo preenchido, aparece logo abaixo, sua mensagem cifrada.
* Para decifrar sua mensagem, basta colocar a mensagem cifrada no campo de decifragem e utilizar a mesma chave de deslocamento.
* Ao clicar no GIF correspondente ao campo de decifragem, a mensagem é revelada logo abaixo.

## Fluxograma da Cifra de César

![fluxograma](http://uploaddeimagens.com.br/images/001/866/147/original/Sim.png)

## Como funciona? *TECH*
* A partir da mensagem e do deslocamento dado pelo usuário, ao apertar o gif correspondente é chamado a primeira função.
* Esta função recolhe os dados fornecidos e chama uma segunda função que utilizará a fórmula para a cifragem do texto.
* A função secundária retorna a frase já pronta.
* Em seguida, a função primária checa se todos os campos foram preenchidos de forma correta e se a div referente ao resultado está oculta ou não.
* Caso os campos não estiverem sidos preenchidos corretamente, o usuário recebe um alert.
* Caso tudo estiver correto, surge uma div com a mensagem final.

## Conclusão
* Requisitos básicos e Hacker Edition alcançados.
* Aprendizado de CSS.
* Testes feitos para a checagem do funcionamento corretos das funções.



