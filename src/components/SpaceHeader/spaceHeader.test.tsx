import { render, screen } from "@testing-library/react";
import SpaceHeader from "./SpaceHeader";

beforeEach(()=>{
    render(<SpaceHeader spacename="SpaceName"/>)
})

describe('<SpaceHeader/>',()=>{
    it('Must render spaceheader component and display a custom spacename',()=>{
        const spaceheaderComponent = screen.getByText('SpaceName')
        expect(spaceheaderComponent).toBeInTheDocument()
    })
    it('Must have a change plan button and a new message button', ()=>{
        const changePlanButton = screen.getAllByRole('button')
        expect(changePlanButton[0]).toBeInTheDocument()
        expect(changePlanButton[1]).toBeInTheDocument()
        expect(changePlanButton[1]).toHaveTextContent('Cambiar de plan')
    })
})