//back-end logic
function Pizza(sizeChoice, toppings) {
  this.sizeChoice = sizeChoice,
  this.toppings = toppings
}



//front-end logic
$(document).ready(function() {
  var chosenPizza = new Pizza("",[]);

  $("form#size-selection").submit(function(event) {
    event.preventDefault();
    chosenPizza.sizeChoice = $("input:radio[name=size]:checked").val();
    console.log(chosenPizza.sizeChoice);
    $("#sizes").hide();
    $("#toppings").show();
  });
});
