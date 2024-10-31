import { useState } from 'react';

type BarProps = {
  player: any;
};

export const Bar = (props: BarProps) => {
  const [playerPercent, setPlayerPercent] = useState(100);
  const [playerValue, setPlayerValue] = useState(props.player.curHP);

  const playerLifeCalc = () => {
    props.player.takeDmg(1);
    setPlayerValue(props.player.curHP);
    setPlayerPercent(
      ((100 * props.player.curHP) / props.player.maxHP).toFixed(1),
    );
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
          {playerValue}
        </div>
      </div>
      <button onClick={playerLifeCalc}>dano</button>
    </>
  );
};
