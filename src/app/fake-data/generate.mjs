import { faker } from '@faker-js/faker';

let database = { clientes: []};

for (let i = 1; i < 21; i++) {
  database.clientes.push({
    id: i,
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    dni: faker.datatype.number() + faker.random.alpha().toLocaleUpperCase(),
    email: faker.internet.email(),
  });

}

console.log(JSON.stringify(database));
