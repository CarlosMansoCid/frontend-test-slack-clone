import { FieldValues } from "react-hook-form"
import FormLayout from "../../layouts/formLayout/FormLayout"
import GenericInput from "../../components/genericInput/GenericInput"
import AuthButton from "../../components/Buttons/AuthButton/AuthButton"
import LinkWithText from "../../components/LinkWithText/LinkWithText"

const SignUpForm = () => {

    const onSubmit = (data:FieldValues) => console.log(data) 
  return (
    <FormLayout onSubmitForm={onSubmit}>
        <GenericInput   type="text"
                        placeholder="nombre de usuario"
                        name="username"
                        definitions={{required: true}}
                        title="nombre de usuario"/> 
        <GenericInput   type="email"
                        placeholder="email"
                        name="email"
                        definitions={{required: true}}
                        title="formato: xxx@xxx.xxx"/>
        <GenericInput   type="password"
                        placeholder="contrasena"
                        name="password"
                        definitions={{required: true}}
                        title="contrasena"/>
        <AuthButton text="Crear cuenta"/>
        <LinkWithText to='/' text="ya tiene una cuenta? " linkText="Iniciar sesion"/>
    </FormLayout>
  )
}

export default SignUpForm