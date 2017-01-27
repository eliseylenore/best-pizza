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
//create prices array to access when calculate total price
var totalPrice=0;

//front-end logic
$(document).ready(function() {

  //choose size, add to chosenPizza
  $("form#size-selection").submit(function(event) {
    event.preventDefault();
    chosenPizza.sizeChoice = $("input:radio[name=size]:checked").val();
    $("#sizes").hide();
    $("#toppings").show();
  });//end submission event for size selection

  //choose toppings, add to chosenPizza, calculate and show price
  $("form#toppings-selection").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function() {
      chosenPizza.toppings.push($(this).val());
    });//end .each loop for checked toppings

    //hide toppings, bring up results page
    $("#toppings").hide();
    $("#results-container, .add-pizza-btn").show();

    //calculate total price by looping through existing pizzas
    totalPrice +=  chosenPizza.price();

    //show size and toppings on results page
    $("#results").append("<li><p>A " + chosenPizza.sizeChoice + " pizza</h3>" + "<p>with "+ chosenPizza.toppings.join(", ") + ".</p>" + "<p>Your price: $<span class='individual-price'>" + chosenPizza.price() + "</span></p></li>");
    //show total price on results page
    $("#total-price").text("Total price: $" + totalPrice);


  });//end submission event for toppings selection

  $(".add-pizza-btn").click(function() {
    $("#results-container, .add-pizza-btn").hide();
    $("#sizes").show();
  });//end click function for pizza button
});//end document ready
