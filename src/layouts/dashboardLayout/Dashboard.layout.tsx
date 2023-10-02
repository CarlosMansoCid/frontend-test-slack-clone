import styled from 'styled-components'
import NavBar from '../../modules/NavBar/NavBar'
import SideBar from '../../modules/SideBar/SideBar'
import { ReactNode } from 'react'
import { getItemFromTheLocalStorage } from '../../utils/getItemFromTheLocalStorage'

interface IDashboarLayout {
    children: ReactNode
}
const DashboardLayout = ({children}:IDashboarLayout) => {

    const userInLocalStorage = getItemFromTheLocalStorage('user')
    const user = userInLocalStorage && JSON.parse(userInLocalStorage)

    return (
        <DashboardContainer>
        <NavBar user={user}/>
        <BodyContainer>
            <SidebarContainer>
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
`
const BodyContentContainer = styled.div`
    width: 80%;
    position: fixed;
    top: 3rem;
    left: 20%;
    min-height: 100%;
`
export default DashboardLayout