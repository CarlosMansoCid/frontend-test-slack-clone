import styled from 'styled-components'
import NavBar from '../../modules/NavBar/NavBar'
import SideBar from '../../modules/SideBar/SideBar'
import { ReactNode } from 'react'
import { getItemFromTheLocalStorage } from '../../utils/getItemFromTheLocalStorage'
import { useShowSidebarStore } from '../../domain/store/useShowSidebarStore'

interface IDashboarLayout {
    children: ReactNode
}
const DashboardLayout = ({children}:IDashboarLayout) => {

    const userInLocalStorage = getItemFromTheLocalStorage('user')
    const user = userInLocalStorage && JSON.parse(userInLocalStorage)
    const show = useShowSidebarStore((state:any) => state.show)

    return (
        <DashboardContainer>
        <NavBar user={user}/>
        <BodyContainer>
            <SidebarContainer id={show ? 'show' : 'hidden'}>
                <SideBar/>
            </SidebarContainer>
            <BodyContentContainer>
                {children}
            </BodyContentContainer>
        </BodyContainer>
    </DashboardContainer>
  )
}

const DashboardContainer = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const BodyContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    position: relative;
`
const SidebarContainer = styled.div`
    width: 20%;
    min-height: 100vh;

    @media (width < 800px){
        display: none;
        width: 0;

        &#show{
            display: flex;
            width: 50%;
        }
    }
`
const BodyContentContainer = styled.div`
    width: 80%;
    position: fixed;
    top: 3rem;
    left: 20%;
    min-height: 100%;
    /* position: relative; */

    @media (width < 800px){
        width: 100%;
        position: fixed;
        top: 3rem;
        left: 0;
    }
`
export default DashboardLayout