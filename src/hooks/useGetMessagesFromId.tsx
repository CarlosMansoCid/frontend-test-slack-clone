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
        setOnProcess(true)
        setTimeout(()=>{
            setData(messagesMock.filter((message)=>message.from._id === Number(id))[0])
            setOnProcess(false)
        },1000)
    },[id])


  return {onProcess, data}
}

export default useGetMessagesFromId