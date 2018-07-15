import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        currentPlayer: state && state.game && state.game.currentPlayer,
        stillSamePlayer: state && state.game && state.game.stillSamePlayer
    };
};

export default connect(mapStateToProps, null);