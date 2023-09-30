import { FieldValues } from "react-hook-form"
import FormLayout from "../../layouts/formLayout/FormLayout"
import GenericInput from "../../components/genericInput/GenericInput"
import AuthButton from "../../components/Buttons/AuthButton/AuthButton"
import LinkWithText from "../../components/LinkWithText/LinkWithText"

const LoginForm = () => {

    const onSubmit = (data:FieldValues) => console.log(data) 
  return (
    <FormLayout onSubmitForm={onSubmit}>
        <GenericInput   type="email"
                        placeholder="email"
                        name="email"
                        definitions={{required: true}}
                        title="email"/>
        <GenericInput   type="password"
                        placeholder="contrasena"
                        name="password"
                        definitions={{required: true}}
                        title="contrasena"/>
        <AuthButton text="Iniciar sesion"/>
        <LinkWithText to='/signup' text="no tiene una cuenta? " linkText="Crear cuenta"/>
    </FormLayout>
  )
}

export default LoginForm