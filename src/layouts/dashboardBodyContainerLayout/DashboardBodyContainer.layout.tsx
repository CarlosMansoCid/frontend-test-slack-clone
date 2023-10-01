import { ReactNode } from "react"
import { styled } from "styled-components"

interface IDashboardBodyContainerLayout {
    children: ReactNode
}

const DashboardBodyContainerLayout = ({children}:IDashboardBodyContainerLayout) => {
  return (
    <BodyContainer>
        {children}
    </BodyContainer>
  )
}

export default DashboardBodyContainerLayout

const BodyContainer = styled.div`
    position: sticky;
    top: 3rem;
`