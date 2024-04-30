import Vehicle from "./Vehicle.js";

export default class AquaticVehicle extends Vehicle {
    constructor(fuelConsumption, maxSpeed, weight, passengers, technicalCertificate, civilEnsurance, navigabilityCertificate) {
        super(fuelConsumption, maxSpeed, weight);
        this.passengers = passengers;
        this.technicalCertificate = technicalCertificate;
        this.civilEnsurance = civilEnsurance;
        this.navigabilityCertificate = navigabilityCertificate;
    }

    checkEfficiency() {
        return super.checkEfficiency() && (this.passengers > 10 && this.technicalCertificate == true, this.civilEnsurance == true, this.navigabilityCertificate == true)
    }
}