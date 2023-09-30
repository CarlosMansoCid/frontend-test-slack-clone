import AuthHeader from "../../modules/AuthHeader/AuthHeader"
import LoginLayout from "../../layouts/loginLayout/Login.layout"
import OAuthButtonsContainer from "../../modules/OAuthButtonsContainer/OAuthButtonsContainer"
import AuthFormsContainer from "../../components/AuthFormsContainer/AuthFormsContainer"
import AuthSeparator from "../../modules/AuthHeader/components/AuthSeparator"
import SignUpForm from "../../modules/SignUpForm/SignUpForm"

const SignUpPage = () => {
  return (
    <LoginLayout>
        <AuthHeader title='Conectate a Slack' 
                    subtitle={`Te sugerimos que uses la dirección de correo electrónico que usas en el trabajo.`}/>
        <AuthFormsContainer>
          <OAuthButtonsContainer/>
          <AuthSeparator/>
          <SignUpForm/>
        </AuthFormsContainer>
    </LoginLayout>
  )
}

export default SignUpPage