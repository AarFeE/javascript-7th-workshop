import Vehicle from "./Vehicle.js";

export default class CargoVehicle extends Vehicle {
    constructor(fuelConsumption, maxSpeed, weight, maxWeight, volume) {
        super(fuelConsumption, maxSpeed, weight);
        this.maxWeight = maxWeight;
        this.volume = volume;
    }

    checkEfficiency() {
        return super.checkEfficiency() && (this.maxWeight > 1000 && this.volume > 10)
    }
}