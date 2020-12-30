import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import {
  studentReducer,
  studentsReducer,
} from './redux/reducers/studentReducer'

const reducer = combineReducers({
  studentState: studentReducer,
  studentsState: studentsReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
