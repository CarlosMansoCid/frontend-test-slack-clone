import { cleanup, render, screen } from "@testing-library/react";
import Modal from "./Modal";

afterEach(()=>cleanup())

describe('<Modal/>',()=>{
    it('Must render the modal when recive the show prop',()=>{
        render(<Modal show={true}><div data-testid='children'>children</div></Modal>)
        const modal = screen.getByRole('dialog')
        const children = screen.getByTestId('children')
        expect(modal).toBeInTheDocument()
        expect(children).toBeInTheDocument()
    })
    it('The modal must be close when recive the false show prop value',()=>{
        render(<Modal show={false}><div data-testid='children'>children</div></Modal>)
        const modal = screen.queryByRole('dialog')
        expect(modal).not.toBeInTheDocument()
    })
})