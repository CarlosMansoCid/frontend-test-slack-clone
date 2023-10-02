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

        const addChanelEndpoint = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(
                    addChanel({title: `${chanelName}`})  
                    )
                },2000)
            })
            
            
            addChanelEndpoint
                            .then(()=>setSuccess(true))
                            .finally(()=>setOnProcess(false))
           
            
    }
    const removeAChanel = (title:string) =>{
        const currentChanels = chanels.filter((chanel:TChanel)=>chanel.title !== title)
        removeChanel(currentChanels)
    }
  return {onProcess, success, addNewChanel, removeAChanel}
}
