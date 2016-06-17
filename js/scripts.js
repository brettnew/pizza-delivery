// Business Logic
function Pizza(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function () {
  var cost = 6;
  if (this.size === "Small"){
    cost += 0;
  } else if (this.size === "Medium"){
    cost += 2;
  } else if (this.size === "Large") {
    cost += 2;
  } else if (this.size === "Extra-Large") {
    cost += 1;
  } else {
    alert("Please pick your pizza size!");
  }
  if (this.toppings[0] === "extra-cheese") {
    cost += .75;
  }
  if (this.toppings[1] === "pepperoni") {
    cost += 1;
  }
  if (this.toppings[2] === "sausage") {
    cost += 1;
  }
  if (this.toppings[3] === "ham") {
    cost += 1;
  }
  if (this.toppings[4] === "bacon") {
    cost += 1;
  }
  if (this.toppings[5] === "onions") {
    cost += .5;
  }
  if (this.toppings[6] === "greenpeppers") {
    cost += .5;
  }
  if (this.toppings[7] === "tomatoes") {
    cost += .5;
  }
  if (this.toppings[8] === "pineapple") {
    cost += 1;
  }
  return cost;
};



// Front-end Logic
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();

    var name = $("input.user-name").val();
    var size = $("select.pizza-size").val();
    var toppings = [$("#extra-cheese:checked").val(),$("#pepperoni:checked").val(),$("#sausage:checked").val(),$("#ham:checked").val(),$("#bacon:checked").val(),$("#onions:checked").val(),$("#greenpeppers:checked").val(),$("#tomatoes:checked").val(),$("#pineapple:checked").val()]
    var newPizza = new Pizza (name, size, toppings);
    newPizza.price();
    $(".user-name").text(newPizza.name);
    $(".pizza-size").text(newPizza.size);
    $(".pizza-toppings").text(newPizza.toppings);


    $(".order-total").text(newPizza.price());

  });
});
