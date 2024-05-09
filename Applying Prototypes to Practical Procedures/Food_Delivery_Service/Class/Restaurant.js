import Dish from "./Dish.js";

export default function Restaurant(name, address) {
    this.name = name;
    this.address = address;
    this.menu = [];
}

Restaurant.prototype.AddDish = (name, price, ingredients) => {
    this.menu.push(new Dish(name, price, ingredients));
}

Restaurant.prototype.UpdateDish = (name) => {
    let dish = this.menu.find((dish) => dish.name == name);
    if (dish) {
        return dish;
    }
}

Restaurant.prototype.deleteDish = (name) => {
    this.menu.pop((dish) => dish.name == name);
}
