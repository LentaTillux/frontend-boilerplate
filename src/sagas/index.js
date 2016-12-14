// @flow
import { fork } from "redux-saga/effects";
import counterSaga from "./counter";

export default function *rootSaga(): Generator<*, *, *> {
  yield [
    fork(counterSaga)
  ];
}
