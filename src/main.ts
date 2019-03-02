import { EquipmentBase } from './app/equipment-base';
import { Population } from './app/models/Population';
import { ArmorSet } from './app/models/ArmorSet';

const evolutionNumber = 100;
const populationSize = 100;
const selectionSize = 5;
const numberOfEvolution = 100;

const myArmorSets = [
    'Pusty',
    'Szkarłatne szaty',
    'Zestaw Wiedźmy',
    'Zestaw Tunelarza',
    'Zestaw Havela',
    'Zestaw srebrnego rycerza',
    'Hełm Gargulca',
    'Hełm Dzika',
    'Symbol Skąpstwa'
];

const base = new EquipmentBase('upgrade');
const maxWeight = 25.45;

let population: Population;

base.ready().subscribe(result => {
    if (result === true) {
        start();
    }
});

function start() {
    makePopulation();
    for (let i = 1; i < numberOfEvolution; i++) {
        evolvePopulation();
    }
    population.getBest(maxWeight).show();
}

function makePopulation() {
    population = new Population(populationSize, base);
}

function evolvePopulation() {
    const newPopulation = new Population(population.populationSize());
    newPopulation.saveSet(0, population.getBest(maxWeight));
    for (let i = 1; i < newPopulation.populationSize(); i++) {
        const parent1: ArmorSet = population.getParent(selectionSize, maxWeight);
        const parent2: ArmorSet = population.getParent(selectionSize, maxWeight);
        const child: ArmorSet = mutation(crossover(parent1, parent2));
        newPopulation.saveSet(i, child);
    }
    population = newPopulation;
}

function crossover(parent1: ArmorSet, parent2: ArmorSet) {
    const childPopulation = new Population(6);
    childPopulation.saveSet(0, parent1);
    childPopulation.saveSet(1, parent2);
    const index1 = Math.floor(Math.random() * 4);
    const index2 = Math.floor(Math.random() * 4);
    childPopulation.saveSet(2, parent1.changeEquipment(index1, parent2.getEquipment(index1)));
    childPopulation.saveSet(3, parent1.changeEquipment(index2, parent2.getEquipment(index2)));
    childPopulation.saveSet(4, parent2.changeEquipment(index1, parent1.getEquipment(index1)));
    childPopulation.saveSet(5, parent2.changeEquipment(index2, parent1.getEquipment(index2)));
    return childPopulation.getBest(maxWeight);
}

function mutation(child: ArmorSet): ArmorSet {
    const mutationSet = new ArmorSet(base);
    return crossover(child, mutationSet);
}


