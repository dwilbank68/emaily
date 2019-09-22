import axios from 'axios';
import {FETCH_USER} from './types.js';

export const fetchUser = () => async (dispatch, getState) => {
    const user = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER, payload: user.data})
} 