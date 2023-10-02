import styled from 'styled-components'
import {LuClock3} from 'react-icons/lu'
const History = () => {
  return (
    <HistoryContainer>
        <Icon>
            <LuClock3/>
        </Icon> 
    </HistoryContainer>
  )
}

export default History

const HistoryContainer = styled.div`
    width: 1rem;
    height: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
`
const Icon = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--color-white);
`