import PropTypes from "prop-types";
import { ProfileContainer, Description, ProfileStats, ProfileAvatar, Name, StatsItem, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => 
 <ProfileContainer>
<Description>
  <ProfileAvatar
    src={avatar}
    alt="User avatar"
  />
  <Name>{username}</Name>
  <p className="tag">@{tag}</p>
  <p className="location">{location}</p>
</Description>

<ProfileStats>
  <StatsItem>
    <span className="label">Followers </span>
    <Quantity className="quantity">{followers}</Quantity>
  </StatsItem>
  <StatsItem>
    <span className="label">Views </span>
    <Quantity className="quantity">{views}</Quantity>
  </StatsItem>
  <StatsItem>
    <span className="label">Likes </span>
    <Quantity className="quantity">{likes}</Quantity>
  </StatsItem>
</ProfileStats>
</ProfileContainer>


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    })
}

