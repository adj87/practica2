var ps = document.querySelectorAll('p');
var numero =0;
window.addEventListener('scroll', function(){
    if(numero%9==0){
        showParagraphs()
        console.log(numero)
    }
    numero++
    // console.log("jajaj")
})
    
function showParagraphs(){
    for(var i = 0; i<=ps.length-1; i++){
        var distanceToTheTop = ps[i].getBoundingClientRect().top;
        if ((distanceToTheTop)<500 && distanceToTheTop>0) {
            ps[i].classList.add('active');
        } else {
            ps[i].classList.remove('active');
        }
    }
}

