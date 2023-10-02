
import { useParams } from "react-router-dom"
import DashboardLayout from "../../layouts/dashboardLayout/Dashboard.layout"
import DirectMessagesContainerLayout from "../../layouts/directMessagesContainerLayout/DirectMessagesContainerLayout.layout"
import useGetMessagesFromId from "../../hooks/useGetMessagesFromId"
import { TMessageData } from "../../domain/types/messageDataType"
import MessageBox from "../../components/MessageBox/MessageBox"
import { getItemFromTheLocalStorage } from "../../utils/getItemFromTheLocalStorage"
import Loader from "../../components/Loader/Loader"
import { styled } from "styled-components"
import {Helmet} from 'react-helmet'


const DirectMessagesDashboard = () => {

  const {id} = useParams()

  const {onProcess, data} = useGetMessagesFromId({id})

  const messages = Object.keys(data).length > 0 ? (data as TMessageData).messages : []
  const userInLocalStorage = getItemFromTheLocalStorage('user')

  const user = userInLocalStorage && JSON.parse(userInLocalStorage)
  

  return (
    <DashboardLayout>
        <Helmet>
          <title>Slack | Dashboard</title>
          <meta name="description" content="Bienvenidos a slack"/>
        </Helmet>
        <DirectMessagesContainerLayout>
          { 
            onProcess ? <Loader/>
            :
            messages.length > 0 ? 
            messages.map(message => {
              return <MessageBox message={message.message} 
                                 remitent={message.from === 'self' ? user : (data as TMessageData).from}/>
            })
            :
            <EmptyMessageTag>No hay mensajes</EmptyMessageTag>
          }
        </DirectMessagesContainerLayout>
    </DashboardLayout>
  )
}

export default DirectMessagesDashboard

const EmptyMessageTag = styled.div`
  width: 80%;
  height: auto;
  margin: 2rem auto;
  border: solid 2px var(--color-main);
  border-radius: var(--radius-m);
  padding: 1rem;
  text-align: center;
`