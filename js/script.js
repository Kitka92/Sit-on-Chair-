document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM");

// SUBMENU
  var oFirmie = document.querySelector(".menu li:first-child");
  var arrow = document.querySelector(".arrow");
  var submenu = document.querySelector(".submenu");
  
  arrow.classList.add("hidden");
  submenu.classList.add("hidden");
  
  // events for hover - submenu
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
  
  //events for hover - pictures in section 2
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
  
// SLIDER
  var index = 0;
  
  var imgs = document.querySelectorAll(".slide li");
  //console.log(imgs);
  
  imgs[index].classList.add("visible");
  
  var next = document.querySelector(".slider.right");
  var prev = document.querySelector(".slider.left");
  
  // event for slider on the right side
  next.addEventListener("click", function() {
    imgs[index].classList.remove("visible");
    index++;
    if (index > imgs.length-1) {
      index = 0;
    }
    imgs[index].classList.add("visible");
  });
  
  // event for slider on the left side
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
  
  // event for drop-down the drop-down list
  for (var i = 0; i < arrowCalc.length; i++) {
	arrowCalc[i].addEventListener("click", function() {
      var next = this.nextElementSibling;
      
      if (next.style.display !== "block") {
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
  
  var listPanelAll = document.querySelectorAll(".list_panel")
  console.log(listPanelAll);
  
  var colors = document.querySelectorAll(".list_panel.colors li");
  var patterns = document.querySelectorAll(".list_panel.patterns li");
  
  var panelLeft = document.querySelector(".panel_left");
  
  var panelRight = document.querySelector(".panel_right");
  
  var checkbox = document.querySelector("#transport");
  
  var conclusion = document.querySelector(".sum");
 
  
  //event for options from drop-down list
  // if you click on it, the whole list won't be visible anymore
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
      for (var j = 0; j < listPanelAll.length; j++) {
        listPanelAll[j].style.display = "none";
      }
    });
  }
  
  // event for choosing a type of chair and its price
  for (var i = 0; i < chairTypes.length; i++) {
    chairTypes[i].addEventListener("click", function() {
      panelLeft.children[0].innerText = this.innerText;
      panelRight.children[0].innerText = this.dataset.price;
      
      calculatePrice();
    });
  }
  
  // event for choosing a color and its price
  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function() {
      panelLeft.children[1].innerText = this.innerText;
      panelRight.children[1].innerText = this.dataset.price;
      
      calculatePrice();
    });
  }
  
  // event for choosing a pattern and its price
  for (var i = 0; i < patterns.length; i++) {
    patterns[i].addEventListener("click", function() {
      panelLeft.children[2].innerText = this.innerText;
      panelRight.children[2].innerText = this.dataset.price;
      
      calculatePrice();
    });
  }
  
  // event for choosing a transport
  // if you check a checkbox, you'll get a transport and its price
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      panelLeft.children[3].innerText = "Transport";
      panelRight.children[3].innerText = this.dataset.price;
    } else {
      panelLeft.children[3].innerText = "Transport";
      panelRight.children[3].innerText = 0;
    }
    
    calculatePrice();
  });
  
  // function for calculating a whole price
  function calculatePrice() {
    var sum = 0;
    for (var i = 0; i < panelRight.children.length; i++) {
     if (panelRight.children[i].innerText !== "") {
        sum += parseFloat(panelRight.children[i].innerText);
      } else {
        sum += 0;
      }
    }
    conclusion.innerText = sum + "zł";
  }
  
});
