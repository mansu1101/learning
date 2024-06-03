/**
 * Consider an application where we have to create and use all types of vehicles. 
 * There are motor vehicles (cars, buses, trucks, motorcycles), railed vehicles (trains, trams), 
 * aircraft (airplanes, helicopters), and watercraft (ships, boats). 
 * Thus, instead of creating instances by calling the constructor of each class individually, 
 * we can implement the Factory pattern as follows:
 */

import Motorvehicle from './Motorvehicle';
import Aircraft from './Aircraf';
import Railvehicle from './Railvehicle';

const VehicleFactory = (type, make, model, year) => {
  if (type === car) {
    return new Motorvehicle('car', make, model, year);
  } else if (type === airplane) {
    return new Aircraft('airplane', make, model, year);
  } else if (type === helicopter) {
    return new Aircraft('helicopter', make, model, year);
  } else {
    return new Railvehicle('train', make, model, year);
  }
}

module.exports = VehicleFactory;

// how to call it?
const audiAllRoad = VehicleFactory('car', 'Audi', 'A6 Allroad', '2020');


// Advanctage of using factory design pattern
// The benefit of using the Factory design pattern is that it decouples the objects' constructions 
// from the objects themselves. You can also introduce new objects into your 
// application without breaking existing code. Lastly, it helps you organize
// your code better because all the code related to creating instances is in one place. 

// To recap:
// 1. Factory pattern provides an interface/abstract class for creating objects.
// 2. You can create different objects by using the same interface/abstract class.
// 3. It improves the structure of the code and makes it easier to maintain it.