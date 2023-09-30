import { styled } from "styled-components"
import Acordeon from "../../components/Acordeon/Acordeon"
import ChanelTag from "../../components/ChanelTag/ChanelTag"
import AddButton from "../../components/Buttons/AddButton/AddButton"
import { coworkerMock } from "../../lib/mockedData/CoworkersMock"
import Avatar from "../../components/Avatar/Avatar"

const DirectMessages = () => {
  const coworkers = coworkerMock
  return (
    <ChanelsContainer>
      <Content>
        <Acordeon title="Mensajes directos">
          {
            !!coworkers ?
              coworkers.map(coworker =>{
                return(
                    <CoworkerCard>
                        <Avatar username={coworker.username} isOnline={coworker.isOnline} id="small"/>
                        <P>{coworker.username}</P>
                    </CoworkerCard>
                )
              })
              :<>No hay companeros</>
          }
          <AddButton title='Agregar companero' action={()=>console.log('agregar companero')}/>
        </Acordeon>
      </Content>
    </ChanelsContainer>
  )
}

export default DirectMessages

const ChanelsContainer = styled.div`
  width: 100%;
  padding-top: .5rem;
  padding-bottom: .5rem;

`
const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`
const CoworkerCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: var(--radius-m);
    margin: .3rem 0;
    cursor: pointer;
    &:hover{
        background-color: var(--color-main-ligth-opacity);
    }

`
const P = styled.p`
    font-size: .8rem;
    color: var(--color-white);
    margin: 0 .5rem;
`