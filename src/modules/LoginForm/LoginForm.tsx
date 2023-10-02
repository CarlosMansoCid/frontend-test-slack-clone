import { FieldValues } from "react-hook-form"
import FormLayout from "../../layouts/formLayout/FormLayout"
import GenericInput from "../../components/genericInput/GenericInput"
import AuthButton from "../../components/Buttons/AuthButton/AuthButton"
import LinkWithText from "../../components/LinkWithText/LinkWithText"
import { useLogin } from "../../hooks/useLogin"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

    const {onProcess, loged, loginUseCase} = useLogin()
    const navigate = useNavigate()

    const onSubmit = (data:FieldValues) => loginUseCase({email:data.email, password:data.password})

    if(loged) navigate('/dashboard')
    
  return (
    <FormLayout onSubmitForm={onSubmit}>
        <GenericInput   type="email"
                        placeholder="email"
                        name="email"
                        definitions={{required: true}}
                        title="email"
                        label={true}/>
        <GenericInput   type="password"
                        placeholder="contrasena"
                        name="password"
                        definitions={{required: true}}
                        title="contrasena"
                        label={true}/>
          <AuthButton text="Iniciar sesion" onProcess={onProcess}/>
        <LinkWithText to='/signup' text="no tiene una cuenta? " linkText="Crear cuenta"/>
    </FormLayout>
  )
}

export default LoginForm