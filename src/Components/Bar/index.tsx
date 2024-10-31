import { useState } from 'react';

type BarProps = {
  player: any;
  damage: number;
};

export const Bar = (props: BarProps) => {
  const [playerLife, setPlayerLife] = useState(props.player.curHP);
  const [playerPercent, setPlayerPercent] = useState(100);

  const playerLifeCalc = () => {
    props.player.takeDmg(props.damage);
    setPlayerLife(props.player.curHP);
    setPlayerPercent(
      ((100 * props.player.curHP) / props.player.maxHP).toFixed(1),
    );
    console.log(playerPercent);
  };

  return (
    <>
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{
            height: `${playerPercent}%`,
          }}
        >
          {playerLife}
        </div>
      </div>
      <button onClick={playerLifeCalc}>dano</button>
    </>
  );
};
