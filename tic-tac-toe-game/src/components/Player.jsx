import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function editHandler() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editalblePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing)
    editalblePlayerName = (
      <input type="text" required onChange={handleChange} value={playerName} />
    );

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editalblePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
