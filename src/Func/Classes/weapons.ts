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
  return new Ranged(player, isMagical);
};

// ---- MELEE ---- //

class Weapon {
  constructor(_player: any, _isMagical: boolean) {
    this.isRanged = false;
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

// ---- MELEE WEAPONS ---- //

class Sword extends Weapon {
  constructor(_player: any, _isMagical: boolean) {
    super(_player, _isMagical);

    this.playerHitMod = _player.str;
    this.playerDmgMod = _player.str;

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

    this.isRanged = true;
    this.counterAttackChance = 8;
  }

  enemyCounterAttack() {
    const d20 = Math.ceil(Math.random() * 20);
    const counterAttackRange = 20 - this.counterAttackChance;

    return d20 >= counterAttackRange ? true : false;
  }
}

// ---- SPELLS ---- //

class Spells extends Ranged {
  constructor(_player: any, _enemy: any) {
    super(_player);

    this.isRanged = false;
  }

  checkMp() {
    return mpCost <= _player.curMP ? true : false;
  }

  checkSpellLvl(castingLvl: number) {
    return castingLvl <= _player._playerLvl ? true : false;
  }
}

class OffensiveSpells extends Spells {
  constructor(_player: any) {
    super(_player, _enemy);

    this.isAttack = true;
    this.enemyScore = _enemy.dex;
    this.spellDamageDie = 6;
  }

  spellAttackRoll(castingLvl: number) {
    const d20 = Math.ceil(Math.random() * 20);

    const toHit =
      Math.ceil(Math.random() * 20) + _player._playerLvl + castingLvl;

    return toHit;
  }

  spellSavingThrow() {
    const d20 = Math.ceil(Math.random() * 20);
    const playerDC = 10 + _player.playerLvl + _player.spellcastingScore;

    return d20 + 10 + this.enemyScore >= playerDC ? true : false;
  }

  spellDamage() {
    const dmg =
      Math.ceil(Math.random() * this.spellDamageDie) +
      _player.playerLvl +
      _player.spellcastingScore;

    return dmg;
  }
}
