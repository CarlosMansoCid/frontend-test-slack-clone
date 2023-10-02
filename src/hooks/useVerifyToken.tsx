import { useState } from "react"

const useVerifyToken = () => {

    const [onProcess, setOnProcess] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const verifyToken = (token:string | null) =>{
        
        setOnProcess(true)
        setIsValid(false)

        setTimeout(()=>{
            if(token) {
                setIsValid(true)
            }
            setOnProcess(false)
        },1000)
    }
  return {verifyToken, onProcess, isValid}
}

export default useVerifyToken