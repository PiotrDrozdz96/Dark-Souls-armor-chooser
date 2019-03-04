import * as xlsxj from 'xlsx-to-json';
import { BehaviorSubject, Observable } from 'rxjs';

import { Equipment, EqArg } from './Equipment';

export class EquipmentBase {

    private hełmy: Array<Equipment> = undefined;
    private nogawice: Array<Equipment> = undefined;
    private rękawice: Array<Equipment> = undefined;
    private zbroje: Array<Equipment> = undefined;

    private observator = new BehaviorSubject<boolean>(false);

    constructor(folder: string, egArg: EqArg, sets?: Array<string>) {
        this.openXlsx(folder, 'hełmy', egArg, sets);
        this.openXlsx(folder, 'nogawice', egArg, sets);
        this.openXlsx(folder, 'rękawice', egArg, sets);
        this.openXlsx(folder, 'zbroje', egArg, sets);
    }

    private async openXlsx(folder: string, file: string, eqArg: EqArg, sets?: Array<string>) {
        xlsxj({
            input: 'assets/' + folder + '/' + file + '.xlsx',
            output: null
        }, (err, result) => {
            this[file] = result.map(equipment => {
                if (eqArg === 'Main') {
                    equipment.Main = equipment.Fiz + equipment.Mag + equipment.Ogn + equipment.Błysk;
                } else {
                    equipment.Main = equipment[eqArg];
                }
                return new Equipment(equipment);
            });
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
