import { useState } from "react"

const useToggle = () => {
    const [value, setValue] = useState(false)

    const toggle = () =>{
        setValue(!value)
    }
    const setNewValue = (newValue:boolean) =>{
      setValue(newValue)
    }

  return {value, toggle, setNewValue}
}

export default useToggle