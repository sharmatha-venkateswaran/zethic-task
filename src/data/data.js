import '../App.css';
import { faker } from '@faker-js/faker';
import 'react-virtualized/styles.css';
function Data(){
    const numberOfPeople = 100000;

    const peopleArray = Array.from({ length: numberOfPeople }, () => ({
      id: faker.datatype.number({ min: 100, max: 100000 }),
      name: faker.person.fullName(),
      address: faker.address.city(),
      country: faker.address.country(),
      age: faker.datatype.number({ min: 18, max: 80 }),
      occupation: faker.name.jobTitle(),
    }));
  
    const carsArray = Array.from({ length: numberOfPeople }, () => ({
      name: faker.vehicle.vehicle(),
      model: faker.vehicle.model(),
      maker: faker.vehicle.manufacturer(),
      age: faker.datatype.number({ min: 1, max: 10 }),
    }));
  
    const combinedArray = peopleArray.map((person, index) => ({
      person,
      vehicle: carsArray[index],
    }));
    return {combinedArray,carsArray,numberOfPeople};
}
export default Data;