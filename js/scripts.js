//back-end logic
function Pizza(sizeChoice, toppings) {
  this.sizeChoice = sizeChoice,
  this.toppings = toppings
} //should there be a semi-colon here?

Pizza.prototype.price = function() {
  var price = 4;
  if (this.sizeChoice === "medium") {
  price += 1.99;
  } else if (this.sizeChoice === "large") {
  price += 2.99;
  }


  if (this.toppings.length >= 5) {
    price += 3.25;
  } else if (this.toppings.length >= 3) {
    price += 2.15;
  }

  return price;
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

  //choose toppings, add to chosenPizza, calculate and show price
  $("form#toppings-selection").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function() {
      chosenPizza.toppings.push($(this).val());
    });

    //hide toppings, bring up results page
    $("#toppings").hide();
    $("#results-container, .add-pizza-btn").show();

    //show size and toppings on results page
    $("#results").append("<h3>A " + chosenPizza.sizeChoice + " pizza</h3>" + "<h3>with "+ chosenPizza.toppings.join(", ") + ".</h3>" + "<h3>Your price: $" + chosenPizza.price());



  });


});
