var boton = document.querySelector("#boton");
var infoDiv = document.querySelector("#msg-info")

boton.addEventListener('click', function(){
	ajax()
})

infoDiv.addEventListener('click',function(){
  scrollToElement(document.getElementById("inicio"));
  infoDiv.classList.remove('active')
  
})

function ajax(){
  infoDiv.classList.add('active')
  infoDiv.innerText = "Cargando nueva cita"
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var responseJSON = JSON.parse(this.response)
      var randomNumber = Math.floor(Math.random()*100)
      document.getElementById("quote").innerText = (responseJSON[randomNumber]['quote']);

      setTimeout(function(){
        infoDiv.innerHTML = "Cita cargada con éxito</br><span style='color:black;font-size:1.5rem'>VER NUEVA CITA<i class='fa fa-arrow-up' aria-hidden='true'></i></span>"
     	},1300)
    }
  }


  xhttp.open("GET", "https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520", true);
  xhttp.send();
}

