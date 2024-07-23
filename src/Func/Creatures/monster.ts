//@ts-nocheck

export class Monster {
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

export class Goblin extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Goblin';

    this.str = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
  }
}

export class Wolf extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Lobo';

    this.con = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
  }
}

export class Thug extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Bandido';

    this.str = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
  }
}

export class Orc extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Orc';

    this.str = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 0 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

export class Troll extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Troll';

    this.str = Math.ceil((Math.random() * 2 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
  }
}

export class Bugbear extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Bugbear';

    this.dex = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

export class Owlbear extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Corujurso';

    this.agi = Math.ceil((Math.random() * 1 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

export class Golem extends Monster {
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

export class Ghoul extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Ghoul';

    this.str = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 0 + _playerLvl) * _difficultyMod);
    this.damageDice = 8;
  }
}

export class Warg extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Warg';

    this.str = Math.ceil((Math.random() * 4 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.damageDice = 6;
  }
}

export class Lich extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.name = 'Lich';

    this.str = Math.ceil((Math.random() * 6 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 3 + _playerLvl) * _difficultyMod);
    this.damageDice = 10;
  }
}

export class AbyssalChicken extends Monster {
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
