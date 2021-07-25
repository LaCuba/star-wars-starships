import { call, put, takeEvery } from "redux-saga/effects"
import { starshipsApi } from "../../../api/api"
import { Film, Starship } from "../../../types"
import { setStarships, setStarshipsUrls } from "../../actions/starships"

function* requestStarships() {
  const film: Film = yield call(starshipsApi.getFilm, 2)
  yield put(setStarshipsUrls(film.data.starships))
  // const starships: Array<Starship> = yield call(starshipsApi.getStarhips)
  // yield put(
  //   setStarships(
  //     starships.filter((starship) => {
  //       for (let i = 0; i < film.data.starships.length; i++) {
  //         if (starship.url === film.data.starships[i]) {
  //           return starship
  //         }
  //       }
  //       return
  //     })
  //   )
  // )
}

export default function* rootSaga() {
  yield takeEvery("search/REQUEST-STARSHIPS", requestStarships)
}
