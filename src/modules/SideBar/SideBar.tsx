import SpaceHeader from "../../components/SpaceHeader/SpaceHeader"
import SidebarLayout from "../../layouts/sidebarLayout/Sidebar.layout"
import SidebarsLinks from "../SidebarLinks/SidebarsLinks"
import { sidebarLinksMock } from "../../lib/mockedData/SidebarLinksMock"
import Chanels from "../Chanels/Chanels"
import DirectMessages from "../DirectMessages/DirectMessages"

const SideBar = () => {
  return (
    <SidebarLayout>
        <SpaceHeader spacename='MansoSpace'/>
        <SidebarsLinks links={sidebarLinksMock}/>
        <Chanels/>
        <DirectMessages/>
    </SidebarLayout>
  )
}

export default SideBar