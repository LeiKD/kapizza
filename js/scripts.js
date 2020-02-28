function what() {
  var x=document.getElementById("size").value 
  var y=document.getElementById("crust").value
  var z=document.getElementById("toppings").value
  var n=document.getElementById("number").value
  document.getElementById("x").innerHTML= n + x
  document.getElementById("y").innerHTML= y
  document.getElementById("z").innerHTML=z
  if (n<1||n>10) {
    alert("Please input the number of pizzas you want between 1 and 10!")
  } else {
  }
}
$(document).ready(function() {
  $(".place").click(function() {
    $("#summary").slideToggle()
    $(".how").slideToggle()   
  })
})