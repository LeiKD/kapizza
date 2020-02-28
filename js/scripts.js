function what() {
  var x=document.getElementById("size").value 
  var y=document.getElementById("crust").value
  var z=document.getElementById("toppings").value
  var n=document.getElementById("number").value
  var d=document.getElementById("delivery").value
  document.getElementById("x").innerHTML= n + x
  document.getElementById("y").innerHTML= y
  document.getElementById("z").innerHTML= z
  if (n<1||n>10) {
    alert("Please input the number of pizzas you want between 1 and 10!")
  } else if (d==="Delivery to your door for Ksh 100/=") {
    var where=prompt("Please input your location here...")
    alert("Your package will be promptly delivered at " + where + " promptly. Thank you for using Kapizza services!")
  } else {
    alert("Please  make sure you pick-up your package at  our premises at no delivery cost. Thank you!")
  }
}
$(document).ready(function() {
  $(".place").click(function() {
    $("#summary").slideToggle()
    $(".how").slideToggle()   
  })
})