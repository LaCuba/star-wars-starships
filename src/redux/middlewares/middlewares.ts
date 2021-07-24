import { all, call } from "redux-saga/effects"
import starships from "./sagas/starships"

export default function* rootSaga() {
  yield all([call(starships)])
}
