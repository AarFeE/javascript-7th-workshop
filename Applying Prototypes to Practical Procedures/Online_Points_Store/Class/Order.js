export default function Order(date, products, activity, customer) {
    this.date = date;
    this.products = products;
    this.activity = activity;
    this.customer = customer;
}

Order.prototype.completeActivity = function () { };