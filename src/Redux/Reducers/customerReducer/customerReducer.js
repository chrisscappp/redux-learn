import {ADD_CUSTOMER, REMOVE_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_MANY_CUSTOMERS} from '../../Constants/Types/customerTypes/customerTypes'

const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_MANY_CUSTOMERS :
            return {
                ...state,
                customers: [...state.customers, ...action.payload]
            }

        case ADD_CUSTOMER :
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }

        case REMOVE_MANY_CUSTOMERS :
            return {
                ...state,
                customers: action.payload
            }

        case REMOVE_CUSTOMER :
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            }
            
        default :
            return state
    }
}