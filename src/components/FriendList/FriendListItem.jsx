import { FriendItem, Avatar, Name, Status} from './FriendList.styled';
import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) => (
    <FriendItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name}/>
      <Name>{name}</Name>
    </FriendItem>  
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;