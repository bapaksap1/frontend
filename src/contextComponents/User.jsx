import { useContext } from "react";
import { UserContext } from "../context/User";

const User = ({user}) => {
  const {dispatchUserEvent} = UserContext(UserContext);
  const handleRemoveUser = () =>{
    dispatchUserEvent('REMOVE_USER', {userId: user.id})
  }  
  return(
    <div className="User">
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <button onClick={handleRemoveUser}>Delete User</button>
    </div>
  )
}

export default User;