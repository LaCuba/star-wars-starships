import { Reducer } from "redux"
import { getType } from "typesafe-actions"
import { Starship } from "../../types"
import actions, { Actions } from "../actions/actions"

export type InitialStateType = {
  starships: Array<Starship>
  starshipsFavorites: Array<Starship>
  isComparison: boolean
  starshipComparison: Array<keyof Starship>
}

export const initialState = {
  starships: [],
  starshipsFavorites: [],
  isComparison: false,
  starshipComparison: [
    "cost_in_credits",
    "length",
    "max_atmosphering_speed",
    "crew",
    "cargo_capacity",
    "hyperdrive_rating",
    "MGLT",
  ] as Array<keyof Starship>,
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
    case getType(actions.starships.setIsComparison): {
      return {
        ...state,
        isComparison: action.payload.isComparison,
      }
    }
    default:
      return state
  }
}

export default SearchReducer
