import { useState, useEffect } from "react"
import { setItemInTheLocalStorage } from "../utils/setItemInTheLocalStorage"
import { userMock } from "../lib/mockedData/UserMock"

interface IUseLogin {
    email: string,
    password: string
}
export const useLogin = ({email, password}:IUseLogin) => {
    const [onProcess, setOnProcess] = useState(false)

    useEffect(()=>{
        setOnProcess(true)
        setTimeout(()=>{
            setItemInTheLocalStorage({key:'user', item:JSON.stringify(userMock)})
        },2000)
    },[])

}