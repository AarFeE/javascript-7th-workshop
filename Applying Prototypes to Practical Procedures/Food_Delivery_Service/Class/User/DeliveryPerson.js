import User from "./User.js";

export default function DeliveryPerson(name, email, password, vehicle, availability) {
    User.call(this, name, email, password);
    this.vehicle = vehicle;
    this.availability = availability;
}

DeliveryPerson.prototype = Object.create(User.prototype);
DeliveryPerson.prototype.constructor = DeliveryPerson;

DeliveryPerson.prototype.acceptOrder = function () { }
DeliveryPerson.prototype.finishOrder = function () { }
DeliveryPerson.prototype.updateAvailability = function () { this.availability = !this.availability }
DeliveryPerson.prototype.updateLocation = function () { }
