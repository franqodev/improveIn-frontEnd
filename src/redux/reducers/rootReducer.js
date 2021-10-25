import { combineReducers } from "redux"
import bandsReducer from "./bandsReducer"
import usersReducer from "./usersReducer"

const rootReducer = combineReducers({
   bands: bandsReducer,
   users: usersReducer,
})

export default rootReducer
