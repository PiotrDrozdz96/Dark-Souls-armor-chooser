import { Set } from './Set';
import { EquipmentBase } from '../equipment-base';

export class Population {

    population: Array<Set>;

    constructor(populationSize: number, equipmentBase: EquipmentBase) {
        this.population = new Array(populationSize);
        for (let i = 0; i < this.population.length; i++) {
            this.population[i] = new Set(equipmentBase);
            // newTour.generateIndividual();
            // this.saveTour(i, newTour);
        }
    }

    public getBest(maxWeight: number): Set {
        const filtered = this.population.filter(set => set.waga() <= maxWeight);
        const max = Math.max(...filtered.map(set => set.fiz()));
        return filtered[filtered.findIndex(set => set.fiz() === max)];
    }
}
