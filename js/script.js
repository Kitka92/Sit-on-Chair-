document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM");

// SUBMENU
  var oFirmie = document.querySelector(".menu li:first-child");
  var arrow = document.querySelector(".arrow");
  var submenu = document.querySelector(".submenu");
  
  arrow.classList.add("hidden");
  submenu.classList.add("hidden");
  
  oFirmie.addEventListener("mouseenter", function() {
      arrow.classList.remove("hidden");
      submenu.classList.remove("hidden");
  }); 
  
  oFirmie.addEventListener("mouseleave", function() {
      arrow.classList.add("hidden");
      submenu.classList.add("hidden");
  }); 

// CHAIRS
    
  var pictures = document.querySelectorAll(".pic");
  
  for (var i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("mouseenter", function() {
      var clairs = this.children[1];
      clairs.style.display = "none";
    });
  }
  
  for (var j = 0; j < pictures.length; j++) {
    pictures[j].addEventListener("mouseleave", function() {
      var clairs = this.children[1];
      clairs.style.display = "block";
    });
  }
  
// SLIDER section1
  var index = 0;
  
  var imgs = document.querySelectorAll(".slide li");
  console.log(imgs);
  
  imgs[index].classList.add("visible");
  
  var next = document.querySelector(".slider.right");
  var prev = document.querySelector(".slider.left");
  
  next.addEventListener("click", function() {
    imgs[index].classList.remove("visible");
    index++;
    if (index > imgs.length-1) {
      index = 0;
    }
    imgs[index].classList.add("visible");
  });
  
  prev.addEventListener("click", function() {
    imgs[index].classList.remove("visible");
    index--;
    if (index < 0) {
      index = imgs.length-1;
    }
    imgs[index].classList.add("visible");
  });
  
// CALCULATOR

// DROP-DOWN LISTS
  
  var arrowCalc = document.querySelectorAll(".list_arrow");
  
  var listPanel = document.querySelectorAll(".list_panel");
  
  console.log(arrowCalc, listPanel);

  for (var k = 0; k < arrowCalc.length; k++) {
	arrowCalc[k].addEventListener("click", function() {
      
      var next = this.nextElementSibling;
      
      if (next.style.display === "none") {
          next.style.display = "block";
      } else {
          next.style.display = "none";
        }
      
    });
}
  

  
});
