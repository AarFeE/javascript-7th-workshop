import Vehicle from "./Vehicle.js"

export default class TransportVehicle extends Vehicle {
    constructor(fuelConsumption, maxSpeed, weight, passengers, technicalCertificate, civilEnsurance) {
        super(fuelConsumption, maxSpeed, weight);
        this.passengers = passengers;
        this.technicalCertificate = technicalCertificate;
        this.civilEnsurance = civilEnsurance;
    }

    checkEfficiency() {
        return super.checkEfficiency() && (this.passengers > 10 && this.technicalCertificate == true && this.civilEnsurance == true);
    }
}