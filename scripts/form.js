var select = document.querySelector('select')
var otrosMediosDiv = document.getElementById('otros-medios');
var form = document.querySelector("form[name='contacto']")
var emailInput = document.querySelector("input[name='email']");
var numeroInput = document.querySelector("input[name='numero']");
var nombreInput = document.querySelector("input[name='nombre']");
var textArea = document.querySelector("textarea[name='por-que']");

select.addEventListener('change', function(event){
    if(event.target.value=="")otrosMediosDiv.style.display = "block"
    else otrosMediosDiv.style.display = "none"
})


form.addEventListener('submit', function(event){
    // console.log(email.value)
    event.preventDefault();
    var errorCounter = 0;
    if(!validarNombre()){
    	alert("Campo Requerido. Solo se permiten caracteres alfabéticos")
    	errorCounter++
    }
    if(!validarEmail()){
    	alert("Email no válido")
    	errorCounter++
    }
    if(!validarNumeroTelefono()){
    	alert("Número de contacto no válido. Solo se permiten 9 numeros")
    	errorCounter++
    }
    if(!validarTextArea()){
    	alert("Has excedido el numero de caracateres permitidos o está vacio");
    	errorCounter++
    }
    if(errorCounter==0){
    	form.submit()
    	alert("Formulario enviado correctamente")
    }

})

function validarNombre(){
	var nombre = nombreInput.value.trim();
	var reEspaciosBlancos = /[ ]+/g;
	nombre = nombre.replace(reEspaciosBlancos,"")
	var regEx = /[A-Za-z]/;
	return regEx.test(nombre)
}


function validarTextArea(){
  var textAreaValue = textArea.value.trim();
  var reEspaciosBlancos = /[ ]+/g;
  var puntosAndComas = /[.,;]+/g;
  textAreaValue = textAreaValue.replace(reEspaciosBlancos," ")
  textAreaValue = textAreaValue.replace(puntosAndComas,"")
  var contador=0;
  textAreaValueArray = textAreaValue.split(" ")
  for(var i=0;i<textAreaValueArray.length;i++){
    if(textAreaValueArray[i]!="") contador++
  }

  if(contador<=150 && contador>0){
    return true
  }
  else{
    return false
  }


}

function validarEmail(valor) {
  var regEx = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  return regEx.test(emailInput.value);
}


function validarNumeroTelefono(){
	var numeroTelefono = numeroInput.value.trim()
	var reEspaciosBlancos = /[ ]+/g;
	numeroTelefono = numeroTelefono.replace(reEspaciosBlancos,"")
	var regEx = /^\d+$/;
	if(regEx.test(numeroTelefono) && numeroTelefono.length==9){
		return true
	}
	else{
		return false
	}
}