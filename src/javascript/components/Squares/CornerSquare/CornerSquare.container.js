import { connect } from 'react-redux';
import { initializeStuff, updateSquare, chainReact } from '../../../actions';

const mapStateToProps = function (state, ownProp) {
    return {
        // need to use redux selectors later.
        ballCount: (state && state.game && state.game.squares[ownProp.id] && state.game.squares[ownProp.id].balls),
        limit: (state && state.game && state.game.squares[ownProp.id] && state.game.squares[ownProp.id].limit)
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        initPlayground: (id) => dispatch(initializeStuff(id)),
        populate: (id) => dispatch(updateSquare(id)),
        chainReact: (id) => dispatch(chainReact(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps);