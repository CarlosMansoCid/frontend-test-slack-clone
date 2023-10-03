import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

beforeEach(()=>{
    render(<SearchBar/>)
})

describe('<SearchBar/>',()=>{
    it('Must render the search bar',()=>{
        const sidebarLinkComponent = screen.getByTestId('searchbar')
        expect(sidebarLinkComponent).toBeInTheDocument()
    })
    it('The search bar must have a search button',()=>{
        const searchButton = screen.getByRole('button')
        expect(searchButton).toBeInTheDocument()
    })
})