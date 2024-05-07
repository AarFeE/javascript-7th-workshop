function PhysicalProduct(name, requiredPoints, stock, price, category, availableUnits) {
    Product.call(this, name, requiredPoints, stock, price, category);
    this.availableUnits = availableUnits;
}

PhysicalProduct.prototype = Object.create(Product.prototype);
PhysicalProduct.prototype.constructor = PhysicalProduct;

PhysicalProduct.prototype.updateInfo = function () { }
PhysicalProduct.prototype.getInfo = function () { }
PhysicalProduct.prototype.sendProduct = function () { }