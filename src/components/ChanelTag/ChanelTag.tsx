import { styled } from "styled-components"

interface IChanelTag {
    title: string
}
const ChanelTag = ({title}:IChanelTag) => {
  return (
    <Tag># {title}</Tag>
  )
}

export default ChanelTag

const Tag = styled.p`
    color: var(--color-white);
    margin: 0;
    padding: .5rem;
    border-radius: var(--radius-m);
    cursor: pointer;
    font-size: .8rem;
    
    &:hover{
        background-color: var(--color-main-ligth-opacity);
    }
`