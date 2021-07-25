import { RootState } from "../store"

export const starshipsSelector = (state: RootState) => state.starships.starships

export const starshipsFavoritesSelector = (state: RootState) =>
  state.starships.starshipsFavorites
