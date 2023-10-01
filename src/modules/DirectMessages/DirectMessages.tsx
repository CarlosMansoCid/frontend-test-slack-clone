import { styled } from "styled-components"
import Acordeon from "../../components/Acordeon/Acordeon"
import AddButton from "../../components/Buttons/AddButton/AddButton"
import { coworkerMock } from "../../lib/mockedData/CoworkersMock"
import CoworkerCard from "../../components/CoworkerCard/CoworkerCard"

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
                  <CoworkerCard key={coworker._id} coworker={coworker}/>
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
