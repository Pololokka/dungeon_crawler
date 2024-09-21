//@ts-nocheck

export const createWeapon = (player: any, isMagical: boolean) => {
  // const possibleClasses = new Map([
  //   ['Bárbaro', Barbarian],
  //   ['Guerreiro', Fighter],
  //   ['Mateiro', Ranger],
  //   ['Ladrão', Rogue],
  //   ['Mago', Wizard],
  // ]);

  // const maker = possibleClasses.get(playerClass);
  return new Sword(player, isMagical);
};

class Weapon {
  constructor(_player: any, _isMagical: boolean) {
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

class Sword extends Weapon {
  constructor(_player: any, _isMagical: boolean) {
    super(_player, _isMagical);

    this.dmgDie = 8;
    this.dmgMod = 2;
    this.hitMod = 0;
    this.critChanceMod = 1;
    this.critDmgMod = 2;
    this.doubleAtkMod = 1;
    this.isMagical = _isMagical;
    this.weaponName = 'Espada';
  }
}

// ---- RANGED ---- //

class Ranged extends Weapon {
  constructor(_player: any, _isMagical: boolean) {
    super(_player, _isMagical);

    this.counterAttackChance = 8;
  }

  enemyCounterAttack() {
    const d20 = Math.ceil(Math.random() * 20);
    const counterAttackRange = 20 - this.counterAttackChance;

    return d20 >= counterAttackRange ? true : false;
  }
}
