function ProductCategory(name, description) {
    this.name = name;
    this.description = description;
}

ProductCategory.prototype.listProducts = function (anArray, aName) {
    return anArray.filter((value) => value.category.name == aName);
}