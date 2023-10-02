import { ReactNode } from "react"
import { useForm, FormProvider, FieldValues } from "react-hook-form"
import { styled } from "styled-components"

interface IFormLayout {
    onSubmitForm: (data:FieldValues)=>void,
    children: ReactNode
}
const FormLayout = ({onSubmitForm, children}:IFormLayout) => {

    const methods = useForm({mode:'onChange'})
    const onSubmit = (data:FieldValues) => {
        onSubmitForm(data)
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </Form>
        </FormProvider>
    )
}

export default FormLayout

const Form = styled.form`
    width: 100%;
`