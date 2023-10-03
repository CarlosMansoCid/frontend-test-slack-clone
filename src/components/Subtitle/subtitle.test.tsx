import { render, screen } from "@testing-library/react";
import Subtitle from "./Subtitle";

beforeEach(()=>{
    render(<Subtitle subtitle='subtitle'/>)
})

describe('<Subtitle/>',()=>{
    it('Must render subtitle component and display a custom subtitle',()=>{
        const subtitleComponent = screen.getByText('subtitle')
        expect(subtitleComponent).toBeInTheDocument()
    })
})