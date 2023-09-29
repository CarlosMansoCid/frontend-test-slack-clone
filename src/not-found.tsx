import { styled } from "styled-components"
import HomeButton from "./components/Buttons/HomeButton/HomeButton"

const NotFoundPage = () => {
  return (
    <Container>
        <Content>
            <ErrorCode>404</ErrorCode>
            <ErrorMessage>Page not found</ErrorMessage>
            <HomeButton/>
        </Content>
    </Container>
  )
}

export default NotFoundPage


const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    width: 30%;
    height: auto;
`
const ErrorCode = styled.h1`
    font-size: 6rem;
    color: var(--color-main);
    margin: 0;

`
const ErrorMessage = styled.p`
    font-size: 2rem;
    color: var(--color-main-hover);
    margin: 0;

`
