//back-end logic
function Pizza(sizeChoice, toppings) {
  this.sizeChoice = sizeChoice,
  this.toppings = toppings
}; //should there be a semi-colon here?

Pizza.prototype.price = function() {
  var price = 4;
  if (this.sizeChoice === "medium") {
  price += .99;
  } else if (this.sizeChoice === "large") {
  price += 1.99;
  }


  if (this.toppings.length >= 5) {
    price += 3.25;
  } else if (this.toppings.length >= 3) {
    price += 2.15;
  }

  console.log(this.toppings.length);
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

    //show price of selected pizza
    $("#price-result").text(chosenPizza.price());

    //show size and toppings on results page
    $("#size-result").text(chosenPizza.sizeChoice);
    $("#toppings-result").text(chosenPizza.toppings.join(", "));


  });


});
