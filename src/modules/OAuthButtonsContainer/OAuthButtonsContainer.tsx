import OAuthButton from "../../components/Buttons/OAuthButton/OAuthButton"
import { styled } from "styled-components";
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'


const OAuthButtonsContainer = () => {

    const iconGoogle = <FcGoogle/>
    const iconApple = <BsApple/>
  
  return (
    <ButtonsContainer>
      <OAuthButton text="Conectarse con Google" icon={iconGoogle}/>
      <OAuthButton text="Conectarse con Apple" icon={iconApple}/>
    </ButtonsContainer>
  )
}

export default OAuthButtonsContainer

const ButtonsContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
`