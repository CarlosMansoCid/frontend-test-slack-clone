import { ReactNode } from "react"
import { styled } from "styled-components"

interface IModal {
    show: boolean,
    children: ReactNode
}

const Modal = ({show, children}:IModal) => {


  return (
    <ModalContainer open={show} >
      <Container>
        {children}
      </Container>
    </ModalContainer>
  )
}

export default Modal

const ModalContainer = styled.dialog`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: #22222294;
    padding: 0;

`
const Container = styled.div`
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
    top: 0;
    left: 0;
`