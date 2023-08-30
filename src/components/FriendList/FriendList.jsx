// import PropTypes from 'prop-types';
import {ListOfFriends, FriendItem, Avatar, Name, Status} from './FriendList.styled';

const FriendList = ({friends}) => (
    <ListOfFriends>
        {friends.map(friend => (
           <FriendItem key={friend.id}>
            <Status statusType={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt={friend.name}/>
           <Name>{friend.name}</Name>
       </FriendItem>
        ))}
       
    </ListOfFriends>
);

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.shape({
//             avatar: PropTypes.src.isRequired,
//             name: PropTypes.string.isRequired,  
//         }).isRequired
//     ).isRequired, 
// }

export default FriendList;