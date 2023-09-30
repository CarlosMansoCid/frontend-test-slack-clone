import styled from 'styled-components'
import NavBar from '../../modules/NavBar/NavBar'
import SideBar from '../../modules/SideBar/SideBar'

const Dashboard = () => {
  return (
    <DashboardContainer>
        <NavBar/>
        <BodyContainer>
            <SideBar/>
        </BodyContainer>
    </DashboardContainer>
  )
}

export default Dashboard

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
`