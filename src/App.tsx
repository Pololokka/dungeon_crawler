import { useState } from 'react';
import './App.css';
import { chooseMonster } from './Func/Creatures/monster';
import { playerChar } from './Func/Creatures/player';

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

  //const [test, setTest] = useState(dungeon);
  const test = dungeon;
  const [playerPos, setPlayerPos] = useState(initialPos);
  const [stateTest, setStateTest] = useState(1);

  const monster = chooseMonster(1, 1);
  const player = playerChar(
    'Bárbaro',
    'Astrash',
    stateTest,
    stateTest,
    1,
    1,
    1,
    1,
    1,
  );

  //console.log(monster);
  console.log(player);

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

  return (
    <main className="mainStyles">
      {test.map((row) => {
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
    </main>
  );
}

export default App;
