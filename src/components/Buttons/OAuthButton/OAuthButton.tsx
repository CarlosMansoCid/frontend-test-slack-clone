import { ReactNode } from "react"
import { IconType } from "react-icons/lib"
import { styled } from "styled-components"

interface IOAuth {
    text: string,
    icon: ReactNode,
}
const OAuthButton = ({text, icon}:IOAuth) => {

  return (
    <OAuthbutton>
      <IconContainer>
        {icon}
      </IconContainer>
      {text}
    </OAuthbutton>
  )
}

export default OAuthButton

const OAuthbutton = styled.button`
  width: 100%;
  padding: .6rem 0;
  font-weight: bold;
  font-size: 1rem;
  margin: .6rem auto;
  background-color: var(--color-white);
  border: solid 2px #b3b0b0;
  border-radius: var(--radius-m);
  color: var(--color-font-grey-dark);
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`