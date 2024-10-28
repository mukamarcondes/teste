const birthYear = 2004; // Ajuste para o ano de nascimento correto
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

document.querySelector("header p:nth-child(3)").innerHTML = `Idade: ${age} anos | São Paulo, SP | <a href="mailto:murilo@example.com">murilo@example.com</a> | (11) 99999-9999`;
