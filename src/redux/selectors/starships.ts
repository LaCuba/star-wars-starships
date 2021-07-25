import { RootState } from "../store"

export const starshipsSelector = (state: RootState) => state.starships.starships
