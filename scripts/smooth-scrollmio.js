var navBarItems = document.querySelectorAll(".navbar__item,navbar__item");

var arrayDistances = []
// console.log(navBarItems)
for(var i=0;i<navBarItems.length;i++){
	var goTo = navBarItems[i].querySelector("a").href.split("#")[1];
	arrayDistances[goTo]=document.querySelector("#"+goTo).getBoundingClientRect().top 

	navBarItems[i].addEventListener("click", function(event){
		event.preventDefault()
		scrollToElement(event)
	})
}

function scrollToElement(parameter) {
  var goTo
  (typeof parameter==="object") ? goTo = parameter.target.href.split("#")[1] : goTo = parameter 
  
  var jump = parseInt(arrayDistances[goTo]*0.2);
  console.log(jump)
  document.body.scrollTop +=jump;
  document.documentElement.scrollTop +=jump

  // console.log(document.getElementById(goTo))

  if (!document.getElementById(goTo).lastJump || ((document.getElementById(goTo).lastJump) > Math.abs(jump))) {
    document.getElementById(goTo).lastJump = Math.abs(jump);
    setTimeout(function() {
      scrollToElement(goTo);
    }, 25);
  } else {
    document.getElementById(goTo).lastJump = null;
  }
}

