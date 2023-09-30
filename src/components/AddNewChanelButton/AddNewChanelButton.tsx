import { styled } from "styled-components"
import useToggle from "../../hooks/useToggle"
import AddButton from "../Buttons/AddButton/AddButton"
import Modal from "../Modal/Modal"
import { FaTimes } from "react-icons/fa"

const AddNewChanelButton = () => {
    const {value, toggle, setNewValue} = useToggle()
    console.log(value)
  return (
    <>
        <AddButton title='Agregar canal' action={()=>toggle()}/>
        <Modal show={value}>
            <AddChanelContainer>
                <CloseButton onClick={()=>toggle()}><FaTimes/></CloseButton>
            </AddChanelContainer>
        </Modal>
    </>
  )
}

export default AddNewChanelButton

const AddChanelContainer = styled.div`
    width: 50%;
    min-height: 50vh;
    background-color: var(--color-white);
    border-radius: var(--radius-m);
    position: relative;
    
`
const CloseButton = styled.div`
    width: 1rem;
    height: 1rem;
    padding: .5rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #8f8f8fe2;
    top: -10px;
    right: -10px;
    color: var(--color-white);
`