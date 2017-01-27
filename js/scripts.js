//back-end logic
function Pizza(sizeChoice, toppings) {
  this.sizeChoice = sizeChoice,
  this.toppings = toppings
}; //should there be a semi-colon here?

function calculatePrice(sizeChoice, toppings) {
  var price = 4;

  if (sizeChoice === "medium") {
  price += .99;
  } else if (sizeChoice === "large") {
  price += .99;
  }

  if (toppings.length < 5) {
    price += 3;
  } else if (toppings.length < 3) {
    price += 2;
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

  //choose toppings, add to chosenPizza
  $("form#toppings-selection").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function() {
      chosenPizza.toppings.push($(this).val());
    });

    //hide toppings, bring up results page
    $("#toppings").hide();
    $("#results").show();

    //calculate price
    var priceOfChosenPizza = calculatePrice(chosenPizza.sizeChoice, chosenPizza.toppings);
    console.log(priceOfChosenPizza);

    //make toppings a string, separated by comma
    chosenPizza.toppings = chosenPizza.toppings.join(", ");

    //show size and toppings on results page
    $("#size-result").text(chosenPizza.sizeChoice);
    $("#toppings-result").text(chosenPizza.toppings);

    //show price of selected pizza
    $("#price-result").text(priceOfChosenPizza);

  });


});
