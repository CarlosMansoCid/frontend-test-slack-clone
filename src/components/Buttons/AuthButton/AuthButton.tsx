import { styled } from "styled-components"

interface IAuthButton {
    text:string
}
const AuthButton = ({text}:IAuthButton) => {
  return (
    <Input type="submit" value={text}/>
  )
}

export default AuthButton

const Input = styled.input`
    width: 100%;
    margin: 0 auto;
    padding: .8rem 0;
    border: none;
    background-color: var(--color-main);
    color:var(--color-white);
    transition: .1s;

    &:hover{
      background-color: var(--color-main-hover);
    }
    &:active{
      background-color: var(--color-main);
    }

`