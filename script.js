//início da validação de caracteres e criptografia

const mensagemEntrada = document.querySelector("#entrada-mensagem");
const padrao = /^[a-z\s.,!?:;()]+$/;
mensagemEntrada.focus();

function criptografa() {
  let mensagem = mensagemEntrada.value;  
  let criptografada = mensagem.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  
  if(mensagem === "") {
	exibeMensagem(mensagemEntrada, "Por favor, digite ou cole algo para criptografar.");
	setTimeout(function(){
		window-location.reload();
	}, 1000);
	mensagemEntrada.value = "";
	mensagemEntrada.focus();
  }else if(padrao.test(mensagem) == false) {
	exibeMensagem(mensagemEntrada, "Por favor, use apenas letras minúsculas e não use acentos.");
	setTimeout(function(){
		window-location.reload();
	}, 1000);
	mensagemEntrada.value = "";
	mensagemEntrada.focus();
  }else{
	document.getElementById("saida-mensagem").innerHTML = '<textarea readonly id="entrada-mensagem">' + criptografada + '</textarea>' + '<button id="botao-copiar" onclick="copia()" class="botao-copiar" type="button">Copiar</button>';
  }
}

// fim da validação de caracteres e criptografia

// início da validação de caracteres e criptografia
function descriptografa() {
	let mensagem = mensagemEntrada.value;
	let descriptografada = mensagem.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

	if(mensagem === "") {
		exibeMensagem(mensagemEntrada, "Por favor, digite ou cole algo para criptografar.");
		setTimeout(function(){
			window-location.reload();
		}, 1000);
		mensagemEntrada.value = "";
		mensagemEntrada.focus();
	  }else if(padrao.test(mensagem) == false) {
		exibeMensagem(mensagemEntrada, "Por favor, use apenas letras minúsculas e não use acentos.");
		setTimeout(function(){
			window-location.reload();
		}, 1000);
		mensagemEntrada.value = "";
		mensagemEntrada.focus();
	  }else{
		document.getElementById("saida-mensagem").innerHTML = '<textarea readonly id="entrada-mensagem">' + descriptografada + '</textarea>' + '<button id="botao-copiar" onclick="copia()" class="botao-copiar" type="button">Copiar</button>';
	  }
}

// fim da validação de caracteres e descriptografia


// início da função para o botão de copiar

function copia() {
	let copiaMensagem = document.getElementById("saida-mensagem").querySelector("textarea");

	copiaMensagem.select();	
	document.execCommand("copy");
    document.getElementById("copiaMensagem");

	alert("Texto copiado!");
	location.reload();
}

// fim da função para o botão de copiar

function exibeMensagem(textarea, aviso) {
	const entradaMensagem = textarea.parentElement;
	const mensagemAviso = entradaMensagem.querySelector("a");

	mensagemAviso.innerText = aviso;

	entradaMensagem.className = "container-entrada erro";
}