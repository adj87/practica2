var ps = document.querySelectorAll('p');
var select = document.querySelector('select')
var otrosMotivosDiv = document.getElementById('otros');
var form = document.querySelector("form[name='contacto']")
var email = document.querySelector("input[name='email']");
var numero =0;

window.addEventListener('scroll', function(){
    if(numero%9==0){
        showParagraphs()
    }
    numero++
})

select.addEventListener('change', function(event){
    if(event.target.value=="")otrosMotivosDiv.style.display = "block"
    else otrosMotivosDiv.style.display = "none"
})


form.addEventListener('submit', function(event){
    console.log(email.value)
    event.preventDefault()
    console.log(validaCorreo(email))
})

    
function showParagraphs(){
    for(var i = 0; i<=ps.length-1; i++){
        var distanceToTheTop = ps[i].getBoundingClientRect().top;
        if ((distanceToTheTop)<700 && distanceToTheTop>0) {
            ps[i].classList.add('active');
        } else {
            ps[i].classList.remove('active');
        }
    }
}

function validation(){

}

function validaCorreo(correo){

  
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  if (!regex.test(correo)) {
    return "Bueno"
  } else {
    return "Malo"
  }

}

