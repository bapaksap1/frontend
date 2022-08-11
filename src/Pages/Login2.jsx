import react, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ModalFunction } from "../Modals/ModalsLogin";

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [buttonDisable, setButtonDisable] = useState(false)
  const [modal, setModal] = useState(false)
  const navigate = useNavigate();


  const login = async(e) =>{
    e.preventDefault();
    setModal(!modal)
    try {
      await axios.post('http://localhost:5000/login',{
        email,
        password,
      });
    } catch (error) {
      console.log(error)
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  }


  return(
    <>
    <Grid1>
      <div>
        <Rec3>
        <H1>Welcome !</H1>
        <H2>Sign In to</H2>
        <H3>Naufal's Project</H3>
        <form onSubmit={login}>
        <DivInput>
          <DivInput2>
            <FontInput>Email</FontInput>
            <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </DivInput2>
          <DivInput2>
            <FontInput>Password</FontInput>
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </DivInput2>
          <DivInput2>
            <Button>Login</Button>
          </DivInput2>
        </DivInput>
        </form>
        {modal && <ModalFunction />}
        </Rec3>
      </div>
      <div>
        <Image src="sketch.png"/>
      </div>
    </Grid1>

    </>
  )
}

export default Login2

const Grid1 = styled.div`
  display: grid;
  outline-color: red;
  grid-template-columns: 1fr 1fr;
  /* background-color: #2196F3; */
  padding: 0px;
  width: 100%;
  height: 100%;
  `

const Rec3 = styled.div`
  box-sizing: border-box;
  width: 505px;
  height: 550px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 111px;
  margin-top: 80px;

  background: #FFFFFF;
  border: 0.5px solid #878787;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  border-radius: 10px;`

  
export const Image = styled.img`
  background: url(image.png);
  `

export const H1 = styled.h1`

font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 25px;
line-height: 38px;
color: #000000;`


export const H2 = styled.h2`

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 31px;
line-height: 46px;
color: #000000;
` 

export const H3 = styled.h3`

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
` 

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 40px;
  `

export const DivInput2 = styled.div`
  display: flex;
  flex-direction: column;
  `
 export const Input = styled.input`
 /* Rectangle 4 */ 

 border-radius: 6px;
 width: 423px;
 height: 59px;
 /* identical to box height */

::placeholder {
 color: #ABABAB;
 font-family: 'Poppins';
 font-style: normal;
 font-weight: 300;
 font-size: 14px;
 line-height: 21px;
 position: relative;
 left: 14px;
 top: 28,5px;
} 
`
export const FontInput = styled.p`
 /* position: relative; */

 font-family: 'Poppins';
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 line-height: 24px;
 color: black;
 `
export const Button = styled.button`
 position: absolute;
 width: 423px;
 height: 57px;
 background: #000000;
 border-radius: 6px;

 font-family: 'Poppins';
 font-style: normal;
 font-weight: 500;
 font-size: 16px;
 line-height: 24px;
 color: #ffffff;

&:hover {background-color:#171717}

&:active {
  background-color:#171717;

  transform: translateY(0.5px);
}
 ` 