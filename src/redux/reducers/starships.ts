import { Reducer } from "redux"
import { getType } from "typesafe-actions"
import { Starship } from "../../types"
import actions, { Actions } from "../actions/actions"

export type InitialStateType = {
  starshipsUrls: Array<string>
  starships: Array<Starship>
}

export const initialState = {
  starshipsUrls: [],
  starships: [],
}

const SearchReducer: Reducer<InitialStateType, Actions> = (
  state = initialState,
  action: Actions
): InitialStateType => {
  switch (action.type) {
    case getType(actions.starships.setStarshipsUrls): {
      return {
        ...state,
        starshipsUrls: action.payload.urls,
      }
    }
    case getType(actions.starships.setStarships): {
      return {
        ...state,
        starships: action.payload.starships,
      }
    }
    default:
      return state
  }
}

export default SearchReducer
