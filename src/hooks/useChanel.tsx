import { useState } from "react"
import { useChanelstStore } from "../domain/store/useChanelsStore"

export const useChanel = () => {

    const [onProcess, setOnProcess] = useState(false)
    const [success, setSuccess] = useState(false)

    const addChanel = useChanelstStore((state:any )=> state.addChanel)

    const addNewChanel = (chanelName:string) =>{

        setSuccess(false)
        setOnProcess(true)

        setTimeout(()=>{
            addChanel({title: `${chanelName}`})
            setSuccess(true)
            setOnProcess(false)
        },1000)
    }

  return {onProcess, success, addNewChanel}
}
