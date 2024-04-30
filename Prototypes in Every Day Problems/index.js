import AquaticVehicle from "./Class/AquaticVehicle.js";
import CargoVehicle from "./Class/CargoVehicle.js";
import PassengersVehicle from "./Class/PassengersVehicle.js"
import TransportVehicle from "./Class/TransportVehicle.js";
import Vehicle from "./Class/Vehicle.js";

const lambo = new Vehicle(7, 340, 700);
console.log(lambo.checkEfficiency() ? "This car is efficient!" : "This car isn't efficient!");

const bigChungus = new CargoVehicle(9, 150, 1900, 9000, 15);
console.log(bigChungus.checkEfficiency() ? "This car is efficient!" : "This car isn't efficient!");

const theBus = new TransportVehicle(8, 140, 1200, 20, true, true);
console.log(theBus.checkEfficiency() ? "This car is efficient!" : "This car isn't efficient!");

const thePassengerCarrier = new PassengersVehicle(8, 140, 1200, 20)
console.log(thePassengerCarrier.checkEfficiency() ? "This car is efficient!" : "This car isn't efficient!");

const theBoat = new AquaticVehicle(8, 110, 1400, 12, true, true, true);
console.log(theBoat.checkEfficiency() ? "This car is efficient!" : "This car isn't efficient!");