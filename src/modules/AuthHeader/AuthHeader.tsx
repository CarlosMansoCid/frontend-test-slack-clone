import { Container } from "./authHeader.style"
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