import { ReactNode } from "react"
import { styled } from "styled-components";

interface IAuthFormsContainer{
    children: ReactNode
}

const AuthFormsContainer = ({children}:IAuthFormsContainer) => {
  return (
    <AuthFormsContainerComponent>
        {children}
    </AuthFormsContainerComponent>
  )
}

export default AuthFormsContainer

const AuthFormsContainerComponent = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`