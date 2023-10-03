import { render, screen } from "@testing-library/react";
import SidebarLinksCard from "./SidebarLinksCard";
import { sidebarLinksMock } from "../../lib/mockedData/SidebarLinksMock";

beforeEach(()=>{
    render(<SidebarLinksCard link={sidebarLinksMock[0]}/>)
})

describe('<SpaceHeader/>',()=>{
    it('Must render a sidebar link',()=>{
        const sidebarLinkComponent = screen.getByTestId('sidebarLink')
        expect(sidebarLinkComponent).toBeInTheDocument()
    })
    it('Must have a icon', ()=>{
        const sidebarLinkIcon = screen.getByTestId('icon')
        expect(sidebarLinkIcon).toBeInTheDocument()
    })
    it('Must have a custom title', ()=>{
        const sidebarLinkTitle = screen.getByText(sidebarLinksMock[0].title)
        expect(sidebarLinkTitle).toBeInTheDocument()
    })
})