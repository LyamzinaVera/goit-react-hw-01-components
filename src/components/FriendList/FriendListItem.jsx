import PropTypes from 'prop-types';
import style from 'components/FriendList/friendList.module.css';

export const FriendListItem = ({ friends}) => {
    <div>
        <li className={style.item}>
          <span className={friends.isOnline ? style.online : style.offline}/>
            <img className={style.avatar}
                src={friends.avatar}
                alt="User avatar"
                width="48" />
            <p className={style.name}>{friends.name}</p>
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
