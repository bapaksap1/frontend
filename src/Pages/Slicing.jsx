import React from 'react'
import styled from 'styled-components'





const Slicing = () => {

  return(
    <>
      <Grid1>
        <div> 
          <Button>ini adalah tombol</Button>
        </div>
        <div>
          <GambarBvic src="image-48.png" alt='test'/>
        </div>
      </Grid1>
    </>
  )

}

export default Slicing;

const GambarBvic = styled.img`
  background: url(image.png);
`
const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;

    position: absolute;
    width: 509px;
    height: 43px;
    left: 64px;
    top: 511px;

    background: #BCC8E7;
    box-shadow: 0px 6px 6px rgba(188, 200, 231, 0.2);
    border-radius: 6px;
    `

    const Grid1 = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: #2196F3; */
      padding: 0px;
      width: 100%;
    `