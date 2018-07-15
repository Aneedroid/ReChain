import { CHAIN_REACT, INIT, UPDATE_SQUARE } from '../actions/types';

const initialState = {
  squares: [],
  players: [0, 1],
  currentPlayer: 0,
  stillSamePlayer: false,
  winner: null,
  disableBoard: false
};

export default function (state = initialState, action) {
  const m = 5;
  const n = 6;
  switch (action.type) {
    case INIT: {
      const newState = { ...state };
      let possibleLimit = 0;
      const id = action.id;

      if (id === 0 || id === (n - 1) || id === n * (m - 1) || id === (m * n) - 1) {
        possibleLimit = 1;
      }
      else if ((id > 0 && id < (n - 1)) || (id !== (n - 1) && (id !== n * m) && (id + 1) % n === 0) || (id > n * (m - 1) && id < n * m)
        || (id !== 0 && id !== n * (m - 1) && id % n === 0)) {
        possibleLimit = 2;
      }
      else {
        possibleLimit = 3;
      }

      const newSquare = {
        id: action.id,
        balls: 0,
        limit: possibleLimit,
        playerSquare: -1
      }

      if (!state.squares.indexOf(newSquare) > -1) {
        newState.squares.push(newSquare);
      }

      return newState;
    }

    case UPDATE_SQUARE: {
      const newState = { ...state };
      const id = action.id;

      if (state.squares[id].playerSquare === -1 || state.currentPlayer === state.squares[id].playerSquare) {

        if (state.squares[id].playerSquare === -1)
          newState.squares[id].playerSquare = state.currentPlayer;

        if (state.squares[id].balls <= state.squares[id].limit)
          newState.squares[id].balls = state.squares[id].balls + 1;

        newState.currentPlayer = state.players[(state.currentPlayer + 1) % state.players.length]
        newState.stillSamePlayer = false;
      }
      else {
        newState.stillSamePlayer = true;
      }

      return newState;
    }

    case CHAIN_REACT: {
      const newState = { ...state };
      const id = action.id;

      if (state.squares[id].balls = newState.squares[id].limit) {
        if (id === 0 || id === (n - 1) || id === n * (m - 1) || id === (m * n) - 1) {
          let next_x = -1;
          let next_y = -1;

          if (id === 0) {
            next_x = id + 1;
            next_y = id + n * 1;
          }
          if (id === (n - 1)) {
            next_x = id - 1;
            next_y = id + n * 1;
          }
          if (id === n * (m - 1)) {
            next_x = id + 1;
            next_y = id - n * 1;
          }
          if (id === ((n * m) - 1)) {
            next_x = id - 1;
            next_y = id - n * 1;
          }

          newState.squares[next_x].playerSquare = state.squares[id].playerSquare;
          newState.squares[next_y].playerSquare = state.squares[id].playerSquare;

          newState.squares[id].balls = 0;
          newState.squares[id].playerSquare = -1;

          newState.squares[next_x].balls = state.squares[next_x].balls + 1;
          newState.squares[next_y].balls = state.squares[next_y].balls + 1;
        }
        else if ((id > 0 && id < (n - 1)) || (id !== (n - 1) && (id !== n * m) && (id + 1) % n === 0)
          || (id > n * (m - 1) && id < n * m) || (id !== 0 && id !== n * (m - 1) && id % n === 0)) {
          let next_x = -1;
          let next_y = -1;
          let next_z = -1;

          if (id > 0 && id < (n - 1)) {
            next_x = id - 1;
            next_y = id + 1;
            next_z = id + (n * 1);
          }
          if (id !== (n - 1) && (id !== n * m) && (id + 1) % n === 0) {
            next_x = id - (n * 1);
            next_y = id - 1;
            next_z = id + (n * 1);
          }
          if (id > n * (m - 1) && id < n * m) {
            next_x = id - 1;
            next_y = id + 1;
            next_z = id - (n * 1);
          }
          if (id !== 0 && id !== n * (m - 1) && id % n === 0) {
            next_x = id - (n * 1);
            next_y = id + 1;
            next_z = id + (n * 1);
          }

          newState.squares[next_x].playerSquare = state.squares[id].playerSquare;
          newState.squares[next_y].playerSquare = state.squares[id].playerSquare;
          newState.squares[next_z].playerSquare = state.squares[id].playerSquare;

          newState.squares[id].balls = 0;
          newState.squares[id].playerSquare = -1;

          newState.squares[next_x].balls = state.squares[next_x].balls + 1;
          newState.squares[next_y].balls = state.squares[next_y].balls + 1;
          newState.squares[next_z].balls = state.squares[next_z].balls + 1;
        }
        else {
          let next_x = id - (n * 1);
          let next_y = id + 1;
          let next_z = id + (n * 1);
          let next_a = id - 1;

          newState.squares[next_x].playerSquare = state.squares[id].playerSquare;
          newState.squares[next_y].playerSquare = state.squares[id].playerSquare;
          newState.squares[next_z].playerSquare = state.squares[id].playerSquare;
          newState.squares[next_a].playerSquare = state.squares[id].playerSquare;

          newState.squares[id].balls = 0;
          newState.squares[id].playerSquare = -1;

          newState.squares[next_x].balls = state.squares[next_x].balls + 1;
          newState.squares[next_y].balls = state.squares[next_y].balls + 1;
          newState.squares[next_z].balls = state.squares[next_z].balls + 1;
          newState.squares[next_a].balls = state.squares[next_a].balls + 1;
        }
      }

      let red = 0;
      let blue = 0;
      let winner = null;

      for (let i = 0; i < newState.squares.length; i++) {
        if (newState.squares[i].playerSquare === 0) {
          blue += newState.squares[i].balls;
        }
        if (newState.squares[i].playerSquare === 1) {
          red += newState.squares[i].balls;
        }
      }

      if (red + blue === Math.max(red, blue) && red !== blue && ((red + blue) > 2)) {
        if (red === 0) {
          winner = 'Blue';
        }
        else {
          winner = 'Red';
        }
      }
      newState.winner = winner;

      return newState;
    }

    default:
      return state;
  }
}
