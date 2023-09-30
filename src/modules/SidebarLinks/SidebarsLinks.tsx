import { styled } from "styled-components"
import { TLink } from "../../lib/mockedData/SidebarLinksMock"
import SidebarLinksCard from "../../components/SidebarLinksCard/SidebarLinksCard"

interface ISidebarsLinks {
    links: TLink[]
}
const SidebarsLinks = ({links}:ISidebarsLinks) => {
  return (
    <SideBarLinksContainer>
        <LinksContainer>
            {
                !!links &&
                links.map(link => {
                    return(
                        <SidebarLinksCard link={link}/>
                    )
                })
            }
        </LinksContainer>
    </SideBarLinksContainer>
  )
}

export default SidebarsLinks
const SideBarLinksContainer = styled.div`
    width: 100%;
    margin-top:.5rem;
    border-bottom: solid 1px var(--color-white);
`
const LinksContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

