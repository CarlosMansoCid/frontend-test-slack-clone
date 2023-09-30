import { styled } from "styled-components"
import { TLink } from "../../lib/mockedData/SidebarLinksMock"

interface ISidebarLinkCard {
    link:TLink
}
const SidebarLinksCard = ({link}:ISidebarLinkCard) => {
  return (
    <LinkContainer>
        <link.icon/>
        <P>{link.title}</P>
    </LinkContainer>
  )
}

export default SidebarLinksCard
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--color-white);
    margin: 0;
    padding: .5rem;
    border-radius: var(--radius-m);
    cursor: pointer;


    &:hover{
        background-color: var(--color-main-ligth-opacity);
    }
`
const P = styled.p`
    margin: 0 0 0 1rem;
    font-size: .8rem;
`