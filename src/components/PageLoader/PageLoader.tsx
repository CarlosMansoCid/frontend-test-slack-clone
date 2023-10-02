import { styled } from "styled-components"
import Loader from "../Loader/Loader"

const PageLoader = () => {
  return (
    <PageLoaderContainer>
        <Loader/>
        Cargando...
    </PageLoaderContainer>
  )
}

export default PageLoader

const PageLoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`