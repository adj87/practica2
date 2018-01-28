var navbarItems = document.querySelectorAll(".navbar__item, .navbar__item--logo");
console.log(navbarItems)

for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener("click", function(event) {
    var goTo = this.getElementsByTagName("a")[0].href.split("#");

    deleteActiveItem();
    this.classList.add("active");

      event.preventDefault();
      var sectionToGo = goTo[goTo.length - 1];
      var elementToGo = getElementToScroll(sectionToGo);
      scrollToElement(elementToGo);
  });
}


function getElementToScroll(id) {
  var elem = document.getElementById(id);
  return elem;
}

function scrollToElement(element) {
  var jump = parseInt(element.getBoundingClientRect().top * 0.2)+3;
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;

  if (!element.lastJump || element.lastJump > Math.abs(jump)) {
    element.lastJump = Math.abs(jump);
    setTimeout(function() {
      scrollToElement(element);
    }, 25);
  } else {
    element.lastJump = null;
  }
}


function setActiveItem(selector) {
  document
    .querySelector(selector)
    .parentNode.classList.add("navbar__item--active");
}
function deleteActiveItem() {
  for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.remove("active");
  }
}


//NO LLEGUÉ A ENTENDER DEL TODO ESTA PARTE Y POR ESO NO LA HE INCLUIDO















// window.addEventListener("scroll", function(){
//   deleteActiveItem();
// });

// var acumulativeOffset = function(element) {
//   var top = 0;

//   do {
//     top += element.offsetTop || 0;
//     element = element.offsetParent;
//   } while (element);

//   return top - 50;
// };

// var quienSoyOffset = acumulativeOffset(document.getElementById("quien-soy"));
// var estudiosexperiencia = acumulativeOffset(document.getElementById("estudios-experiencia"));
// var transporteOffset = acumulativeOffset(document.getElementById("transporte"));


// var previous;

// function changeMenuStyle(event) {
//   var pageOffset = window.pageYOffset;

//   if (pageOffset >= 0 && pageOffset < quienSoyOffset) {
//     if (!previous || previous !== 1) {
//       previous = 1;
//     } else {
//       return false;
//     }

//     deleteActiveItem();
//     setActiveItem("a[href='#']");
//   } else if (pageOffset >= quienSoyOffset && pageOffset < equipoOffset) {
//     if (!previous || previous !== 2) {
//       previous = 2;
//     } else {
//       return false;
//     }

//     deleteActiveItem();
//     setActiveItem("a[href$='quien-soy']");
//   } else if (pageYOffset >= equipoOffset && pageYOffset < transporteOffset) {
//     if (!previous || previous !== 3) {
//       previous = 3;
//     } else {
//       return false;
//     }

//     deleteActiveItem();
//     setActiveItem("a[href$='equipo']");
//   }
// }

function setActiveItem(selector) {
  document
    .querySelector(selector)
    .parentNode.classList.add("navbar__item--active");
}
function deleteActiveItem() {
  for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.remove("active");
  }
}
