import react, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu"
import axios from 'axios'
import styled from 'styled-components'
import { Rec3, Grid1, H1, H2, H3, DivInput, DivInput2, FontInput, Input, Button, Image } from "./RegUserStyle";




const RegUser = () =>{
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });
  console.log(input)

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  const Register = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users',{
        ...input
      });
      navigate('/dashboard')
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
      <DivInput>
      <DivInput2>
          <FontInput>Name</FontInput>
          <Input type='text' placeholder="Masukkan Nama Anda" value={input.name}  onChange={handleInputChange} />
      </DivInput2>
      <DivInput2>
          <FontInput>Email</FontInput>
          <Input type='text' placeholder="Masukkan Email Anda" value={input.email} onChange={(e) => setInput(input.email=e.target.value)}/>
      </DivInput2>
      <DivInput2>
          <FontInput>Password</FontInput>
          <Input type='password' placeholder="Masukkan Password Anda" value={input.password} onChange={(e) => setInput.password(e.target.value)}/>
      </DivInput2>
      <DivInput2>
          <FontInput>Confirm Password</FontInput>
          <Input type='password' placeholder="Konfirmasi Password Anda" value={input.confPassword}  onChange={(e) => setInput.confPassword(e.target.value)}/>
      </DivInput2>
      <DivInput2>
          <Button onClick={Register}>Register</Button>
      </DivInput2>
      </DivInput>
    </Rec3>
    </div>
    <div>
    <Image src="sketch.png"/>
    </div>
    </Grid1>
    
    </>
  )

}

export default RegUser
