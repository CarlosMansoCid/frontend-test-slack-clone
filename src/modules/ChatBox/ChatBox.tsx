import { styled } from "styled-components"
import FormLayout from "../../layouts/formLayout/FormLayout"
import GenericInput from "../../components/genericInput/GenericInput"

const ChatBox = () => {
  return (
    <ChatBoxContainer>
        <Box> 
            <FormLayout onSubmitForm={(data)=>console.log(data)}>
                <GenericInput   type="text" 
                                name="message"
                                placeholder="Escriba el mensaje"
                                definitions={{required:true}}
                                title="Escriba su mensaje"
                                label={false}/>
                <ButtonContainer>
                    <SendMessageButton type='submit' value="enviar mensaje"/>
                </ButtonContainer>
            </FormLayout>        
        </Box>
    </ChatBoxContainer>
  )
}

export default ChatBox

const ChatBoxContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: absolute;
    bottom: 4rem;
    left: auto;
    right: auto;
`
const Box = styled.div`
    width: 98%;
    height: 100%;
    margin: 0 auto;
    border: solid 2px #b8b7b7;
    border-radius: var(--radius-m);
    background-color: var(--color-white);

`
const SendMessageButton = styled.input`
    padding: .5rem 1rem;
    border: none;
    background-color: var(--color-green);
    color: var(--color-white);
    border-radius: var(--radius-m);
    margin: .5rem;
`   
const ButtonContainer = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`