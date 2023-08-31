
import PropTypes from 'prop-types';
import style from 'components/Profile/profile.module.css'

export const Profile = props => {
    return (
<div className={style.container}>
  <div>
    <img
      src={props.avatar}
      alt={props.username}
      className={style.img}
    />
    <p className={style.name}>{props.username}</p>
    <p className={style.tag}>{props.tag}</p>
    <p className={style.location}>{props.location}</p>
  </div>

  <ul className={style.stats}>
    <li>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{props.stats.followers}</span>
    </li>
    <li>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{props.stats.views}</span>
    </li>
    <li>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{props.stats.likes}</span>
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