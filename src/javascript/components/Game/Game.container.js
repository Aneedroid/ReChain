import { connect } from 'react-redux';
import { disableBoard } from '../../actions';


const mapStateToProps = function (state) {
    return {
        currentPlayer: state && state.game && state.game.currentPlayer,
        stillSamePlayer: state && state.game && state.game.stillSamePlayer,
        winner: state && state.game && state.game.winner
    };
};

export default connect(mapStateToProps, null);