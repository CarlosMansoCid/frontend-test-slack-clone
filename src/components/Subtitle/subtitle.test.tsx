import { render, screen } from "@testing-library/react";
import Subtitle from "./Subtitle";

beforeEach(()=>{
    render(<Subtitle subtitle='subtitle'/>)
})

describe('<Title/>',()=>{
    it('Must render subtitle component and display a custom title',()=>{
        const subtitleComponent = screen.getByText('subtitle')
        expect(subtitleComponent).toBeInTheDocument()
    })
})