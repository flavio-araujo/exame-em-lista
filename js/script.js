// ==UserScript==
// @name         Ver notícias da Exame sempre como lista
// @namespace    http://github.com/wptd/chromium-extensions
// @version      0.1
// @description  Quando acessa uma notícia do site Exame, opta por exibi-la como lista.
// @author       Jota Teles
// @match        http://exame.abril.com.br/tecnologia/noticias/*
// @grant        none
// ==/UserScript==

if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function (str){
	return this.slice(-str.length) == str;
  };
}

var requisicao = new XMLHttpRequest();
var urlAtual = document.location.toString();
var urlAtual = urlAtual.endsWith('/') ? urlAtual : urlAtual + '/'; // adiciona uma barra ao final da url caso não tenha
var urlLocationLista = urlAtual+'lista';

if(!urlAtual.endsWith('/lista')){
    requisicao.open('GET', urlLocationLista, false);
    requisicao.send(null);
	
	if(requisicao.status == 200) {
	    document.location = urlLocationLista;
		console.log('Você será redirecionado de .'+ urlAtual+ ' para versão lista em '+ urlLocationLista);	    
	} else if(requisicao.status == 404) {
		console.log('Essa notícia da Exame não possui versão em lista.');
	}    	
} else {
	console.log('Você já está acessando a versão em lista dessa notícia.');
}