import { styled } from "styled-components"
import Avatar from "../../components/Avatar/Avatar"
import SearchBar from "../../components/SearchBar/SearchBar"
import History from "../../components/History/History"
import { TCoworkerMock } from "../../lib/mockedData/CoworkersMock"
 
interface INavBar {
    user: TCoworkerMock
}

const NavBar = ({user}:INavBar) => {
  return (
    <NavBarContainer>
        <Content>
            <SideContainer>
                <History/>
            </SideContainer>
            <CenterContainer>
                <SearchBar/>
            </CenterContainer>
            <SideContainer>
                <Avatar username={user.username} 
                        isOnline={user.isOnline} 
                        id={user._id.toString()} 
                        backgroundColor={user.backgroundColor}/>
            </SideContainer>
        </Content>
    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = styled.div`
    width: 100vw;
    /* padding: 1rem; */
    background-color: var(--color-main);
    position: sticky;
    top: 0;
    z-index: 999;

`
const SideContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`
const CenterContainer = styled.div`
    width: 60%;
`
const Content = styled.div`
    width: 98%;
    margin: 0 auto;
    padding: .5rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`