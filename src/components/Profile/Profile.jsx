
import PropTypes from 'prop-types';
import style from 'components/Profile/Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
<div className={style.container}>
  <div className={style.description}>
    <img
      src={avatar}
      alt={username}
      className={style.avatar}
    />
    <p className={style.name}>{username}</p>
    <p className={style.tag}>{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.followersList}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{stats.followers}</span>
    </li>
    <li className={style.viewsList}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{stats.views}</span>
    </li>
    <li className={style.likesList}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)
}

Profile.protoTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number)
}