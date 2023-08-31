import PropTypes from 'prop-types';
import {ListOfFriends, FriendItem, Avatar, Name, Status} from './FriendList.styled';

const FriendList = ({friends}) => (
    <ListOfFriends>
        {friends.map(friend => (
           <FriendItem key={friend.id}>
            <Status status={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt={friend.name}/>
           <Name>{friend.name}</Name>
       </FriendItem>
        ))}
       
    </ListOfFriends>
);

FriendList.propTypes = {

}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,  
        }),
    ).isRequired, 
}

export default FriendList;