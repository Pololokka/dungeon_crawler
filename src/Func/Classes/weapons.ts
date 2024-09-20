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

  attack() {
    const d20 = Math.ceil(Math.random() * 20);
    const isCrit = this.checkCrit(d20);

    const toHit =
      Math.ceil(Math.random() * 20) + this.hitMod + this.playerHitMod;

    return { isCrit, toHit };
  }

  checkCrit(dieNumber: number) {
    const critRange = 20 - this.critChanceMod;
    let isCrit;
    return dieNumber >= critRange ? (isCrit = true) : (isCrit = false);
  }

  damageCalc() {
    const dmg =
      Math.ceil(Math.random() * this.dmgDie) + this.dmgMod + this.playerDmgMod;

    return dmg;
  }

  dealDamage(isCrit: boolean, barbarianBonus?: number) {
    let dmg = this.damageCalc();

    if (barbarianBonus) {
      dmg += dmg * barbarianBonus;
    }

    if (isCrit) {
      dmg = dmg * this.critDmgMod;
    }

    return dmg;
  }
}
