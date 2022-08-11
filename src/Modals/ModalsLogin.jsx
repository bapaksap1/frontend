import styled from "styled-components";
import React from "react";
import Modal from "styled-react-modal";
import { useState } from "react";

const ModalsLogin = () =>{
  const [muncul, setMuncul] = useState(false)
  const modal = () => {
    setMuncul(!muncul)
    console.log("Sudah terpencet")
  }
  return (
    <div>
      <button onClick={modal}>Pencet ini gan</button>
      {muncul && <ModalFunction />}
    </div>
  )
}

export function ModalFunction () {
  console.log("Ini adalah fungsi modal")
  return (
      <>
        <Mod>
          <ModContent>
            <ModalHeader>
              <ModalBody>
                
              </ModalBody>
            </ModalHeader>
          </ModContent>
        </Mod>
      </>
  )
}

export default ModalsLogin;

const Mod = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */`

const ModContent = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
&::webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}
&::keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}`

const Close = styled.div`
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
&:close:hover,
&:close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`
const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
`

const ModalBody = styled.div`
padding: 2px 16px;
`

const ModalFooter  = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;

`

