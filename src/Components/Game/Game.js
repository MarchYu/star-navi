import { useState, useEffect } from "react";
import { getGameTypes } from "./Game.api";
import { Field } from "./Field";

export const Game = () => {
  const [gameTypes, setGameTypes] = useState([]);
  const [fieldSize, setFieldSize] = useState();

  const onGameTypeChange = (e) => {
    setFieldSize(e.target.value);
  };
  const [list, setList] = useState([]);

  const pushList = (myIndex, size) => {
    let row = Math.ceil(((myIndex + 1) / size) % size);
    let column = (myIndex + 1) % size;
    if (column === 0) {
      column = fieldSize;
    }
    if (row === 0) {
      row = fieldSize;
    }
    setList((prevState) => [...prevState, `Row: ${row} Column: ${column} `]);
  };

  useEffect(() => {
    getGameTypes().then(setGameTypes);
  }, []);
  return (
    <div>
      <header>
        <select onChange={onGameTypeChange} className="select">
          <option hidden>Select game mode</option>
          {gameTypes.map((item, index) => (
            <option key={`${item + fieldSize + index}`} value={item.field}>
              {item.name}
            </option>
          ))}
        </select>
      </header>
      <main>
        {fieldSize && <Field fieldSize={fieldSize} pushList={pushList} />}
        <div className="row-div">
          {list.map((item, index) => (
            <div key={`${item + fieldSize + index}}`}>{item}</div>
          ))}
        </div>
      </main>
    </div>
  );
};
