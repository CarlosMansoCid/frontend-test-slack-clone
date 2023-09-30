import { ReactNode } from "react"
import { styled } from "styled-components"
import useToggle from "../../hooks/useToggle"
import AcordeonToggleButton from "../Buttons/AcordeonToggleButton/AcordeonToggleButton"

interface IAcordeon {
    children: ReactNode,
    title: string
}
const Acordeon = ({children, title}:IAcordeon) => {

    const {value, toggle} = useToggle()

  return (
    <AcordeonContainer>
        <AcordeonToggleButton value={value} toggle={toggle} title={title}/>
        {
            value &&
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        }
    </AcordeonContainer>
  )
}

export default Acordeon

const AcordeonContainer = styled.div`
    width: 100%;
`

const ChildrenContainer = styled.div`
    padding: .5rem 0;
`