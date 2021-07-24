import { Reducer } from "redux"
import { getType } from "typesafe-actions"
import actions, { Actions } from "../actions/actions"

export type InitialStateType = {
  starshipsUrls: Array<string>
}

export const initialState = {
  starshipsUrls: [],
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
    default:
      return state
  }
}

export default SearchReducer
