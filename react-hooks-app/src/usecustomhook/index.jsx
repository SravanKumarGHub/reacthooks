import React, { useState, useRef, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import useSmoothScroll from "./useScrollHook";

function UseCustomHook({ match }) {
  const { path } = match;

  const [refToScroll, smoothScroll] = useSmoothScroll();
  const [topRef, smoothScrollToTop] = useSmoothScroll();
  return (
    <div className="App">
      <button ref={topRef} onClick={smoothScroll}>
        Scroll
      </button>
      <div style={{ marginTop: "150vh" }} ref={refToScroll}>
        Bottom of web page
      </div>
      <button onClick={smoothScrollToTop}>Go UP</button>
    </div>
  );
}

export { UseCustomHook };
