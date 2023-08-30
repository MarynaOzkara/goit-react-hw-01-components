import PropTypes from 'prop-types';
import {Container, Avatar, Picture, Name, Description, Stats, StatsItem, Label, Quantity} from './Profile.styled';


const Profile = ({username, tag, location, avatar, stats}) => (
    <Container>
        <Avatar>
            <Picture
                src={avatar}
                alt={username}
            />
            <Name>{username}</Name>
            <Description>@{tag}</Description>
            <Description>{location}</Description>
        </Avatar>
        <Stats>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatsItem>
        </Stats>
  </Container>
);

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}

export default Profile;