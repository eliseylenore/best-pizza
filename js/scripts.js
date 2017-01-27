//back-end logic
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}



//front-end logic
$("form#sizes").submit(function(event) {
  event.preventDefault();
});
