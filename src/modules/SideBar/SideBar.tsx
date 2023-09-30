import SpaceHeader from "../../components/SpaceHeader/SpaceHeader"
import SidebarLayout from "../../layouts/sidebarLayout/Sidebar.layout"
import SidebarsLinks from "../SidebarLinks/SidebarsLinks"
import { sidebarLinksMock } from "../../lib/mockedData/SidebarLinksMock"

const SideBar = () => {
  return (
    <SidebarLayout>
        <SpaceHeader spacename='MansoSpace'/>
        <SidebarsLinks links={sidebarLinksMock}/>
    </SidebarLayout>
  )
}

export default SideBar