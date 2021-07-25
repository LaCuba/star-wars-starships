import { Reducer } from "redux"
import { getType } from "typesafe-actions"
import { Starship } from "../../types"
import actions, { Actions } from "../actions/actions"

export type InitialStateType = {
  starships: Array<Starship>
}

export const initialState = {
  starships: [],
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
    default:
      return state
  }
}

export default SearchReducer
