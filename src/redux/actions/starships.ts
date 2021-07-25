import { createCustomAction } from "typesafe-actions"
import { Starship } from "../../types"

export const requestStarships = createCustomAction("search/REQUEST-STARSHIPS")

export const setStarshipsUrls = createCustomAction(
  "search/SET-STARSHIPS-URLS",
  (urls: Array<string>) => ({
    payload: {
      urls,
    },
  })
)

export const setStarships = createCustomAction(
  "search/SET-STARSHIPS",
  (starships: Array<Starship>) => ({
    payload: {
      starships,
    },
  })
)
