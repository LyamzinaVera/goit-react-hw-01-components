import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import { Profile } from "./Profile/Profile.jsx";
import { Statistics } from './Statistics/statistics.jsx';
import { FriendList } from "./FriendList/FriendList.jsx";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};
