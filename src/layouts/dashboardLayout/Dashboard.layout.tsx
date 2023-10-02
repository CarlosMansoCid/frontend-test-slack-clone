import styled from 'styled-components'
import NavBar from '../../modules/NavBar/NavBar'
import SideBar from '../../modules/SideBar/SideBar'
import { ReactNode } from 'react'

interface IDashboarLayout {
    children: ReactNode
}
const DashboardLayout = ({children}:IDashboarLayout) => {
    return (
        <DashboardContainer>
        <NavBar/>
        <BodyContainer>
            <SideBar/>
            <BodyContent>
                {children}
            </BodyContent>
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
const BodyContent = styled.div`
    width: 85%;
    
`
export default DashboardLayout