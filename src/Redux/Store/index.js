import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from '../Reducers/cashReducer/cashReducer';
import { customerReducer } from '../Reducers/customerReducer/customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))