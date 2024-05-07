function DigitalProduct(name, requiredPoints, stock, price, category, url) {
    Product.call(this, name, requiredPoints, stock, price, category);
    this.url = url;
}

DigitalProduct.prototype = Object.create(Product.prototype);
DigitalProduct.prototype.constructor = DigitalProduct;

DigitalProduct.prototype.updateInfo = function () { }
DigitalProduct.prototype.getInfo = function () { }
DigitalProduct.prototype.getProductEmail = function () { }
DigitalProduct.prototype.download = function () { }
