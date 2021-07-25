import { Reducer } from "redux"
import { getType } from "typesafe-actions"
import { Starship } from "../../types"
import actions, { Actions } from "../actions/actions"

export type InitialStateType = {
  starships: Array<Starship>
  starshipsFavorites: Array<Starship>
}

export const initialState = {
  starships: [],
  starshipsFavorites: [],
}

const SearchReducer: Reducer<InitialStateType, Actions> = (
  state = initialState,
  action: Actions
): InitialStateType => {
  switch (action.type) {
    case getType(actions.starships.setStarships): {
      return {
        ...state,
        starships: action.payload.starships,
      }
    }
    case getType(actions.starships.setStarshipFavorites): {
      return {
        ...state,
        starshipsFavorites: [
          ...state.starshipsFavorites,
          action.payload.starship,
        ],
      }
    }
    case getType(actions.starships.removeStarshipFavorites): {
      return {
        ...state,
        starshipsFavorites: state.starshipsFavorites.filter(
          (starship) => starship.model !== action.payload.model
        ),
      }
    }
    default:
      return state
  }
}

export default SearchReducer
