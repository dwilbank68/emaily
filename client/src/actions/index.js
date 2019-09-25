import axios from 'axios';
import {FETCH_USER} from './types.js';

export const fetchUser = () => async (dispatch, getState) => {
    const user = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER, payload: user.data})
}

export const handleToken = token => async (dispatch, getState) => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}