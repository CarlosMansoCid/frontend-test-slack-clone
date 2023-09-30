import styled from 'styled-components'
import {RiArrowDropDownFill, RiArrowDropRightFill} from 'react-icons/ri'


interface IAcordeonToggleButton {
    value: boolean,
    toggle: ()=>void,
    title: string
}
const AcordeonToggleButton = ({value, toggle, title}:IAcordeonToggleButton) => {
  return (
    <ToggleButton>
        <Button onClick={()=>toggle()}>
            {
                !value ?
                <RiArrowDropRightFill style={{margin:'0'}}/>
                :
                <RiArrowDropDownFill style={{margin:'0'}}/>
            }
        </Button>
        <Title>{title}</Title>
    </ToggleButton> 
  )
}

export default AcordeonToggleButton
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