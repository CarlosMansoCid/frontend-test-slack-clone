import DashboardLayout from "../../layouts/dashboardLayout/Dashboard.layout"
import {Helmet} from "react-helmet";

const Dashboard = () => {
  
  return (
    <DashboardLayout>
      <Helmet>
        <title>Slack | Dashboard</title>
        <meta name="description" content="Bienvenidos a slack"/>
      </Helmet>
        body content
    </DashboardLayout>
  )
}

export default Dashboard
