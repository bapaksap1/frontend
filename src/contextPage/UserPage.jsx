// import React, { useState } from 'react';
// import UserList from '../contextComponents/UserList';
// import AddUser from '../contextComponents/AddUser';
// import { AppContext } from './context';

// const UserPage = () => {
// 	const [ users, setUsers ] = useState([]);
	
// 	const dispatchUserEvent = (actionType, payload) => {
// 		switch (actionType) {
// 			case 'ADD_USER':
// 				setUsers([ ...users, payload.newUser ]);
// 				return;
// 			case 'REMOVE_USER':
// 				setUsers(users.filter(user => user.id !== payload.userId));
// 				return;
// 			default:
// 				return;
// 		}
// 	};

// 	return (
// 		<div className="App">
// 			<AppContext.Provider value={{ users, dispatchUserEvent }}>
// 				<AddUser />
// 				<UserList />
// 			</AppContext.Provider>
// 		</div>
// 	);
// }

// export default UserPage;