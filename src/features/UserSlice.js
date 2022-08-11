import {createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import axios from "axios";


export const getUser = createAsyncThunk("user/getAllUsers", async() => {
  const response = await axios.get('http://localhost:5000/allusers');
  return response.data
})

export const addUser = createAsyncThunk("user/addUsers", async({name, email, password, confPassword}) => {
  const response =  await axios.post('http://localhost:5000/users',{
    name,
    email,
    password,
    confPassword  
  });;
  return response.data
})

const userEntity = createEntityAdapter({
  selectID: (user) => user.id
})

const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState(),
  extraReducers:{
    [getUser.fulfilled]: (state, action) =>{
      userEntity.setAll(state, action.payload);
    },
    [addUser.fulfilled]: (state, action) =>{
      userEntity.addOne(state, action.payload);
    },
}
});

export const userSelectors = userEntity.getSelectors(state => state.user);
export const {update} = userSlice.actions;
export default userSlice.reducer;