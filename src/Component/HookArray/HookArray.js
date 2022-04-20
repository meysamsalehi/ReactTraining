import { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);

  const addRandomItemHandler = () => {
    // solve 1
    // setItem([
    //   ...item,
    //   { id: item.length, number: Math.floor(Math.random() * 10) },
    // ]);

    // solve2
    const randomItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };
    const updatedItem = [...item, randomItem];

    setItem(updatedItem);
  };

  return (
    <div>
      <button onClick={addRandomItemHandler}>add item random</button>
      {item.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default HookArray;
