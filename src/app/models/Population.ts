import { ArmorSet } from './ArmorSet';
import { EquipmentBase } from '../equipment-base';

export class Population {

    population: Array<ArmorSet>;

    constructor(populationSize: number, equipmentBase?: EquipmentBase) {
        this.population = new Array(populationSize);
        if (equipmentBase) {
            for (let i = 0; i < this.population.length; i++) {
                this.population[i] = new ArmorSet(equipmentBase);
            }
        }
    }

    public populationSize(): number {
        return this.population.length;
    }

    private getArmorSet(index: number): ArmorSet {
        return this.population[index];
    }

    public saveSet(index: number, set: ArmorSet) {
        this.population[index] = set;
    }

    public getBest(maxWeight: number): ArmorSet {
        const filtered = this.population.filter(set => set.waga() <= maxWeight);
        if (filtered.length === 0) {
            const min = Math.min(...this.population.map(set => set.waga()));
            return this.population[this.population.findIndex(set => set.waga() === min)];
        } else {
            const max = Math.max(...filtered.map(set => set.ochrona()));
            return filtered[filtered.findIndex(set => set.ochrona() === max)];
        }
    }

    public getParent(selectionSize: number, maxWeight: number): ArmorSet {
        const miniPopulation = new Population(selectionSize);
        let randomId: number;
        for (let i = 0; i < selectionSize; i++) {
            randomId = Math.floor(Math.random() * this.populationSize());
            miniPopulation.saveSet(i, this.getArmorSet(randomId));
        }
        return miniPopulation.getBest(maxWeight);
    }
}
