
import { useParams } from "react-router-dom"
import DashboardLayout from "../../layouts/dashboardLayout/Dashboard.layout"
import DirectMessagesContainerLayout from "../../layouts/directMessagesContainerLayout/DirectMessagesContainerLayout.layout"


const DirectMessagesDashboard = () => {

  const {id} = useParams()

  return (
    <DashboardLayout>
        <DirectMessagesContainerLayout>
          direct messagess
        </DirectMessagesContainerLayout>
    </DashboardLayout>
  )
}

export default DirectMessagesDashboard