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

    obrPerWaga(): number {
        return (this.Fiz + this.Mag + this.Ogn + this.Błysk) / this.Waga;
    }
}
