import { Link } from "react-router-dom"
import styled from 'styled-components'
interface ILinkWithText {
    text: string,
    to: string,
    linkText: string
}
const LinkWithText = ({text, to, linkText}:ILinkWithText) => {
  return (
    <LinkContainer>
        <P>{text} </P>
        <Link to={to} style={{margin:'0.2rem'}}>{linkText}</Link>
    </LinkContainer>
  )
}

export default LinkWithText

const LinkContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: .8rem;
    width: 100%;
    justify-content: flex-end;
`
const P = styled.p`
    font-size: .8rem;

`