import PropTypes from 'prop-types';
import style from 'components/FriendList/friendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={style.item}>
            <span className={style.status} style={{backgroundColor: isOnline ? '#04bd20' : '#FE4B4B'}}></span>
            <img className={style.avatar} src={avatar} alt={name} width="60" />
            <p className={style.name}>{name}</p>
        </li>
    
 )
}

FriendListItem.protoTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
}
