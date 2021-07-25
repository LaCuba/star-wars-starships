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

export const setStarshipFavorites = createCustomAction(
  "search/SET-STARSHIP-FAVORITE",
  (starship: Starship) => ({
    payload: {
      starship,
    },
  })
)

export const removeStarshipFavorites = createCustomAction(
  "search/REMOVE-STARSHIP-FAVORITE",
  (model: string) => ({
    payload: {
      model,
    },
  })
)
