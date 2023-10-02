import { ReactNode } from 'react'
import styled from 'styled-components'
import ChatBox from '../../modules/ChatBox/ChatBox'
import MessagesHeader from '../../components/MessagesHeader/MessagesHeader'

interface IDirectMessagesLayout {
    children: ReactNode
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
    height: 100vh;
    overflow-y: scroll;
`