import { CHAIN_REACT, INIT, UPDATE_SQUARE } from './types';

export const updateSquare = id => {
    return { type: UPDATE_SQUARE, id };
};

export const initializeStuff = id => {
    return { type: INIT, id };
};

export const chainReact = id => {
    return { type: CHAIN_REACT, id };
};


