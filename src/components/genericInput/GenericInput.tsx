import {useFormContext, RegisterOptions, FieldValues} from "react-hook-form"
import { styled } from "styled-components"

interface IGenericInput {
    type: string,
    placeholder: string, 
    name: string, 
    definitions: RegisterOptions<FieldValues, string> | undefined, 
    title: string,
    label: boolean
}

const GenericInput = ({type, placeholder, name, definitions, title, label=true}:IGenericInput) => {

    const {register, formState} = useFormContext()
    
    const {errors} = formState
  
    return (
        <InputContainer>
            {label && <Label>{placeholder}</Label>}
            <Input type={type} 
                   placeholder={placeholder} 
                   {...register(name,definitions)}
                   id={!!errors[name] ? 'error' : ''}
                   title={title}/>
        </InputContainer>

        )
}

export default GenericInput

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: .5rem auto; 
    width:100%;
`
const Label = styled.label`
    font-size: .8rem;
    width:98%;
    margin: 0 auto;
    color: var(--font-color-grey-dark);
`
const Input =  styled.input`
    width: 98%;
    padding: .8rem 0;
    margin: 0 auto;
    /* border:0; */
`