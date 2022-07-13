import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Counter from "./Counter";
import reducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  console.log("Store created with reducer and saga"),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const action = (type) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        console.log("onIncrement clicked from main.js");
        action("INCREMENT");
      }}
      onDecrement={() => {
        console.log("onDcrement clicked from main.js");
        action("DECREMENT");
      }}
      onIncrementAsync={() => {
        console.log("onIncrement ASYNC clicked from main.js");
        action("INCREMENT_ASYNC");
      }}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
