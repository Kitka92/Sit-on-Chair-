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
  
  for (var i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("mouseleave", function() {
      var clairs = this.children[1];
      clairs.style.display = "block";
    });
  }
  
// SLIDER section1
  var index = 0;
  
  var imgs = document.querySelectorAll(".slide li");
  //console.log(imgs);
  
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
  
  //console.log(arrowCalc, listPanel);

  for (var i = 0; i < arrowCalc.length; i++) {
	arrowCalc[i].addEventListener("click", function() {
      
      var next = this.nextElementSibling;
      
      if (next.style.display === "none") {
          next.style.display = "block";
      } else {
          next.style.display = "none";
        }
      
    });
}
  
// SUM
  
  var options = document.querySelectorAll("[data-price]");
 
  var listPanel = document.querySelector(".list_panel");
  var chairTypes = listPanel.children;
  
  var colors = document.querySelectorAll(".list_panel.colors li");
  var patterns = document.querySelectorAll(".list_panel.patterns li");
  
  var panelLeft = document.querySelector(".panel_left");
  
  var panelRight = document.querySelector(".panel_right");
  
  var checkbox = document.querySelector("#transport");
  
  var conclusion = document.querySelector(".sum");
 
  for (var i = 0; i < chairTypes.length; i++) {
    chairTypes[i].addEventListener("click", function() {
      panelLeft.children[0].innerText = this.innerText;
      panelRight.children[0].innerText = this.dataset.price;
    });
  }
  
  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function() {
      panelLeft.children[1].innerText = this.innerText;
      panelRight.children[1].innerText = this.dataset.price;
    });
  }
  
  for (var i = 0; i < patterns.length; i++) {
    patterns[i].addEventListener("click", function() {
      panelLeft.children[2].innerText = this.innerText;
      panelRight.children[2].innerText = this.dataset.price;
    });
  }
  
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      panelLeft.children[3].innerText = "Transport";
      panelRight.children[3].innerText = this.dataset.price;
    } else {
      panelLeft.children[3].innerText = "Transport";
      panelRight.children[3].innerText = 0;
    }
  });
  
  function calculatePrice() {
    var sum = 0;
    for (var i = 0; i < panelRight.children.length; i++) {
     if (panelRight.children[i].innerText !== "") {
        sum += parseFLoat(panelRight.children[i].innerText);
      } else {
        sum = 0;
      }
    }
    conclusion.innerText = sum + "zł";
  }
  
  calculatePrice();
  
});
