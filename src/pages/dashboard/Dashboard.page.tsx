import DashboardLayout from "../../layouts/dashboardLayout/Dashboard.layout"
import {Helmet} from "react-helmet";

const Dashboard = () => {
  
  return (
    <DashboardLayout>
      <Helmet>
        <title>Slack | Dashboard</title>
        <meta name="description" content="Bienvenidos a slack"/>
      </Helmet>
        Bienvenido a MansoSpace, prueba mirar los mensajes directos a Proceso de seleccion ;), o explora la pagina a tu gusto.
    </DashboardLayout>
  )
}

export default Dashboard
