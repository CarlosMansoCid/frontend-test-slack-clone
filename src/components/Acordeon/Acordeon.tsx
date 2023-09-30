import { ReactNode } from "react"
import {RiArrowDropDownFill, RiArrowDropRightFill} from 'react-icons/ri'
import { styled } from "styled-components"

interface IAcordeon {
    children: ReactNode,
    title: string
}
const Acordeon = ({children, title}:IAcordeon) => {
  return (
    <AcordeonContainer>
        <ToggleButton>
            <Button><RiArrowDropRightFill style={{margin:'0'}}/></Button>
            <Title>{title}</Title>
        </ToggleButton>
        <ChildrenContainer>
            {children}
        </ChildrenContainer>
    </AcordeonContainer>
  )
}

export default Acordeon

const AcordeonContainer = styled.div`
    width: 100%;
`
const ToggleButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Button = styled.button`
    /* width: 1.5rem; */
    /* height: 1.5rem; */
    background-color: transparent;
    color: var(--white-color);
    border: none;
    border-radius: var(--radius-m);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color:var(--color-white);
    cursor: pointer;
    font-size: 2rem;
    padding: 0;
    &:hover{
        background-color: var(--color-main-ligth-opacity);
    }
`
const Title = styled.p`
    font-size: 1rem;
    color: var(--color-white);
    padding: .4rem;
    border-radius: var(--radius-m);
    cursor: pointer;
    margin: 0;
    &:hover{
        background-color: var(--color-main-ligth-opacity);
    }
`
const ChildrenContainer = styled.div`
    padding: .5rem;
`