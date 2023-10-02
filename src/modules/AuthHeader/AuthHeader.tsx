import { styled } from "styled-components";
import Subtitle from "../../components/Subtitle/Subtitle"
import Title from '../../components/Title/Title'

interface ILoginHeader {
    title: string,
    subtitle: string
}

const AuthHeader = ({title, subtitle}:ILoginHeader) => {
  return (
    <Container>
      <Title title={title}/>
      <Subtitle subtitle={subtitle}/>
    </Container>
  )
}

export default AuthHeader

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`