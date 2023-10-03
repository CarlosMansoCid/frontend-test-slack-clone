import { render, screen } from "@testing-library/react";
import Title from "./Title";

beforeEach(()=>{
    render(<Title title='title'/>)
})

describe('<Title/>',()=>{
    it('Must render title component and display a custom title',()=>{
        const titleComponent = screen.getByText('title')
        expect(titleComponent).toBeInTheDocument()
    })
})