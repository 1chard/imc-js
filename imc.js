var nome = document.getElementById("nome");
var metros = document.getElementById("altura");
var peso = document.getElementById("quilo");
var butao = document.getElementById("butao");
var caixaTexto = document.getElementById("resultado");

function test() {
	let corpo;
	let result;
	
	if(stringIsNumber(metros.value) && stringIsNumber(peso.value))
		result = parseFloat(peso.value) /
            ( parseFloat(metros.value) * parseFloat(metros.value) );
	else{
		caixaTexto.textContent = "Inclua valores corretos na altura e no peso.";
		return;
	}
	
	if(result < 18.5)
		corpo = "um magrelo";
	else if(result < 24.9)
		corpo = "saudavel";
	else if(result < 29.9)
		corpo = "bodybuilder";
	else if(result < 34.9)
		corpo = "gordo";
	else if(result < 39.9)
		corpo = "gordão";
	else
		corpo = "balofo";

	caixaTexto.textContent = ((nome.value == "")? "Desconhecido" : nome.value) + " é um " + corpo
	 + " de " + result.toFixed(2) + " IMC.";
}

function stringIsNumber(fx) {
    if(fx == "")
        return false;
    
    for(let i = 0; i < fx.length; i++){
        
        
        switch(fx.charAt(i)){
                
            case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    continue;
                
            default:
                return false;
        }
    }
            
    return true;
}


butao.addEventListener("click", test);
