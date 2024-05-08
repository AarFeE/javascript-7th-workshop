import User from "./User.js";
import Order from "../Order.js";

export default function Customer(name, email, password, totalPoints = 0) {
    User.call(this, name, email, password);
    this.totalPoints = totalPoints;
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.CreateOrder = function (date, products, activity) {
    return new Order(date, products, activity, this);
}
Customer.prototype.DeleteOrder = function () { }
Customer.prototype.addProduct = function (anArray) { }
Customer.prototype.editProduct = function (aProduct) { }
Customer.prototype.deleteProduct = function (aProduct) { }
Customer.prototype.addPoints = function () { }
Customer.prototype.redeemPoints = function () { }