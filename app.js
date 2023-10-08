window.onload=function(){
	janelaPrincipal=document.querySelector(".janelaModalCod");
	janela=document.querySelector(".janelaMod");
	cardJanela=document.querySelector(".imgCardJanela");
	cardJanela.style.display="none";
	janelaPrincipal.style.display="block";
	janela.style.display="none";
	carrega=document.querySelector(".lds-ring")
	
	console.log(janela)
	
	return[janelaPrincipal,janela,carrega ]
}
function verificaCod(){ 
	let codigo=(document.querySelector(".cod").value)
	codigo=codigo.toUpperCase();
	if(codigo=="SE LIGA BOFE"||codigo=="SELIGABOFE"){
		console.log(1)
		janelaPrincipal.style.display="none";
		janela.style.display="block";
		setInterval(mudaImagem, 1000)
	}

}
function seLiga(){
	alert("SE MANCA MOCRÉIA")
}
function mudaImagem(){
	carrega.style.display="none"
	janela.style.display="none"
	cardJanela.style.display="block"
}