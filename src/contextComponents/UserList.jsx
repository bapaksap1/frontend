import React, {useContext} from "react";
import { UserContext } from "../context/User";
import User from "./User";

const UserList = () =>{
  const {users} = useContext(UserContext)
  return(
    <div>
      <h3>Available Users</h3>
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

export default UserList;