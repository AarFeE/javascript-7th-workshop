export default class Vehicle {
    constructor(fuelConsumption, maxSpeed, weight) {
        this.fuelConsumption = fuelConsumption;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
    }

    checkEfficiency() {
        return this.fuelConsumption < 10 && this.maxSpeed > 100 && this.weight < 2000;
    }
}