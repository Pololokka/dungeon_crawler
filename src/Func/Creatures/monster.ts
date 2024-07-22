//@ts-nocheck

export class Monster {
  constructor(
    // _str: number,
    // _con: number,
    // _dex: number,
    // _agi: number,
    // _per: number,
    _playerLvl: number,
    _difficultyMod: number,
  ) {
    this.str = Math.ceil((Math.random() * 5 + _playerLvl) * _difficultyMod);
    this.con = Math.ceil((Math.random() * 5 + _playerLvl) * _difficultyMod);
    this.dex = Math.ceil((Math.random() * 5 + _playerLvl) * _difficultyMod);
    this.agi = Math.ceil((Math.random() * 5 + _playerLvl) * _difficultyMod);
    this.per = Math.ceil((Math.random() * 5 + _playerLvl) * _difficultyMod);
    this.maxHP = Math.ceil(
      (Math.random() * this.con + _playerLvl) * _difficultyMod,
    );

    this.monsterCR = Math.floor(
      (this.str + this.con + this.dex + this.agi + this.per) / 5,
    );

    this.exp = this.monsterCR + _difficultyMod;
  }
}

export class Goblin extends Monster {
  constructor(_playerLvl: number, _difficultyMod: number) {
    super(_playerLvl, _difficultyMod);

    this.str = Math.ceil((Math.random() * 2 + _playerLvl) * _difficultyMod);
  }
}
