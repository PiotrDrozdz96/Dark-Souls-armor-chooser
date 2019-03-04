# Dark Souls armor chooser

### About
Dark Souls armor chooser is typescript application, based on the selected weight and attribute chooses the best armor set. Application using a genetic algorithm.

### Requirements
All requirements are in the package.json
'npm install' command will install all dependencies

### Config in src/main.ts
* populationSize (default: 100)
* selectionSize (default: 5)
* numberOfEvolution (default: 100)
* maxWeight is maximum weight of searched set
* armorType = 'basic' | 'upgrade' ('basic' contain armors without upgrade, 'upgrade' contain armors with maximum lvl of upgrade')
* mainParam = 'Main'(Fiz+Mag+Ogn+Błysk) | 'Fiz' | 'Mag' | 'Ogn' | 'Błysk' | 'Równow' | 'Krwaw' | 'Truciz' | 'Kląt' 
* myArmorSets is Array with your set names
* base = new EquipmentBase(armorType, mainParam, myArmorSets) --> myArmorSets is optional, without this application will searching all armor sets

### Running
in src directory 'ts-node main.ts', or use another typescript compiler and runner
