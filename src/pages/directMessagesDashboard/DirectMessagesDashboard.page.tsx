
import { useParams } from "react-router-dom"
import DashboardLayout from "../../layouts/dashboardLayout/Dashboard.layout"
import DirectMessagesContainerLayout from "../../layouts/directMessagesContainerLayout/DirectMessagesContainerLayout.layout"
import useGetMessagesFromId from "../../hooks/useGetMessagesFromId"
import { TMessageData } from "../../domain/types/messageDataType"
import MessageBox from "../../components/MessageBox/MessageBox"
import { getItemFromTheLocalStorage } from "../../utils/getItemFromTheLocalStorage"
import { TCoworkerMock } from "../../lib/mockedData/CoworkersMock"


const DirectMessagesDashboard = () => {

  const {id} = useParams()

  const {onProcess, data} = useGetMessagesFromId({id})
  
  const messages  = Object.keys(data).length > 0 ? (data as TMessageData).messages : []

  const userInLocalStorage = getItemFromTheLocalStorage('user')
  const user = userInLocalStorage && JSON.parse(userInLocalStorage)
  

  return (
    <DashboardLayout>
        <DirectMessagesContainerLayout>
          {
            onProcess ? <>cargando</>
            :
            Object.keys(messages).length > 0 ? 
            messages.map(message => {
              return <MessageBox message={message.message} 
                                 remitent={message.from === 'self' ? user : (data as TMessageData).from}/>
            })
            :
            <>No hay mensajes</>
          }
        </DirectMessagesContainerLayout>
    </DashboardLayout>
  )
}

export default DirectMessagesDashboard