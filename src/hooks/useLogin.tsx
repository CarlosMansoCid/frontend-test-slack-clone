import { useState, useEffect } from "react"
import { setItemInTheLocalStorage } from "../utils/setItemInTheLocalStorage"
import { userMock } from "../lib/mockedData/UserMock"
import { token } from "../lib/mockedData/TokenMock"

interface IUseLogin {
    email: string,
    password: string
}
export const useLogin = () => {
    const [onProcess, setOnProcess] = useState(false)
    const [loged, setLogued] = useState(false)

    const loginUseCase = ({email, password}:IUseLogin) =>{
        setOnProcess(true)
        setTimeout(()=>{
            setItemInTheLocalStorage('user', JSON.stringify(userMock))
            setItemInTheLocalStorage('token', token)
            setOnProcess(false)
            setLogued(true)
        },2000)
    }

    
    return {onProcess, loged, loginUseCase}
}