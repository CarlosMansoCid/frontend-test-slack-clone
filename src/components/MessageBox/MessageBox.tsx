import styled from 'styled-components'
import Avatar from '../Avatar/Avatar'
import { TCoworkerMock } from '../../lib/mockedData/CoworkersMock'

interface IMessageBox {
    message: string,
    remitent: TCoworkerMock,
}

const MessageBox = ({message,remitent}:IMessageBox) => {

  
  return (
    <MessageBoxContainer data-testid='messagebox'>
        <Avatar username={remitent.username} 
                isOnline={remitent.isOnline} 
                id={remitent._id.toString()}
                backgroundColor={remitent.backgroundColor}
                />
        <TextMessageBox>
            <Header>
                <strong>{remitent.username}</strong>
            </Header>
            {message}
        </TextMessageBox>
    </MessageBoxContainer>
  )
}

export default MessageBox
const MessageBoxContainer = styled.div`
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: row;
`
const TextMessageBox = styled.div`
    width: 90%;
    margin-left: .5rem;

`
const Header = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`