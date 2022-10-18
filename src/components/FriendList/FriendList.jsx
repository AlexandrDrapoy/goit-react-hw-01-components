import PropTypes from 'prop-types';
import {
  Avatar,
  FriendListItem,
  List,
  ListStatus,
  Name,
} from './FriendList.styled';

export const FriendList = p => {
  return (
    <List>
      {p.friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
          <ListStatus status={isOnline}></ListStatus>
          <Avatar src={avatar} alt={name} />
          <Name>{name}</Name>
        </FriendListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
