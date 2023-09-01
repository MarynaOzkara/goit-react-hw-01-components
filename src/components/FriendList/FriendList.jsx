import PropTypes from 'prop-types';
import {ListOfFriends} from './FriendList.styled';
import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => (
    <ListOfFriends>
        {friends.map(friend => (
           <FriendListItem 
           key={friend.id}
           avatar={friend.avatar}
           name={friend.name}
           isOnline={friend.isOnline}
           />  
        ))}
       
    </ListOfFriends>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,  
        })
    ) 
}


export default FriendList;