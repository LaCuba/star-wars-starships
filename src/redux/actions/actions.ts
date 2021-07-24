import { ActionType } from "typesafe-actions"
import * as starships from "./starships"

const actions = { starships }

export type Actions = ActionType<typeof actions>

export default actions
