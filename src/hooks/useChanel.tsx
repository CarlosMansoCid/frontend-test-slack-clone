import { useState } from "react"
import { useChanelstStore } from "../domain/store/useChanelsStore"
import { TChanel } from "../domain/types/chanelType"

export const useChanel = () => {

    const [onProcess, setOnProcess] = useState(false)
    const [success, setSuccess] = useState(false)

    const addChanel = useChanelstStore((state:any )=> state.addChanel)
    const removeChanel = useChanelstStore((state:any )=> state.removeChanel)
    const chanels = useChanelstStore((state:any )=> state.chanels)

    
    const addNewChanel = (chanelName:string) =>{

        setSuccess(false)
        setOnProcess(true)

        setTimeout(()=>{
            addChanel({title: `${chanelName}`})
            setSuccess(true)
            setOnProcess(false)
        },1000)
    }
    const removeAChanel = (title:string) =>{
        const currentChanels = chanels.filter((chanel:TChanel)=>chanel.title !== title)
        console.log(currentChanels)
        removeChanel(currentChanels)
    }
  return {onProcess, success, addNewChanel, removeAChanel}
}
