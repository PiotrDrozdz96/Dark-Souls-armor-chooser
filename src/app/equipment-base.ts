import * as xlsxj from 'xlsx-to-json';
import { BehaviorSubject, Observable } from 'rxjs';

import { Equipment } from './models/Equipment';

export class EquipmentBase {

    private hełmy: Array<Equipment> = undefined;
    private nogawice: Array<Equipment> = undefined;
    private rękawice: Array<Equipment> = undefined;
    private zbroje: Array<Equipment> = undefined;

    private observator = new BehaviorSubject<boolean>(false);

    constructor(folder: string, sets?: Array<string>) {
        this.openXlsx(folder, 'hełmy', sets);
        this.openXlsx(folder, 'nogawice', sets);
        this.openXlsx(folder, 'rękawice', sets);
        this.openXlsx(folder, 'zbroje', sets);
    }

    private async openXlsx(folder: string, file: string, sets?: Array<string>) {
        xlsxj({
            input: 'assets/' + folder + '/' + file + '.xlsx',
            output: null
        }, (err, result) => {
            this[file] = result.map(equipment => new Equipment(equipment));
            if (sets) {
                const tempBase = sets.map(setName => this[file].find(equipment => equipment['Nazwa zestawu zbroi'] === setName));
                this[file] = tempBase.filter(equipment => equipment !== undefined);
            }
            if (Object.values(this).every(value => value !== undefined)) {
                this.observator.next(true);
            }
        });
    }

    public ready(): Observable<boolean> {
        return this.observator.asObservable();
    }

    public getRandom(slot: string) {
        return this[slot][Math.floor(Math.random() * this[slot].length)];
    }

}
