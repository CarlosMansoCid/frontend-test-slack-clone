
import { useParams } from "react-router-dom"
import DashboardLayout from "../../layouts/dashboardLayout/Dashboard.layout"
import DirectMessagesContainerLayout from "../../layouts/directMessagesContainerLayout/DirectMessagesContainerLayout.layout"
import useGetMessagesFromId from "../../hooks/useGetMessagesFromId"
import { TMessageData } from "../../domain/types/messageDataType"
import MessageBox from "../../components/MessageBox/MessageBox"


const DirectMessagesDashboard = () => {

  const {id} = useParams()

  const {onProcess, data} = useGetMessagesFromId({id})
  
  const messages  = !!data ? (data as TMessageData).messages: []

  return (
    <DashboardLayout>
        <DirectMessagesContainerLayout>
          {
            onProcess ? <>cargando</>
            :
            Object.keys(messages).length > 0 ? 
            messages.map(message => {
              return <MessageBox message={message.message} 
                                 self={message.from === 'self'}
                                 remitent={(data as TMessageData).from}/>
            })
            :
            <>No hay mensajes</>
          }
        </DirectMessagesContainerLayout>
    </DashboardLayout>
  )
}

export default DirectMessagesDashboard