import styled from 'styled-components'

export const Rec3 = styled.div`
  box-sizing: border-box;
  width: 505px;
  height: 600px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  margin-left: 111px;
  margin-top: 80px;

  background: #FFFFFF;
  border: 0.5px solid #878787;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  border-radius: 10px;`

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
  gap: 10px;
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

export const Image = styled.img`
  background: url(image.png);
  `

export const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* background-color: #2196F3; */
  padding: 0px;
  width: 100%;
  height: 100%;
  `