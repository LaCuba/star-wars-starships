import { all, call, put, takeEvery } from "redux-saga/effects"
import { starshipsApi } from "../../../api/api"
import { Film, Starship } from "../../../types"
import { setStarships } from "../../actions/starships"

function* requestStarships() {
  const film: Film = yield call(starshipsApi.getFilm, 2)
  const starhips: Array<Starship> = yield all(
    film.data.starships.map((url) => call(starshipsApi.getStarhips, url))
  )
  yield put(setStarships(starhips))
}

export default function* rootSaga() {
  yield takeEvery("search/REQUEST-STARSHIPS", requestStarships)
}
