
import { useParams } from "react-router-dom"
import DashboardBodyContainerLayout from "../../layouts/dashboardBodyContainerLayout/DashboardBodyContainer.layout"
import DashboardLayout from "../../layouts/dashboardLayout/Dashboard.layout"


const DirectMessagesDashboard = () => {

  const {id} = useParams()
  
  return (
    <DashboardLayout>
      <DashboardBodyContainerLayout>
        direct messagess
      </DashboardBodyContainerLayout>
    </DashboardLayout>
  )
}

export default DirectMessagesDashboard