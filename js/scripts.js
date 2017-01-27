//back-end logic
function Pizza(sizeChoice, toppings) {
  this.sizeChoice = sizeChoice,
  this.toppings = toppings
}

//create a new Pizza!
var chosenPizza = new Pizza("", []);

//front-end logic
$(document).ready(function() {

  //choose size, add to chosenPizza
  $("form#size-selection").submit(function(event) {
    event.preventDefault();
    chosenPizza.sizeChoice = $("input:radio[name=size]:checked").val();
    $("#sizes").hide();
    $("#toppings").show();
  });

  //choose toppings, add to chosenPizza
  $("form#toppings-selection").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function() {
      chosenPizza.toppings.push($(this).val());
    });

    //hide toppings, bring up results page
    $("#toppings").hide();
    $("#results").show();

    //make toppings a string, separated by comma
    chosenPizza.toppings = chosenPizza.toppings.join(", ");
    console.log(chosenPizza.toppings);
  });


});
