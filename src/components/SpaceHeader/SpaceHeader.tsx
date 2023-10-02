import { styled } from "styled-components"
import {BsPencilSquare} from 'react-icons/bs'
import {IoRocketOutline} from 'react-icons/io5'

interface ISpaceHeader {
    spacename: string
}
const SpaceHeader = ({spacename}:ISpaceHeader) => {
  return (
    <SpaceHeaderContainer>
        <Container>
            <SpaceNameContainer>
                <SpaceName>{spacename}</SpaceName>
                <NewMessageButton>  
                    <BsPencilSquare/>
                </NewMessageButton>
            </SpaceNameContainer>
            <ChangePlanButton>
                <IoRocketOutline style={{fontSize:'1.2rem', marginRight:'1rem'}}/>
                Cambiar de plan
            </ChangePlanButton>
        </Container>
    </SpaceHeaderContainer>
  )
}

export default SpaceHeader

const SpaceHeaderContainer = styled.div`
    width: 100%;
    border-top: solid 1px var(--color-white);
    border-bottom: solid 1px var(--color-white);
    position: sticky;
    top: 3rem;
    background-color: var(--color-sidebar);

`
const Container = styled.div`
    width: 90%;
    margin: 0 auto;

`
const SpaceNameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`
const SpaceName = styled.h1`
    color: var(--color-white);
`
const NewMessageButton = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: var(--color-white);
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--color-main);
    cursor: pointer;
`
const ChangePlanButton = styled.button`
    width: 100%;
    border: solid 1px var(--color-white);
    background-color: transparent;
    color: var(--color-white);
    margin:0 auto 1rem auto;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-m);

`