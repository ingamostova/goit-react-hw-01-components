import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnlone, id } }) => {
  return (
    <li className="item">
      <span className="status">{isOnlone}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
