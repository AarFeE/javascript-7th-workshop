export default function Dish(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
}

Dish.prototype.getInfo = function () { return [this.name, this.price, this.ingredients] }