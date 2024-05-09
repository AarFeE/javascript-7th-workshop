export default function Order(date, products, activity, customer) {
    this.date = date;
    this.products = products;
    this.activity = activity;
    this.customer = customer;
    this.sentState = false;
}

Order.prototype.sendOrder = function () {
    this.sentState = true;
}