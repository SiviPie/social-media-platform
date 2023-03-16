import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import './UserFeed.css'

function UserFeed() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="userfeed-wrapper">
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserFeed;
