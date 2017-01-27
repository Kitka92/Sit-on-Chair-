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
  
  
// CENNIK
  /*
  var plan = document.querySelectorAll(".plan");
  var topCircle = document.querySelectorAll(".topCircle");
  var lilCircle = document.querySelectorAll(".lilCircle");
  var basicPlan = document.querySelectorAll(".basicPlan");
  var bigCircle = document.querySelectorAll(".bigCircle>span");
  var bigCircleSup = document.querySelectorAll(".bigCircle>sup");
  var odds = document.querySelectorAll(".options:nth-child(2n+1)");
  var even = document.querySelectorAll(".options:nth-child(even)");
  var buttons2 = document.querySelectorAll(".button2");
  
  for (var i = 0; i < plan.length; i++) {
    plan[i].addEventListener("click", function() {
      topCircle.style.backgroundColor = "pink";
    });
  }
  */
});
