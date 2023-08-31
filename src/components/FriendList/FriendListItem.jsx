import PropTypes from 'prop-types';
import style from 'components/FriendList/friendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    <div>
        <li className={style.item}>
          <span className={isOnline ? style.statusOnline : style.statusOffline}></span>
            <img className={style.avatar}
                src={avatar}
                alt="User avatar"
                width="48" />
            <p className={style.name}>{name}</p>
       </li>
    </div>
}

FriendListItem.protoTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
}
