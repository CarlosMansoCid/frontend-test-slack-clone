import { styled } from "styled-components"
import Acordeon from "../../components/Acordeon/Acordeon"
import ChanelTag from "../../components/ChanelTag/ChanelTag"
import { chanelsMock } from "../../lib/mockedData/ChanelsMock"
import AddNewChanelButton from "../../components/AddNewChanelButton/AddNewChanelButton"


const Chanels = () => {

  const chanels = chanelsMock

  return (
    <ChanelsContainer>
      <Content>
        <Acordeon title="Canales">
          {
            !!chanels ?
              chanels.map(chanel =>{
                return(
                  <ChanelTag key={chanels.indexOf(chanel)} title={chanel.title}/>
                )
              })
              :<>No hay canales</>
          }
          <AddNewChanelButton/>
        </Acordeon>
      </Content>
    </ChanelsContainer>
  )
}

export default Chanels

const ChanelsContainer = styled.div`
  width: 100%;
  padding-top: .5rem;
  padding-bottom: .5rem;

`
const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`