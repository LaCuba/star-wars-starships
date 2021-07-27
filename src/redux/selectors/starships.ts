import { RootState } from "../store"

export const starships = (state: RootState) => state.starships.starships

export const starshipsFavorites = (state: RootState) =>
  state.starships.starshipsFavorites

export const isComparison = (state: RootState) => state.starships.isComparison

export const starshipComparison = (state: RootState) =>
  state.starships.starshipComparison
