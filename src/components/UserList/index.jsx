import { useSelector } from 'react-redux';
import './user-list.css'

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className='user-list-container'>
      {users.map((user, index) => (
        <div key={index} className='user-item'>
          <img className="user-avatar" src={user.avatar_url} alt={user.login} />
          <div>{`Login: ${user.login}`}</div>
          <div>{`Type: ${user.type}`}</div>
          <div>{`Score: ${user.score}`}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
