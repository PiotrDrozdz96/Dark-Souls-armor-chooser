export type EqArg = 'Fiz' | 'Mag' | 'Ogn' | 'Błysk' | 'Równow' | 'Krwaw' | 'Truciz' | 'Kląt' | 'Main';


export class Equipment {
    'Nazwa': string;
    'Wytrzymałość': number;
    'Waga': number;
    'Fiz': number;
    'Mag': number;
    'Ogn': number;
    'Błysk': number;
    'Równow': number;
    'Krwaw': number;
    'Truciz': number;
    'Kląt': number;
    'Main': number;
    'Nazwa zestawu zbroi': string;

    constructor(equipment) {
        Object.keys(equipment).forEach(key => {
            if (key !== 'Nazwa' && key !== 'Nazwa zestawu zbroi') {
                this[key] = Number(equipment[key]);
            } else {
                this[key] = equipment[key];
            }

        });
    }

    public ochrona(): number {
        return this.Fiz + this.Mag + this.Ogn + this.Błysk;
    }

    public ochrPerWaga(): number {
        return this.ochrona() / this.Waga;
    }

    public show(): string {
        return this.Nazwa + ', Ochrona: ' + this.ochrona() + ', Waga: ' + this.Waga + '. Ochr/Waga: ' + this.ochrPerWaga();
    }
}
