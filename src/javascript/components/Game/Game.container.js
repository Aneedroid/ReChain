import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        currentPlayer: state && state.game && state.game.currentPlayer
    };
};

export default connect(mapStateToProps, null);