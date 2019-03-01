import { EquipmentBase } from '../equipment-base';
import { Equipment } from './Equipment';

export class Set {

    public hełm: Equipment;
    public nogawice: Equipment;
    public rękawice: Equipment;
    public zbroja: Equipment;

    constructor(equipmentBase: EquipmentBase) {
        this.hełm = equipmentBase.getRandom('hełmy');
        this.nogawice = equipmentBase.getRandom('nogawice');
        this.rękawice = equipmentBase.getRandom('rękawice');
        this.zbroja = equipmentBase.getRandom('zbroje');
    }

    public waga(): number {
        return this.hełm.Waga + this.nogawice.Waga + this.rękawice.Waga + this.zbroja.Waga;
    }

    public ochrona(): number {
        return this.hełm.ochrona() + this.nogawice.ochrona() + this.rękawice.ochrona() + this.zbroja.ochrona();
    }

    public fiz(): number {
        return this.hełm.Fiz + this.nogawice.Fiz + this.rękawice.Fiz + this.zbroja.Fiz;
    }

    public mag(): number {
        return this.hełm.Mag + this.nogawice.Mag + this.rękawice.Mag + this.zbroja.Mag;
    }

    public ogn(): number {
        return this.hełm.Ogn + this.nogawice.Ogn + this.rękawice.Ogn + this.zbroja.Ogn;
    }

    public błysk(): number {
        return this.hełm.Błysk + this.nogawice.Błysk + this.rękawice.Błysk + this.zbroja.Błysk;
    }

    public ochrPerWaga(): number {
        return (this.hełm.ochrPerWaga() + this.nogawice.ochrPerWaga() + this.rękawice.ochrPerWaga() + this.zbroja.ochrPerWaga()) / 4;
    }

    public show(): void {
        console.log(this.hełm.show());
        console.log(this.nogawice.show());
        console.log(this.rękawice.show());
        console.log(this.zbroja.show());
        console.log('waga całkowita: ' + this.waga());
        console.log('ochrona całkowita: ' + this.ochrona());
        console.log('fizyczne: ' + this.fiz());
        console.log('magiczne: ' + this.mag());
        console.log('ogniste; ' + this.ogn());
        console.log('błyskwice: ' + this.błysk());

    }
}
