import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'

interface IAddButton {
    title: string,
    action: ()=>void
}

const AddButton = ({title, action}:IAddButton) => {
  return (
    <Button onClick={action}>
        <Icon><AiOutlinePlus/></Icon>
        {title}
    </Button>
  )
}

export default AddButton

const Button = styled.div`
    color: var(--color-white);
    font-size: .8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

`
const Icon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .3rem;
    margin-right: .5rem;
    border-radius: var(--radius-m);
    justify-content: space-between;
    background-color: var(--color-main-ligth-opacity);
`