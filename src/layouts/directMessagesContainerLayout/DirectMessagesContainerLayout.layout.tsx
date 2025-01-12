import { ReactNode } from 'react'
import styled from 'styled-components'
import ChatBox from '../../modules/ChatBox/ChatBox'
import MessagesHeader from '../../components/MessagesHeader/MessagesHeader'
import { TCoworkerMock } from '../../lib/mockedData/CoworkersMock'

interface IDirectMessagesLayout {
    children: ReactNode,
}
const DirectMessagesContainerLayout = ({children}:IDirectMessagesLayout) => {
  return (
    <DirectMessagesLayout>
        <MessagesHeader/>
        <MessagesContainer>
            {children}
        </MessagesContainer>
        <ChatBox/>
    </DirectMessagesLayout>
  )
}

export default DirectMessagesContainerLayout

const DirectMessagesLayout = styled.div`
    width: 100%;
    min-height: 100vh;
    

`
const MessagesContainer = styled.div`
    width: 100%;
    height:68vh;
    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;  
    scrollbar-width: none; 

    &::-webkit-scrollbar {
        display: none;
    }

    @media (width < 800px){
        width: 90%;
        margin: 0 auto;
    }
`