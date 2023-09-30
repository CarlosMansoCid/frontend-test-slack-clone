import { ReactNode } from "react"
import { styled } from "styled-components"

interface IAcordeon {
    children: ReactNode
}
const Acordeon = ({children}:IAcordeon) => {
  return (
    <div>Acordeon</div>
  )
}

export default Acordeon