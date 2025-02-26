import React from 'react';
import PropTypes from 'prop-types';
import playerStatuses from '../../constants/playerStatuses';
import userPropType from '../../prop-types/user';

const Player = ({ user, skipMove }) =>
  user && (
    <>
      {`${user.name} (you)`}
      <button
        type="button"
        disabled={user.status !== playerStatuses.ActionNotTaken}
        onClick={() => skipMove(user.id)}
      >
        skip
      </button>
    </>
  );
Player.defaultProps = {
  user: null,
};
Player.propTypes = {
  user: userPropType,
  skipMove: PropTypes.func.isRequired,
};

export default Player;
