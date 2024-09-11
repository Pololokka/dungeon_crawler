//@ts-nocheck

export const playerChar = (
  playerClass: any,
  name: string,
  str: number,
  con: number,
  dex: number,
  agi: number,
  int: number,
  per: number,
  lvl: number,
) => {
  const possibleClasses = new Map([
    ['Bárbaro', Barbarian],
    ['Guerreiro', Fighter],
    ['Mateiro', Ranger],
    ['Ladrão', Rogue],
    ['Mago', Wizard],
  ]);

  const maker = possibleClasses.get(playerClass);
  return new maker(name, str, con, dex, agi, int, per, lvl);
};

class Player {
  constructor(
    _name: string,
    _strBought: number,
    _conBought: number,
    _dexBought: number,
    _agiBought: number,
    _intBought: number,
    _perBought: number,
    _playerLvl: number,
  ) {
    this.name = _name;
    this.str = _strBought;
    this.con = _conBought;
    this.dex = _dexBought;
    this.agi = _agiBought;
    this.int = _intBought;
    this.per = _perBought;
    this.isAlive = true;
    this.playerLvl = _playerLvl;

    this.maxHP = Math.ceil(this.con * 1.25) + 10 + this.playerLvl;
    this.curHP = this.maxHP;
    this.maxMP = Math.ceil(this.int * 1.5) + 5 + this.playerLvl;
    this.curMP = this.maxMP;
  }

  increaseAtr = (atr: string, increment: number) => {
    this[atr] += increment;
    console.log(this[atr]);
  };

  takeDmg = (dmg: number) => {
    if (this.isAlive) {
      this.curHP -= dmg;
      console.log(`${this.name} recebeu ${dmg} de dano!`);
      if (this.curHP <= 0) {
        this.playerDeath();
      }
    } else {
      console.log('o player está morto');
    }
  };

  playerDeath = () => {
    this.isAlive = false;
    console.log('o player está morto');
  };

  passiveSkill() {
    console.log('essa é uma passive skill padrão');
  }
}

class Barbarian extends Player {
  constructor(
    _name: string,
    _strBought: number,
    _conBought: number,
    _dexBought: number,
    _agiBought: number,
    _intBought: number,
    _perBought: number,
    _playerLvl: number,
  ) {
    super(
      _name,
      _strBought,
      _conBought,
      _dexBought,
      _agiBought,
      _intBought,
      _perBought,
      _playerLvl,
    );
    this.className = 'Bárbaro';
  }

  passiveSkill() {
    const bonusDmg = (100 - (100 * this.curHP) / this.maxHP).toFixed(1);
    console.log(`O bonus é de ${bonusDmg}`);
    return bonusDmg;
  }
}

class Fighter extends Player {
  constructor(
    _name: string,
    _strBought: number,
    _conBought: number,
    _dexBought: number,
    _agiBought: number,
    _intBought: number,
    _perBought: number,
    _playerLvl: number,
  ) {
    super(
      _name,
      _strBought,
      _conBought,
      _dexBought,
      _agiBought,
      _intBought,
      _perBought,
      _playerLvl,
    );

    this.className = 'Guerreiro';

    //placeholder. a habilidade passiva é outra
    this.passiveSkill = this.maxHP + 2;
  }
}

class Ranger extends Player {
  constructor(
    _name: string,
    _strBought: number,
    _conBought: number,
    _dexBought: number,
    _agiBought: number,
    _intBought: number,
    _perBought: number,
    _playerLvl: number,
  ) {
    super(
      _name,
      _strBought,
      _conBought,
      _dexBought,
      _agiBought,
      _intBought,
      _perBought,
      _playerLvl,
    );

    this.className = 'Mateiro';

    //placeholder. a habilidade passiva é outra
    this.passiveSkill = this.dex + 2;
  }
}

class Rogue extends Player {
  constructor(
    _name: string,
    _strBought: number,
    _conBought: number,
    _dexBought: number,
    _agiBought: number,
    _intBought: number,
    _perBought: number,
    _playerLvl: number,
  ) {
    super(
      _name,
      _strBought,
      _conBought,
      _dexBought,
      _agiBought,
      _intBought,
      _perBought,
      _playerLvl,
    );

    this.className = 'Ladrão';

    //placeholder. a habilidade passiva é outra
    this.passiveSkill = this.agi + 2;
  }
}

class Wizard extends Player {
  constructor(
    _name: string,
    _strBought: number,
    _conBought: number,
    _dexBought: number,
    _agiBought: number,
    _intBought: number,
    _perBought: number,
    _playerLvl: number,
  ) {
    super(
      _name,
      _strBought,
      _conBought,
      _dexBought,
      _agiBought,
      _intBought,
      _perBought,
      _playerLvl,
    );

    this.className = 'Mago';

    //placeholder. a habilidade passiva é outra
    this.passiveSkill = this.int + 2;
  }
}
