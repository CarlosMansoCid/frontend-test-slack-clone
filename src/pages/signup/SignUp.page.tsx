import AuthHeader from "../../modules/AuthHeader/AuthHeader"
import LoginLayout from "../../layouts/loginLayout/Login.layout"
import OAuthButtonsContainer from "../../modules/OAuthButtonsContainer/OAuthButtonsContainer"
import AuthFormsContainer from "../../components/AuthFormsContainer/AuthFormsContainer"
import AuthSeparator from "../../modules/AuthHeader/components/AuthSeparator"
import SignUpForm from "../../modules/SignUpForm/SignUpForm"
import { styled } from "styled-components"

const SignUpPage = () => {
  return (
    <LoginLayout>
        <AuthHeader title='Conectate a Slack' 
                    subtitle={`Te sugerimos que uses la dirección de correo electrónico que usas en el trabajo.`}/>
        <AuthFormsContainer>
          <FormContainer>
            <OAuthButtonsContainer/>
            <AuthSeparator/>
            <SignUpForm/>
          </FormContainer>
        </AuthFormsContainer>
    </LoginLayout>
  )
}


export default SignUpPage

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