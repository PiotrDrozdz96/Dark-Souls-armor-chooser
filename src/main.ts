import { EquipmentBase } from './app/equipment-base';
import { Population } from './app/models/Population';

const base = new EquipmentBase('upgrade');
const maxWeight = 25.45;
const evolutionNumber = 100;
const populationSize = 20000;

let population: Population;

base.ready().subscribe(result => {
    if (result === true) {
        start();
    }
});

function start() {
    makePopulation();
    // console.log(population.population);
    population.getBest(maxWeight).show();

}

function makePopulation() {
    population = new Population(populationSize, base);
}


