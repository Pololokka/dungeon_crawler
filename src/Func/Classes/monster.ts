//@ts-nocheck

import { chooseRarity } from '../chooseRarity';

const monterProbabilities = [0.5, 0.3, 0.14, 0.06];

const randomMonster = (monsterArray: []) => {
  const monster = monsterArray[Math.floor(Math.random() * monsterArray.length)];
  return monster;
};

export const chooseMonster = (playerLvl: number, difficultyMod: number) => {
  const monsterProb = chooseRarity(monterProbabilities);
  let avaiableMonsters = [];
  let monster;
  let chosenMonster;

  switch (monsterProb) {
    case 1:
      avaiableMonsters = [Troll, Bugbear, Owlbear];
      monster = randomMonster(avaiableMonsters);

      return (chosenMonster = new monster(playerLvl, difficultyMod));
      break;

    case 2:
      avaiableMonsters = [Golem, Ghoul, Warg];
      monster = randomMonster(avaiableMonsters);

      return (chosenMonster = new monster(playerLvl, difficultyMod));
      break;

    case 3:
      avaiableMonsters = [Lich, AbyssalChicken];
      monster = randomMonster(avaiableMonsters);

      return (chosenMonster = new monster(playerLvl, difficultyMod));
      break;

    default:
      avaiableMonsters = [Goblin, Wolf, Thug, Orc];
      monster = randomMonster(avaiableMonsters);

      return (chosenMonster = new monster(playerLvl, difficultyMod));
      break;
  }
};

class Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    this.str = Math.ceil((Math.random() * 2 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 2 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 2 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 2 + _playerLvl) * _difficultyMod);
    this.per = Math.ceil((Math.random() * 2 + _playerLvl) * _difficultyMod);
    this.damageDice = 4;
    this.maxHP = Math.ceil(
      (Math.random() * this.con + _playerLvl) * _difficultyMod,
    );

    this.monsterCR = Math.floor(
      (this.str + this.con + this.dex + this.agi + this.per) / 2,
    );

    this.exp = this.monsterCR + _difficultyMod;
  }
}

class Goblin extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Goblin';

    this.str = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
  }
}

class Wolf extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Lobo';

    this.con = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
  }
}

class Thug extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Bandido';

    this.str = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
  }
}

class Orc extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Orc';

    this.str = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 0 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

class Troll extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Troll';

    this.str = Math.ceil((Math.random() * 2 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
  }
}

class Bugbear extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Bugbear';

    this.dex = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

class Owlbear extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Corujurso';

    this.agi = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

class Golem extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Golem';

    this.str = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 0 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

class Ghoul extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Ghoul';

    this.str = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 0 + _playerLvl) * _difficultyMod);
    this.damageDice = 8;
  }
}

class Warg extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Warg';

    this.str = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

class Lich extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Lich';

    this.str = Math.ceil((Math.random() * 6 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.damageDice = 10;
  }
}

class AbyssalChicken extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Galinha Abissal';

    this.str = Math.ceil((Math.random() * 7 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
    this.damageDice = 10;
  }
}
