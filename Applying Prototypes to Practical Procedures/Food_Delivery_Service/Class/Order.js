export default function Order(customer, restaurant, orderDetails) {
    this.customer = customer;
    this.restaurant = restaurant;
    this.orderDetails = orderDetails;
    this.orderState = "IN QUEUE";
}

Order.prototype.updateState = () => {
    if (this.orderState == "IN QUEUE") {
        this.orderState = "IN PREPARATION";
    }
    else if (this.orderState == "IN PREPARATION") {
        this.orderState = "DELIVERED";
    }
}

Order.prototype.getTotalCost = () => {
    return this.orderDetails;
}