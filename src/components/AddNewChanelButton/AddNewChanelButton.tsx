import { styled } from "styled-components"
import useToggle from "../../hooks/useToggle"
import AddButton from "../Buttons/AddButton/AddButton"
import Modal from "../Modal/Modal"
import { FaTimes } from "react-icons/fa"
import FormLayout from "../../layouts/formLayout/FormLayout"
import GenericInput from "../genericInput/GenericInput"
import { useChanel } from "../../hooks/useChanel"
import { FieldValues } from "react-hook-form"

const AddNewChanelButton = () => {
    const {value, toggle, setNewValue} = useToggle()
    const {onProcess, success, addNewChanel} = useChanel()

    const handleAddChanel = (data:FieldValues) =>{
        addNewChanel(data.chanel)
        setNewValue(false)
    }

    

  return (
    <>
        <AddButton title='Agregar canal' action={()=>toggle()}/>
        <Modal show={value}>
            <AddChanelContainer>
                <FormLayout onSubmitForm={(data)=>handleAddChanel(data)}>
                    <GenericInput definitions={{required:true}}
                                  label
                                  name="chanel"
                                  placeholder="Ingrese el nombre del canal"
                                  title="Ingrese el nombre del canal"
                                  type="text"
                                  />
                    <AddChanelButtonContainer>
                        {
                            onProcess ? 
                            <>loading...</>
                            :
                            <AddChanelButton value="Agregar canal" type='submit'/>

                        }
                    </AddChanelButtonContainer>
                </FormLayout>
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
    padding: 1rem;
    
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
    cursor: pointer;
    color: var(--color-white);
`
const AddChanelButton = styled.input`
    width: 30%;
    color: var(--color-white);
    background-color: var(--color-green);
    border: none;
    border-radius: var(--radius-m);
    padding: .5rem 1rem;
    margin-right: .5rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
     
`
const AddChanelButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`