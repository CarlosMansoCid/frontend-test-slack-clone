import { styled } from "styled-components";
import { ReactNode } from "react"
import Image from "../../components/Image/Image"

interface ILoginLayout {
    children: ReactNode
}


const LoginLayout = ({children}:ILoginLayout) => {
  return (
    <LoginLayoutContainer>
        <ImageContainer>
            <Image src='/img/slack_logo.svg' alt="logo"/>
        </ImageContainer>
        {children}
    </LoginLayoutContainer>
  )
}

export default LoginLayout

const LoginLayoutContainer = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ImageContainer = styled.div`
    width: 7rem;
    height: 3rem;
    position: relative;
`