import { call, put, takeEvery } from "redux-saga/effects"
import { starshipsApi } from "../../../api/api"
import { setStarshipsUrls } from "../../actions/starships"

export type film = {
  data: {
    starships: Array<string>
  }
}

function* requestStarshipsUrls() {
  const film: film = yield call(starshipsApi.getFilm, 2)
  yield put(setStarshipsUrls(film.data.starships))
}

export default function* rootSaga() {
  yield takeEvery("search/REQUEST-STARSHIPS", requestStarshipsUrls)
}
