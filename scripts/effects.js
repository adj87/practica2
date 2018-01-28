var ps = document.querySelectorAll('p');
var numero = 0;
var inputs = document.querySelectorAll('input, textarea, select')
var labels = document.querySelectorAll('label')

showParagraphs();

window.addEventListener('scroll', function(){
    if(numero%9==0){
        showParagraphs()
    }
    numero++
})

for(var i = 0;i<inputs.length;i++){
  inputs[i].addEventListener('focus', function(event){
   deleteActiveClass();
   setActiveClass(event)
  })
}


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


function setActiveClass(event){
  var label = event.target.parentElement.querySelector('label');
  label.classList.add('active')
}

function deleteActiveClass() {
  for (var i = 0; i < labels.length; i++) {
    labels[i].classList.remove("active");
  }
}





