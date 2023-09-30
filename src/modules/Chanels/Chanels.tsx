import { styled } from "styled-components"
import Acordeon from "../../components/Acordeon/Acordeon"

const Chanels = () => {
  return (
    <ChanelsContainer>
      <Content>
        <Acordeon title="Canales">
          cana
        </Acordeon>
      </Content>
    </ChanelsContainer>
  )
}

export default Chanels

const ChanelsContainer = styled.div`
  width: 100%;
  border-bottom: solid 1px var(--color-white);
  padding-top: .5rem;
  padding-bottom: .5rem;

`
const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`