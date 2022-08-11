import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../components/Table'
import {useEffect} from 'react'
import { getUser, userSelectors } from '../features/UserSlice'
import { useNavigate } from 'react-router-dom'

const ShowUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.selectAll)
  const navigate = useNavigate()

  const Register = () => {
    navigate("/reguser")
  }

  useEffect(()=>{
    dispatch(getUser());
  }, [dispatch])

  return(
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {user.map((user, index) => (
          <tr key={(user.id)}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
        ))}
      </table>
      <button onClick={Register}>Register User</button>
    </div>
  )
}

export default ShowUser;