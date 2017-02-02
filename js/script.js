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
  //console.log(options);
    
  var typeOfChair = document.querySelector(".list_panel");
  //console.log(typeOfChair);
      
  var typeOfChairChildren = typeOfChair.children;
  //console.log(typeOfChairChildren);
      
  var title = document.querySelector(".title");
  //console.log(title);
  
  var titleValue = document.querySelector(".title.value");
  //console.log(titleValue);
  
  var colors = document.querySelector(".colors");
  //console.log(colors);
  
  var colorsChildren = colors.children;
  //console.log(colorsChildren);
  
  var color = document.querySelector(".color");
  //console.log(color);
  
  var colorValue = document.querySelector(".color.value");
  //console.log(colorValue);
  
  var patterns = document.querySelector(".patterns");
  //console.log(patterns);
  
  var pattern = document.querySelector(".pattern")
  //console.log(pattern);
  
  var patternsChildren = patterns.children;
  //console.log(patternsChildren);
  
  var patternsValue = document.querySelector(".pattern.value");
  //console.log(patternsValue);
  
  var checkbox = document.querySelector("#transport");
  //console.log(checkbox);
  
  var transport = document.querySelector(".transport");
  //console.log(transport);
  
  var transportValue = document.querySelector(".transport.value");
  //console.log(transportValue);
  
  var panelRight = document.querySelector(".panel_right");
  //console.log(panelRight);
  
  var panelRightValues = panelRight.children;
  //console.log(panelRightValues);
  
  var conclusion = document.querySelector(".sum");
  //console.log(conclusion);
  
      
  for (var i = 0; i < typeOfChairChildren.length; i++) {
    typeOfChairChildren[i].addEventListener("click", function() {
      
      title.innerText = this.innerText;
      titleValue.innerText = this.dataset.price;
    });
  }
  
  for (var i = 0; i < colorsChildren.length; i++) {
    colorsChildren[i].addEventListener("click", function() {
      color.innerText = this.innerText;
      colorValue.innerText = this.dataset.price;
    });
  }
  
  for (var i = 0; i < patternsChildren.length; i++) {
    patternsChildren[i].addEventListener("click", function() {
      pattern.innerText = this.innerText;
      patternsValue.innerText = this.dataset.price;
    });
  }
  
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      transport.innerText = "Transport";
      transportValue.innerText = this.dataset.price;
    } else {
      transportValue.innerText = "0";
    }
  });

  function calculatePrice() {
    var sum = 0;
    if (panelRightValues.innerText !== "") {
      for (var i = 0; i < panelRightValues.length; i++) {
        sum += parseInt(panelRightValues[i].innerText);
      }
    } else {
      sum = 0;
      }
    conclusion.innerText = sum + "zł";
  }
  calculatePrice();
    
});
