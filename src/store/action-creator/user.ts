import axios from 'axios';
import { Dispatch } from 'redux';
import { resolveProjectReferencePath } from 'typescript';
import { UserAction, UserActionTypes } from './../../types/user';


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setTimeout(() => {
                dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
            }, 1500)
        } catch (e) {
            dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Виникла помилка' })

        }
    }
}