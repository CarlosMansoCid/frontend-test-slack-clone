import { styled } from "styled-components";

interface ITitle{
    title: string
}

const Title = ({title}:ITitle) => {
  return (
    <TitleComponent>{title}</TitleComponent>
  )
}

export default Title

export const TitleComponent = styled.h1`
    font-size: 3rem;
    color: var(--color-font-grey-dark);
    margin: .8rem;
`

