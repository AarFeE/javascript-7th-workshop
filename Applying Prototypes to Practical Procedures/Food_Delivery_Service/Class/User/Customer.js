import User from "./User.js";
import Order from "../Order.js";

export default function Customer(name, email, password, address, phoneNumber) {
    User.call(this, name, email, password);
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.pastOrders = [];
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.CreateOrder = function (date, products, activity) {
    const newOrder = new Order(date, products, activity, this);
    this.pastOrders.push(newOrder);
    return newOrder;
}
Customer.prototype.DeleteOrder = function (anOrder) {
    this.pastOrders.pop(anOrder);
}
Customer.prototype.getPastOrders = function () { return this.pastOrders }