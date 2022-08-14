import { ADD_CASH, GET_CASH } from "../../Constants/Types/cashTypes/cashTypes"

export const addCashAction = (payload) => {
    return {
        type: ADD_CASH,
        payload
    }
}

export const getCashAction = (payload) => {
    return {
        type: GET_CASH,
        payload
    }
}