import User from "./User.js";
import Product from "../Product.js";

export default function Administrator(name, email, password, authorized = true) {
    User.call(this, name, email, password);
    this.authorized = authorized;
}

Administrator.prototype = Object.create(User.prototype);
Administrator.prototype.constructor = Administrator;

Administrator.prototype.AddProduct = function (name, requiredPoints, stock, price, category) {
    return new Product(name, requiredPoints, stock, price, category);
}
Administrator.prototype.EditProduct = function (aProduct) { }
Administrator.prototype.DeleteProduct = function (aProduct) { }
Administrator.prototype.DeleteUser = function (aUser) { }