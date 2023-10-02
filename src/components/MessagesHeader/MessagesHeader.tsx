import styled from 'styled-components'
import { useRemitentStore } from '../../domain/store/useRemitentStore'
import Avatar from '../Avatar/Avatar'

const MessagesHeader = () => {

    const remitent = useRemitentStore((state:any) => state.remitent.remitent)

  return (
    <Header>
        <Container>
            <Avatar username={remitent.username}
                    isOnline={remitent.isOnline}
                    id={remitent._id}
                    backgroundColor={remitent.backgroundColor}/>
            <Username>{remitent.username}</Username>
        </Container>
    </Header>
  )
}

export default MessagesHeader
const Header = styled.div`
    width: 100%;
    border-bottom: solid 1px #cfcece;
`
const Container = styled.div`
    width: 98%;
    margin: .5rem auto;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`
const Username = styled.h2`
    margin: 0 .5rem;
    font-size: 1.3rem;
`