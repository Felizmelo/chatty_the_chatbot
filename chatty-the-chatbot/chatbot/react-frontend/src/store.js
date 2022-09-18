// Importar dependências
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import combineReducers from "./reducers"

// conecte o aplicativo ao redux devtools
import {composeWithDevTools} from "redux-devtools-extension"

// setup initial store
const initialState = {}

// import middleware
const middleware = [thunk]

// setup store
const store = createStore(combineReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// export store
export default store;