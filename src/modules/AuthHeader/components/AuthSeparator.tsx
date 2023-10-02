import { styled } from "styled-components"

const AuthSeparator = () => {
  return (
    <Separator>
        <Hr/>
        <P>O</P>
        <Hr/>
    </Separator>
  )
}

export default AuthSeparator

const Separator = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Hr = styled.hr`
    width: 100%;
    color: #f2f0f0;
    font-size: 1px;
`
const P = styled.p`
    margin: 1rem .5rem;
`