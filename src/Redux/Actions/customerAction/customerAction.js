import {ADD_CUSTOMER, REMOVE_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_MANY_CUSTOMERS} from '../../Constants/Types/customerTypes/customerTypes'

export const addCustomerAction = (payload) => {
    return {
        type: ADD_CUSTOMER,
        payload
    }
}
  
export const removeCustomerAction = (payload) => {
    return {
        type: REMOVE_CUSTOMER,
        payload
    }
}

export const addManyCustomersAction = (payload) => {
    return {
        type: ADD_MANY_CUSTOMERS,
        payload
    }
}

export const removeManyCustomers = (payload) => {
    return {
        type: REMOVE_MANY_CUSTOMERS,
        payload
    }
}

export const fetchManyCustomers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}