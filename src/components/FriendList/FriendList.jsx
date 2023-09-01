import PropTypes from 'prop-types';
import style from 'components/FriendList/friendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
    
       <ul className={style.friendList}>
          {friends.map(friend => (
          <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}  />
          ))}
       </ul> 
     
 )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.string.isRequired,
    }),
    ), 
}