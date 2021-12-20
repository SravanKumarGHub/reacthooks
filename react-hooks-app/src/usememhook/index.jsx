import React, { useState, useMemo, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

function UseMemorizeHook({ match }) {
  const { path } = match;

  const [counter, setCounter] = useState(0);
  const [dark, setDark] = useState(false);

  //   const incrementNumber = useMemo(() => {
  //     return timeTakingFunction(counter);
  //   }, [counter]);

  const incrementNumber = timeTakingFunction(counter);

  //   const themeStyles = useMemo(() => {
  //     return {
  //       backgroundColor: dark ? "black" : "white",
  //       color: dark ? "white" : "black",
  //     };
  //   }, [dark]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  //   useEffect(() => {
  //     console.log("Theme changed");
  //   }, [themeStyles]);

  return (
    <>
      <h1>React - useMemo Hook </h1>
      <input
        type="counter"
        value={counter}
        onChange={(e) => setCounter(parseInt(e.target.value))}
      />{" "}
      <br />
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        {" "}
        Change the Theme
      </button>{" "}
      <br />
      <br />
      <div style={themeStyles}>{incrementNumber}</div>
    </>
  );
}
function timeTakingFunction(counter) {
  console.log("Time taking function");
  for (let i = 0; i <= 10000000; i++) {}
  return counter + 2;
}

export { UseMemorizeHook };
