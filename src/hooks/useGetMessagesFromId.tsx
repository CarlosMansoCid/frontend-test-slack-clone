import { useEffect, useState  } from "react"
import { TMessageData } from "../domain/types/messageDataType"
import { messagesMock } from "../lib/mockedData/MessagesMock"

interface IUseGetMessagesFromId  {
    id:string | undefined
}
const useGetMessagesFromId = ({id}:IUseGetMessagesFromId) => {

    const [onProcess, setOnProcess] = useState(false)
    const [data, setData] = useState<TMessageData | {}>({})

    useEffect(()=>{
        setData({})
        setOnProcess(true)
        setTimeout(()=>{
            const messages = messagesMock.filter((message) => message.from._id === Number(id))
            !!messages[0] && setData(messages[0])
            setOnProcess(false)
        },1000)
    },[id])


  return {onProcess, data}
}

export default useGetMessagesFromId