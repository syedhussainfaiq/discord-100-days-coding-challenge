// Q 34 :
var pizzaas = [" pepperoni", "margherita", "hawaiian"];
pizzaas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza,"));
});
console.log(" I realy love pizza!");
// Q 35:
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log(" A ".concat(animal, " would make a great pet"));
});
console.log("Any of these animals would make a great peat!");
// Q 35:
function make_shirt(size, message) {
    console.log(" Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed\n     on it."));
}
make_shirt("medium", "Code is Life");
