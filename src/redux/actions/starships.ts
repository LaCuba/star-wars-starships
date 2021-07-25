import { createCustomAction } from "typesafe-actions"
import { Starship } from "../../types"

export const requestStarships = createCustomAction("search/REQUEST-STARSHIPS")

export const setStarships = createCustomAction(
  "search/SET-STARSHIPS",
  (starships: Array<Starship>) => ({
    payload: {
      starships,
    },
  })
)
