import PropTypes from 'prop-types';
import style from 'components/FriendList/friendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
    
       <ul className={style.container}>
          {friends.map(friend => (
          <FriendListItem key={friend.id} friends={friend} />
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