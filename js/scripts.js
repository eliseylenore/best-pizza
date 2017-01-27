//back-end logic
function Pizza(sizeChoice, toppings) {
  this.sizeChoice = sizeChoice,
  this.toppings = toppings
}



//front-end logic
$(document).ready(function() {
  //create chosenPizza instance
  var chosenPizza = new Pizza("", []);

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
    console.log(chosenPizza.toppings);
    $("#toppings").hide();
    $("#results").show();
    //make toppings a string, separated by comma
    chosenPizza.toppings.join(", ");
  });


});
