import React, { useState } from "react";

function App() {
  setInterval(update, 1000);
  now = new Date().toLocaleTimeString("it-IT");
  let [time, setTime] = useState(now);
  function update() {
    newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
