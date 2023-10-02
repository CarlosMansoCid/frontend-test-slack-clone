import { generateRandomIntNumber } from "../utils/generateRandomIntNumber"
import { useMemo } from "react"

const useGenerateHexadecimalColor = () => {
    let color = ['#']
    const hexadecimalValues = ['0','1','2','3','4','5','6','7','8','9']

    useMemo(()=>{
        for(let i=0; i <= 2; i++){
            let index = generateRandomIntNumber(0,9)
            color.push(hexadecimalValues[index])
        }  
    },[])

    return color.join('')
}

export default useGenerateHexadecimalColor