export const playerChar = (
  str: number,
  con: number,
  dex: number,
  agi: number,
  int: number,
  per: number,
  lvl: number,
) => {
  return new Player(str, con, dex, agi, int, per, lvl);
};

class Player {
  constructor(
    _strBought: number,
    _conBought: number,
    _dexBought: number,
    _agiBought: number,
    _intBought: number,
    _perBought: number,
    _playerLvl: number,
  ) {
    this.str = _strBought;
    this.con = _conBought;
    this.dex = _dexBought;
    this.agi = _agiBought;
    this.int = _intBought;
    this.per = _perBought;
    this.playerLvl = _playerLvl;

    this.maxHP = Math.ceil(this.con * 1.25) + 10 + this.playerLvl;
    this.maxMP = Math.ceil(this.int * 1.75) + 5 + this.playerLvl;
  }
}
