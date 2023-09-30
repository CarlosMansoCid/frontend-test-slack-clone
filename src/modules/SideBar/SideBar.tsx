import SpaceHeader from "../../components/SpaceHeader/SpaceHeader"
import SidebarLayout from "../../layouts/sidebarLayout/Sidebar.layout"
import SidebarsLinks from "../SidebarLinks/SidebarsLinks"
import { sidebarLinksMock } from "../../lib/mockedData/SidebarLinksMock"
import Chanels from "../Chanels/Chanels"

const SideBar = () => {
  return (
    <SidebarLayout>
        <SpaceHeader spacename='MansoSpace'/>
        <SidebarsLinks links={sidebarLinksMock}/>
        <Chanels/>
    </SidebarLayout>
  )
}

export default SideBar