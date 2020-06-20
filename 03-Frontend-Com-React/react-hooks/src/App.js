import React, { useState, useEffect } from "react";

import { getNewTimestamp } from "./helpers/dateTimeHelpers";

function App() {
  const [clickArray, setClickArray] = useState([]);

  useEffect(() => {
    document.title = `React-hooks [${clickArray.length}]`;
  }, [clickArray]);

  const handleClick = () => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTimestamp());
    setClickArray(newClickArray);
  };

  return (
    <div className="container">
      <h1>
        React e <code>Hooks</code>
      </h1>
      <hr />
      <button className="btn btn-success" onClick={handleClick}>
        CLique aqui
      </button>
      <hr />
      <ul>
        {clickArray.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
