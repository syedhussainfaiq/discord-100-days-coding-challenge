// Q 37:
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with rhe message \"").concat(message, "\" printed on\n    it"));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Dive into Coding");
// Q 38:
function discribe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
discribe_city("Karachi");
discribe_city("Lahore");
discribe_city("Tokyo", "Japan");
discribe_city("Dehli", "India");
discribe_city("New york", "Amrica");
// Q 39 :
function city_country(city, country) {
    return "".concat(city, " ,").concat(country);
}
console.log("Karichi", ("Pakistan"));
console.log("Dehli", ("India"));
console.log("Paris", ("Franse"));
