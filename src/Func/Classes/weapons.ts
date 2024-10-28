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
  return new SuportSpells(player, isMagical);
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
    this.playerHitMod = _player.dex;
  }

  enemyCounterAttack() {
    const d20 = Math.ceil(Math.random() * 20);
    const counterAttackRange = 20 - this.counterAttackChance;

    return d20 >= counterAttackRange ? true : false;
  }
}

// ---- SPELLS ---- //

class Spells extends Ranged {
  constructor(_player: any) {
    super(_player);

    this.isRanged = false;
    this.curMP = _player.curMP;
    this.playerLvl = _player.playerLvl;
    this.playerSpellcasting = _player.spellcastingScore;
  }

  checkMp() {
    return mpCost <= this.curMP ? true : false;
  }

  checkSpellLvl(castingLvl: number) {
    return castingLvl <= this.playerLvl ? true : false;
  }
}

class OffensiveSpells extends Spells {
  constructor(_player: any) {
    super(_player);

    this.isAttack = true;
    this.spellDamageDie = 6;
  }

  spellAttackRoll(castingLvl: number) {
    const d20 = Math.ceil(Math.random() * 20);

    const toHit =
      Math.ceil(Math.random() * 20) + this.playerSpellcasting + castingLvl;

    return toHit;
  }

  spellSavingThrow(enemyScore: number) {
    const d20 = Math.ceil(Math.random() * 20);
    const playerDC = 10 + this.playerLvl + this.playerSpellcasting;

    return d20 + 10 + enemyScore >= playerDC ? true : false;
  }

  spellDamage() {
    const dmg =
      Math.ceil(Math.random() * this.spellDamageDie) +
      this.playerLvl +
      this.playerSpellcasting;

    return dmg;
  }
}

class SuportSpells extends Spells {
  constructor(_player: any) {
    super(_player);

    this.isAttack = false;
    this.spellSupportDie = 6;
  }

  spellSupValue() {
    const supValue =
      Math.ceil(Math.random() * this.spellSupportDie) +
      this.playerLvl +
      this.playerSpellcasting;

    return supValue;
  }
}

class Heal extends SuportSpells {
  constructor(_player: any) {
    super(_player);
  }

  changeAtribute() {
    const valueToAdd = this.spellSupValue;

    player.curHP += valueToAdd;
  }
}
