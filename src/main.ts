import { EquipmentBase } from './app/equipment-base';

const base = new EquipmentBase('basic');
const maxWeight = 32;
const evolutionNumber = 100;
const populationSize = 100;

base.ready().subscribe(result => {
    if (result === true) {
        start();
    }
});

function start() {
    console.log(base.get().obrPerWaga());
}


