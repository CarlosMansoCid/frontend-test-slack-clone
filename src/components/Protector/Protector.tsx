import { ReactNode, useEffect} from "react"
import { getItemFromTheLocalStorage } from "../../utils/getItemFromTheLocalStorage"
import useVerifyToken from "../../hooks/useVerifyToken"
import PageLoader from "../PageLoader/PageLoader"
import { useNavigate } from "react-router-dom"

interface IProtector {
    children: ReactNode
}



const Protector = ({children}:IProtector) => {

    const {isValid,verifyToken,onProcess} = useVerifyToken()
    const navigate = useNavigate()

    useEffect(()=>{
        verifyToken(getItemFromTheLocalStorage('token'))
    },[])

    if(onProcess) return <PageLoader/>
    if(!onProcess && isValid) {return <>{children}</>}
    if(!onProcess && !isValid) {navigate('/login')}

    
    
    
    
}

export default Protector