import PropTypes from 'prop-types';
import style from 'components/FriendList/friendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
     <section>
       <ul>
          {friends.map(friend => (
          <li className={style.item} key={friend.id}>
            <FriendListItem friends={friend} />
          </li>
        ))}
       </ul> 
     </section>
 )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.string.isRequired,
    }),
    ), 
}