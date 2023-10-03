import {renderHook} from '@testing-library/react'
import useToggle from './useToggle'
import { act } from '@testing-library/react'


describe('useToggle', ()=>{
    it('value, toggle and setNewValue must be defined', () => {
    
        const {result} = renderHook(()=>useToggle())
        const {value, toggle, setNewValue} = result.current
        
        expect(value).toBeDefined()
        expect(toggle).toBeDefined()
        expect(setNewValue).toBeDefined()
        expect(toggle).toBeInstanceOf(Function)
        expect(setNewValue).toBeInstanceOf(Function)
    })
    it('initial value must be false', ()=>{
        const {result} = renderHook(()=>useToggle())
        const {value} = result.current

        expect(value).toBe(false)
    })
    it('value must toggle when call the toggle function', ()=>{
        const {result} = renderHook(()=>useToggle())

        expect(result.current.value).toBe(false)
        act(()=>result.current.toggle())
        expect(result.current.value).toBe(true)
        act(()=>result.current.toggle())
        expect(result.current.value).toBe(false)
    })
    it('value must change to the desired value when call the toggle function', ()=>{
        const {result} = renderHook(()=>useToggle())

        expect(result.current.value).toBe(false)
        act(()=>result.current.setNewValue(true))
        expect(result.current.value).toBe(true)
        act(()=>result.current.setNewValue(true))
        expect(result.current.value).toBe(true)
    })

})