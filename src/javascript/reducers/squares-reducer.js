import { CHAIN_REACT, INIT, UPDATE_SQUARE } from '../actions/types';

const initialState = {
  squares: []
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
        console.log('This is a CORNER square : ', id);
        possibleLimit = 1;
      }
      else if ((id > 0 && id < (n - 1)) || (id !== (n - 1) && (id !== n * m) && (id + 1) % n === 0) || (id > n * (m - 1) && id < n * m)
        || (id !== 0 && id !== n * (m - 1) && id % n === 0)) {
        console.log('This is a SIDE square : ', id);
        possibleLimit = 2;
      }
      else {
        console.log('This is a MIDDLE square : ', id);
        possibleLimit = 3;
      }

      const newSquare = {
        id: action.id,
        balls: 0,
        limit: possibleLimit
      }

      if (!state.squares.indexOf(newSquare) > -1) {
        newState.squares.push(newSquare);
      }

      return newState;
    }

    case UPDATE_SQUARE: {
      const newState = { ...state };
      if (state.squares[action.id].balls <= newState.squares[action.id].limit)
        newState.squares[action.id].balls = state.squares[action.id].balls + 1;

      return newState;
    }

    case CHAIN_REACT: {
      const newState = { ...state };
      // m = rows, n = columns

      // const m = 3;
      // const n = 3;
      const id = action.id;

      if (state.squares[id].balls = newState.squares[id].limit) {
        // 0       ---> Left top
        // n-1     ---> Right top
        // n*(m-1) ---> Left bottom
        // n*m     ---> Right bottom

        console.log('ID : ', action.id);

        if (id === 0 || id === (n - 1) || id === n * (m - 1) || id === (m * n) - 1) {
          console.log('This ID satisfied the corner squares condition!');
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

          newState.squares[id].balls = 0;
          // Clear out balls in the blown square
          // Populate it in the adjacent squares
          newState.squares[next_x].balls = state.squares[next_x].balls + 1;
          newState.squares[next_y].balls = state.squares[next_y].balls + 1;

          console.log('New state: ', newState)

        }
        else if ((id > 0 && id < (n - 1)) || (id !== (n - 1) && (id !== n * m) && (id + 1) % n === 0)
          || (id > n * (m - 1) && id < n * m) || (id !== 0 && id !== n * (m - 1) && id % n === 0)) {
          console.log('This ID satisfied the side squares condition!');
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

          newState.squares[id].balls = 0;
          // Clear out balls in the blown square
          // Populate it in the adjacent squares
          newState.squares[next_x].balls = state.squares[next_x].balls + 1;
          newState.squares[next_y].balls = state.squares[next_y].balls + 1;
          newState.squares[next_z].balls = state.squares[next_z].balls + 1;
        }
        // THIS IS THE ELSE CASE. :DDDD
        else {
          console.log('This ID satisfied the Middle squares condition!');
          let next_x = id - (n * 1);
          let next_y = id + 1;
          let next_z = id + (n * 1);
          let next_a = id - 1;

          newState.squares[id].balls = 0;
          // Clear out balls in the blown square
          // Populate it in the adjacent squares
          newState.squares[next_x].balls = state.squares[next_x].balls + 1;
          newState.squares[next_y].balls = state.squares[next_y].balls + 1;
          newState.squares[next_z].balls = state.squares[next_z].balls + 1;
          newState.squares[next_a].balls = state.squares[next_a].balls + 1;
        }
      }
      console.log('New state: ', newState);
      return newState;
    }

    default:
      return state;
  }
}
