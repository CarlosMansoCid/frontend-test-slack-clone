import MessageBox from "./MessageBox";
import {cleanup,render, screen } from "@testing-library/react";
import { TCoworkerMock } from "../../lib/mockedData/CoworkersMock";

const testRemitentMock:TCoworkerMock = {
    _id: 0,
    username: 'test remitent',
    profileImage: '',
    isOnline: true,
    backgroundColor: '#222',
}

beforeEach(()=>render(<MessageBox message='test message' remitent={testRemitentMock}/>))
afterEach(()=>cleanup())

describe('<MessageBox/>',()=>{
    it('Must render the messagebox',()=>{
        const messageBox = screen.getByTestId('messagebox')
        expect(messageBox).toBeInTheDocument()
    })
    it('Must display the avatar',()=>{
        const avatar = screen.getByTestId('avatar')
        expect(avatar).toBeInTheDocument()
    })
    it('Must display the message', ()=>{
        expect(screen.getByText('test message')).toBeInTheDocument()
    })
})