export default function Product(name, requiredPoints, stock, price, category) {
    this.name = name;
    this.requiredPoints = requiredPoints;
    this.stock = stock;
    this.price = price;
    this.category = category;
}

Product.prototype.updateInfo = function () { }
Product.prototype.getInfo = function () { }
Product.prototype.paloo = function () { console.log("Paloo :D"); }