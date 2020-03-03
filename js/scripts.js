
function what() {
  var x=parseInt(document.getElementById("size").value)
  var y=parseInt(document.getElementById("crust").value)
  var z=parseInt(document.getElementById("toppings").value)
  var n=parseInt(document.getElementById("number").value)
  var d=parseInt(document.getElementById("delivery").value)
  var t= n*(x + y + z) + d
  document.getElementById("t").innerHTML= "Your total cost for the order is Ksh " + t + "/=."
  if (x===1000) {
    document.getElementById("x").innerHTML= n + " large-sized pizza(s) at Ksh 1000/= each"
  } else if (x===800) {
    document.getElementById("x").innerHTML= n + " medium-sized pizza(s) at Ksh 800/= each"
  } else if (x===550) {
    document.getElementById("x").innerHTML= n + " regular-sized pizza(s) at Ksh 550/= each"
  } 
  if (y===100) {
    document.getElementById("y").innerHTML= "With crispy crust(s) at Ksh 100/= each"
  } else if (y===80) {
    document.getElementById("y").innerHTML= "With stuffed crust(s) at Ksh 80/= each"
  } else if (y===60) {
    document.getElementById("y").innerHTML= "With gluten-free crust(s) at Ksh 60/= each"
  }
  if (z===50) {
    document.getElementById("z").innerHTML= "With pepperoni topping(s) at Ksh 50/= each"
  } else if (z===80) {
    document.getElementById("z").innerHTML= "With mushroom topping(s) at Ksh 80/= each"
  } else if (z===100) {
    document.getElementById("z").innerHTML= "With cheese topping(s) at Ksh 100/= each"
  } 
  if (d===100) {
    document.getElementById("d").innerHTML= "Delivery to your doorstep at Ksh 100/="
    var where= prompt("Please input your street address (within Nairobi) here...")
    alert("We have received your order. Your package will be promptly delivered at " + "'" + where + "'" + " promptly. Thank you for using Kapizza services!")
  } else {
    alert("We have received your order. Please  make sure you pick-up your package at  our premises at no delivery cost. Thank you!")
  }
}
$(document).ready(function() {
  $(".place").click(function() {
    $("#summary").slideToggle()
    $(".how").slideToggle()   
  })
})
function feedback() {
  var name= document.getElementById("name").value
  alert("Hi " + name + ". Be rest assured that we have received your feedback. We will definitely put your response into consideration in the hope that it will improve our customer service. Thank you!")
}