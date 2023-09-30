import { styled } from "styled-components"
import {FaTimes} from 'react-icons/fa'

interface IChanelTag {
    title: string
}
const ChanelTag = ({title}:IChanelTag) => {

  
  return (
    <Tag>
      <Title>
      # {title}
      </Title>
      <DeleteButton>
        <FaTimes/>
      </DeleteButton>
    </Tag>
  )
}

export default ChanelTag

const Tag = styled.div`
    color: var(--color-white);
    padding: .5rem;
    border-radius: var(--radius-m);
    cursor: pointer;
    margin-bottom: .2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    &:hover{
        background-color: var(--color-main-ligth-opacity);
    }
`

const Title = styled.p`
  font-size: .8rem;
  margin: 0;
`
const DeleteButton = styled.div`
  font-size: .8rem;
`