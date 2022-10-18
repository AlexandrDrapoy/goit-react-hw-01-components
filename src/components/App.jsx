import { Profile } from './ProfileCard/ProfileCard';

import { Statistics } from './Statistics/Statistics';

import user from './date/user.json';
import data from './date/data.json';
import friends from './date/friends.json';
import items from './date/transactions.json';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'gray',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory transactions={items}></TransactionHistory>
    </div>
  );
};
