//back-end logic
function Pizza(sizeChoice, toppings) {
  this.sizeChoice = sizeChoice,
  this.toppings = toppings
}
  var chosenPizza = new Pizza("",[]);


//front-end logic
$(document).ready(function() {


  $("form#size-selection").submit(function(event) {
    event.preventDefault();
    chosenPizza.sizeChoice = $("input:radio[name=size]:checked").val();
    $("#sizes").hide();
    $("#toppings").show();
  });

  $("form#toppings-selection").submit(function(event) {
    event.preventDefault();
    chosenPizza.toppings = $("input:checkbox[name=toppings]:checked").val();
    console.log(chosenPizza.toppings);
    $("#toppings").hide();
    $("#results").show();
  });

});
