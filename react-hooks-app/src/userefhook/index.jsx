import { func } from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

function UseRefHook({ match }) {
  const { path } = match;

  const [name, setName] = useState("");

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    +1;
  });

  // const [renderCount, setRenderCount] = useState(0);
  // useEffect(() => {
  //   setRenderCount((prevRenderCount) => prevRenderCount + 1);
  // });

  const [counter, setCounter] = useState(0);
  const prevCounter = useRef();

  useEffect(() => {
    // This runs every time AFTER Counter is rendered.
    prevCounter.current = counter;
    console.log("Inside Use Effect");
    console.log(prevCounter.current);
  }, [counter]);

  const inputRef = useRef();

  const clearAndSetFocus = () => {
    // setName("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h3>My name is {name}</h3>
      <h3> I rendered {renderCount.current} times</h3>
      {/* <h3> I rendered {renderCount} times</h3> */}

      <h3> Counter : {counter}</h3>
      {typeof prevCounter.current !== "undefined" && (
        <h2> Previous Counter : {prevCounter.current}</h2>
      )}

      <button
        onClick={() => {
          setCounter(Math.random() * 10);
        }}
      >
        {" "}
        Click Me
      </button>

      <h3> useRef for DOM Manipulation</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Entered name is {name}</h3>
      <button onClick={clearAndSetFocus}>Reset</button>
    </div>
  );

  // const { path } = match;

  // const [count,setCount]= useState(0)
  //  const id = useRef(null)
  // // let id
  // const clear = () => {
  //     window.clearInterval(id.current)
  // }
  // useEffect(() =>{
  //     console.log('In use effect')
  //     id.current = window.setInterval(() =>{
  //         setCount( c => c + 1)
  //     }, 1000)
  //     console.log(id)
  //     return clear
  // },[])

  // return(
  //     <>
  //     <h1>{count}</h1>
  //     <button onClick={clear}> Stop </button>
  //     </>
  // )
}

export { UseRefHook };
