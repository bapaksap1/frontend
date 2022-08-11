import { ModalProvider } from 'styled-react-modal'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import FancyModalButton from './ModalsLogin'


const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  opacity: ${props => props.opacity};
  background-color: green;
`

export default function App() {
  return (
    <ThemeProvider>
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <FancyModalButton />
      </ModalProvider>
    </ThemeProvider>
  )
}