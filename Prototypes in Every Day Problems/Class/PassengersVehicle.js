import Vehicle from "./Vehicle.js"

export default class TransportVehicle extends Vehicle {
    constructor(fuelConsumption, maxSpeed, weight, passengers) {
        super(fuelConsumption, maxSpeed, weight);
        this.passengers = passengers;
    }

    checkEfficiency() {
        return super.checkEfficiency() && (this.passengers > 10);
    }
}