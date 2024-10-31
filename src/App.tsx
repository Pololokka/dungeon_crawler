import { useState } from 'react';
import './App.css';
import { chooseMonster } from './Func/Classes/monster';
import { playerChar } from './Func/Classes/player';
import { createWeapon } from './Func/Classes/weapons';
import { Bar } from './Components/Bar';

function App() {
  const dungeon = [
    [1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ];

  const initialPos = [0, 3];

  const player = playerChar('Bárbaro', 'Astrash', 1, 1, 5, 1, 1, 1);
  //const weapon = createWeapon(6, 1, 1, 1, 10, 1, player, false);
  const weapon = createWeapon(player, false);
  console.log(player);

  //const [test, setTest] = useState(dungeon);
  const test = dungeon;
  const [playerPos, setPlayerPos] = useState(initialPos);
  const [playerLifePercent, setPlayerLifePercent] = useState(100);
  const [playerLife, setPlayerLife] = useState(player.curHP);

  const monster = chooseMonster(1, 1);

  const testeDeRanged = () => {
    if (weapon.isRanged) {
      console.log(weapon.enemyCounterAttack());
    }
  };

  testeDeRanged();

  // const makeDungeon = (dungeon: number[][]) => {
  //   dungeon.map((row) => {
  //     row.map((item) => {
  //       if (item == 1) {
  //         console.log('X');
  //       } else {
  //         console.log('.');
  //       }
  //     });
  //   });
  // };

  // makeDungeon(test);

  const movePlayer = (axis: string, direction: number) => {
    if (axis == 'x') {
      if (
        test[playerPos[0] + direction][playerPos[1]] != 1 &&
        test[playerPos[0] + direction][playerPos[1]] != undefined
      ) {
        setPlayerPos([playerPos[0] + direction, playerPos[1]]);
      }
    } else {
      if (
        test[playerPos[0]][playerPos[1] + direction] != 1 &&
        test[playerPos[0]][playerPos[1] + direction] != undefined
      ) {
        setPlayerPos([playerPos[0], playerPos[1] + direction]);
      }
    }
  };

  const attackPlayer = () => {
    const playerAttack = weapon.attack();

    if (playerAttack.isCrit) {
      console.log(
        `Acerto crítico! Jogador ataca e causa ${weapon.dealDamage(playerAttack.isCrit)} de dano`,
      );
    } else if (playerAttack.toHit >= 17) {
      console.log(
        `Jogador ataca e causa ${weapon.dealDamage(playerAttack.isCrit)} de dano`,
      );
    } else {
      console.log(`Jogador erra...`);
    }
  };

  const supportSpell = () => {
    weapon.heal(player);
  };

  return (
    <main className="mainStyles">
      <div className="equipBox">
        <p className="text">teste</p>
      </div>

      <div className="viewBox">
        {test.map((row) => {
          return (
            <div className="rowStyles">
              {row.map((item) => {
                return <p className="text">{item == 1 ? 'X' : 'Z'}</p>;
              })}
            </div>
          );
        })}
      </div>

      <div className="charBox">
        <p className="text">teste 3</p>
        <Bar player={player} />
      </div>

      <div className="actionBox">
        <p className="text">teste 4</p>
      </div>

      <div className="logBox">
        <p className="text">teste 5</p>
      </div>

      {/* {test.map((row) => {
        return (
          <div className="rowStyles">
            {row.map((item) => {
              return <p className="text">{item == 1 ? 'X' : '.'}</p>;
            })}
          </div>
        );
      })}
      <p className="text">{playerPos}</p>
      <div className="divStyle">
        <button className="button text" onClick={() => movePlayer('x', -1)}>
          &uarr;
        </button>
        <button className="button text" onClick={() => movePlayer('x', 1)}>
          &darr;
        </button>

        <button className="button text" onClick={() => movePlayer('y', -1)}>
          &larr;
        </button>
        <button className="button text" onClick={() => movePlayer('y', 1)}>
          &rarr;
        </button>
      </div>

      <button
        className="button text"
        onClick={() => {
          player.increaseAtr('con', 1);
        }}
      >
        +1 con;
      </button>

      <button className="button text" onClick={() => player.takeDmg(1)}>
        teste 1 de dano no player;
      </button>

      <button className="button text" onClick={() => player.passiveSkill()}>
        passive skill;
      </button>

      <button className="button text" onClick={() => console.log(player)}>
        console.log do player;
      </button>

      <button className="button text" onClick={() => console.log(weapon)}>
        console.log da arma;
      </button>

      <button
        className="button text"
        onClick={() => console.log(weapon.dealDamage(false))}
      >
        console.log dano da arma;
      </button>

      <button
        className="button text"
        onClick={() => console.log(weapon.attack())}
      >
        console.log ataque da arma;
      </button>

      <button className="button text" onClick={() => supportSpell()}>
        console.log ataque e dano;
      </button> */}
    </main>
  );
}

export default App;
