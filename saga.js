import { put, takeEvery, all, call } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const action = (type) => ({ type });
function* helloSaga() {
  console.log("Hello Sagas!");
}

function* incrementAsync2(param) {
  yield delay(1000);
  console.log(param);
}

function* incrementAsync() {
  console.trace();
  yield delay(1000);
  console.log("inrcrement Async from  Saga");
  yield call(incrementAsync2, "faraz"); // calling saga from saga
  yield put(action("INCREMENT"));
}

function* watchIncrementAsync() {
  console.log(" WATCH inrcrement Async from  Saga 1");
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  console.log("root saga run");
  yield all([helloSaga(), watchIncrementAsync()]);
}
