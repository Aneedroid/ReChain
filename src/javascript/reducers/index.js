import { combineReducers } from 'redux';
import game from './squares-reducer';

export const reducers = {
    game
};

export default combineReducers(reducers);
