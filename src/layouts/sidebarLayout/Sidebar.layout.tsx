import { ReactNode } from "react"
import { styled } from "styled-components"

interface ISidebarLayout {
    children: ReactNode
}
const SidebarLayout = ({children}:ISidebarLayout) => {
  return (
    <SidebarContainer>
        {children}
    </SidebarContainer>
  )
}

export default SidebarLayout 
const SidebarContainer = styled.aside`
    background-color: var(--color-sidebar);
    width: 18%;
`