window.onload=function(){
	janelaPrincipal=document.querySelector(".janelaModalCod");
	janela=document.querySelector(".janelaMod");
	cardJanela=document.querySelector(".imgCardJanela");
	imgJanela=document.querySelector(".imgJanela");
	carrega=document.querySelector(".lds-ring");

	imgCard=document.querySelector(".imgCardJanela");
	imgCard2=document.querySelector(".imgCardJanela2"); /* aqui */
	imgCard3=document.querySelector(".imgCardJanela3"); /* aqui */

	imgCard2.style.display="none"; 
	imgCard3.style.display="none";

	cardJanela.style.display="none";
	janelaPrincipal.style.display="block";
	janela.style.display="none";
	
	console.log(janela);
	
	return[janelaPrincipal,janela,carrega,imgCard,imgCard2,imgCard3,imgJanela]/* aqui */
}
function verificaCod(){ 
	let cod=(document.querySelector(".cod").value)
	cod=cod.toUpperCase();
	if(cod=="SE LIGA BOFE"||cod=="SELIGABOFE"){
		console.log(1)
		janelaPrincipal.style.display="none";
		imgJanela.style.backgroundImage="url('jessie.jpeg')"
		imgJanela.style.backgroundSize="cover"
		janela.style.display="block";
		cod="1";
		
		setInterval(mudaImagem, 2000,cod)
	}else if(cod=="NÃOAGUENTOMAIS"||cod=="NAOAGUENTOMAIS"||cod=="NÃO AGUENTO MAIS"||cod=="NAO AGUENTO MAIS"){
		console.log(2)
		janelaPrincipal.style.display="none";
		imgJanela.style.backgroundImage="url('karaoke.jpeg')"
		imgJanela.style.backgroundSize="cover"
		janela.style.display="block";
		cod="2";
		setInterval(mudaImagem, 2000,cod)

	}else if(cod=="SOU LINDA DEMAIS PRA ISSO"||cod=="SOULINDADEMAISPRAISSO"){
		console.log(3)
		janelaPrincipal.style.display="none";
		imgJanela.style.backgroundSize="cover"
		janela.style.display="block";
		cod="3";
		setInterval(mudaImagem, 2000,cod)
		imgJanela.style.backgroundImage="url('sharpey.jpeg')"
	}else{
		alert("BURRO(A) DO CARALHO, ESCREVE DIREITO LERDÃO(NA)")
	}

}
function seLiga(){
	alert("SE MANCA MOCRÉIA")
}
function mudaImagem(codigo){
	if(codigo=="1"){
		imgCard.src="luau.jpeg"
	}else if(codigo=="2"){
		imgCard.src="bar.jpeg"
		imgCard2.style.display="block";
		imgCard3.style.display="block";
	}else if(codigo=="3"){
		imgCard.src="piquenique.jpeg"
		imgCard2.style.display="block";
	}
	carrega.style.display="none"
	janela.style.display="none"
	cardJanela.style.display="block"


}
