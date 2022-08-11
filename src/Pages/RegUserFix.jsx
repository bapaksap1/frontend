import react, {useState, useEffect} from "react";
import { useDispatch } from "react-redux"
import {addUser, update} from '../features/UserSlice'
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu"
import axios from 'axios'
import styled from 'styled-components'
import { Rec3, Grid1, H1, H2, H3, DivInput, DivInput2, FontInput, Input, Button, Image } from "./RegUserStyle";




const RegUserFix = () =>{
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const dispatch = useDispatch();



  const Register = async(e) => {
    e.preventDefault();
    try {
      await dispatch(addUser({name, email, password, confPassword}))
      navigate('/showusers')
    } catch (error) {
      console.log(error)
    }

  }

  return(
    <>
    <Grid1>
    <div>
    <Rec3>
      <H1>Welcome !</H1>
      <H2>Sign Up to</H2>
      <H3>Naufal's Project</H3>
      <form  onSubmit={Register}>
      <DivInput>
        <DivInput2>
            <FontInput>Name</FontInput>
            <Input type='text' placeholder="Masukkan Nama Anda" value={name}  onChange={(e) => setName(e.target.value)} />
        </DivInput2>
        <DivInput2>
            <FontInput>Email</FontInput>
            <Input type='text' placeholder="Masukkan Email Anda" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </DivInput2>
        <DivInput2>
            <FontInput>Password</FontInput>
            <Input type='password' placeholder="Masukkan Password Anda" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </DivInput2>
        <DivInput2>
            <FontInput>Confirm Password</FontInput>
            <Input type='password' placeholder="Konfirmasi Password Anda" value={confPassword}  onChange={(e) => setConfPassword(e.target.value)}/>
        </DivInput2>
        <DivInput2>
            <Button onClick={Register}>Register</Button>
        </DivInput2>
      </DivInput>
      </form>
    </Rec3>
    </div>
    <div>
    <Image src="sketch.png"/>
    </div>
    </Grid1>
    
    </>
  )

}

export default RegUserFix
