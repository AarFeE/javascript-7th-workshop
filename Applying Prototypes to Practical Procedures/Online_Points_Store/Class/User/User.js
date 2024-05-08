export default function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.addProduct = function () { }
User.prototype.editProduct = function () { }
User.prototype.deleteProduct = function () { }
User.prototype.aloo = function () { return console.log("Aloo :D"); }
