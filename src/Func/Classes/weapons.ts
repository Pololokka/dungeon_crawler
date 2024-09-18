export const createWeapon = (
  dmgDie: number,
  dmgMod: number,
  hitMod: number,
  critChanceMod: number,
  critDmgMod: number,

  doubleAtkMod: number,
  player: any,
  isMagical: boolean,
) => {
  // const possibleClasses = new Map([
  //   ['Bárbaro', Barbarian],
  //   ['Guerreiro', Fighter],
  //   ['Mateiro', Ranger],
  //   ['Ladrão', Rogue],
  //   ['Mago', Wizard],
  // ]);

  // const maker = possibleClasses.get(playerClass);
  return new Weapon(
    dmgDie,
    dmgMod,
    hitMod,
    critChanceMod,
    critDmgMod,
    doubleAtkMod,
    player,
    isMagical,
  );
};

class Weapon {
  constructor(
    _dmgDie: number,
    _dmgMod: number,
    _hitMod: number,
    _critChanceMod: number,
    _critDmgMod: number,
    _doubleAtkMod: number,
    _player: any,
    _isMagical: boolean,
  ) {
    this.dmgDie = _dmgDie;
    this.dmgMod = _dmgMod;
    this.hitMod = _hitMod;
    this.critChanceMod = _critChanceMod;
    this.critDmgMod = _critDmgMod;
    this.doubleAtkMod = _doubleAtkMod;
    this.isMagical = _isMagical;
    this.playerHitMod = _player.dex;
    this.playerDmgMod = _player.str;
  }

  dealDamage(barbarianBonus?: number) {
    const dmg =
      Math.ceil(Math.random() * this.dmgDie) + this.dmgMod + this.playerDmgMod;
    const barbarianDmg = dmg + dmg * barbarianBonus;

    return barbarianBonus ? barbarianDmg : dmg;
  }
}
