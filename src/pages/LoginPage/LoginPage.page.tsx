import AuthHeader from "../../modules/AuthHeader/AuthHeader"
import LoginLayout from "../../layouts/loginLayout/Login.layout"
import OAuthButtonsContainer from "../../modules/OAuthButtonsContainer/OAuthButtonsContainer"
import AuthFormsContainer from "../../components/AuthFormsContainer/AuthFormsContainer"
import AuthSeparator from "../../modules/AuthHeader/components/AuthSeparator"
import LoginForm from "../../modules/LoginForm/LoginForm"
import { styled } from "styled-components"
import { Helmet } from "react-helmet"

const LoginPage = () => {
  return (
    <LoginLayout>
        <Helmet>
          <title>Inicia Sesion en Slack</title>
          <meta name="description" content="Conecta con tu equipo a traves de slack"/>
        </Helmet>
        <AuthHeader title='Inicia sesión en Slack' 
                    subtitle={`Te sugerimos que uses la dirección de correo electrónico que usas en el trabajo.`}/>
        <AuthFormsContainer>
          <FormContainer>
          <OAuthButtonsContainer/>
          <AuthSeparator/>
            <LoginForm/>
          </FormContainer>
        </AuthFormsContainer>
    </LoginLayout>
  )
}

export default LoginPage

const FormContainer = styled.div`
  width: 30vw;

  @media (width < 900px){
    width: 60vw;
  }
  @media (width < 700px){
    width: 80vw;
  }
  @media (width < 500px){
    width: 96vw;
  }
`