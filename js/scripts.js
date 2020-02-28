// var size= document.getElementById("size").value;
// var crust= document.getElementById("crust").value;
// var topping= document.getElementById("toppings").value;
// var number= parseInt(document.getElementById("number").value);
// var x= document.getElementById("delivery").value
// if (size==="large") {
//   var s1= "A large-sized pizza at Ksh 1000/="
// } else if (size==="medium") {
//   var s1= "A medium-sized pizza at Ksh 800/="
// } else {
//   var s1="A small-sized pizza at Ksh 550/="
// }
// function order() {
//   if (number==="") {
//     alert("Please make the necessary selections!")
//   } else if (number<1 || number>10) {
//     alert("Please enter a number between 1 and 10 pizzas")
//   } else if (size==="large"){
//     var s= parseInt(1000)
//   } else if (size==="medium") {
//     var s= parseInt(800)
//   } else if (size==="small") {
//     var s= parseInt(550)
//   } else if (topping==="bacon"||topping==="cheese") {
//     var t= parseInt(100)
//   } else if (x==="yes") {
//     var d= parseInt("100")
//   } else {
//     var s=parseInt(0)
//     var t=parseInt(50)
//     var d=parseInt(0)
//   }
//   var price= number*(s+t+d)
//   alert("Your price plus delivery is" + "Ksh."+ price +"/=." + "Thank you for using Kapizza services.")
// }

function what() {
  var x=document.getElementById("size").value 
  var y=document.getElementById("crust").value
  var z=document.getElementById("toppings").value
  document.getElementById("x").innerHTML= x
  document.getElementById("y").innerHTML= y
  document.getElementById("z").innerHTML=z

}
$(document).ready(function() {
  $(".place").click(function() {
    $("#summary").slideToggle()
    $(".how").slideToggle()   
  })
})