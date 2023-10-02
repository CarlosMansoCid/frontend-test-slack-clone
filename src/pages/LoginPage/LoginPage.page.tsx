import AuthHeader from "../../modules/AuthHeader/AuthHeader"
import LoginLayout from "../../layouts/loginLayout/Login.layout"
import OAuthButtonsContainer from "../../modules/OAuthButtonsContainer/OAuthButtonsContainer"
import AuthFormsContainer from "../../components/AuthFormsContainer/AuthFormsContainer"
import AuthSeparator from "../../modules/AuthHeader/components/AuthSeparator"
import LoginForm from "../../modules/LoginForm/LoginForm"

const LoginPage = () => {
  return (
    <LoginLayout>
        <AuthHeader title='Inicia sesión en Slack' 
                    subtitle={`Te sugerimos que uses la dirección de correo electrónico que usas en el trabajo.`}/>
        <AuthFormsContainer>
          <OAuthButtonsContainer/>
          <AuthSeparator/>
          <LoginForm/>
        </AuthFormsContainer>
    </LoginLayout>
  )
}

export default LoginPage