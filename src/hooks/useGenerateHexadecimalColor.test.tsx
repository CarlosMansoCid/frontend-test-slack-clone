import {renderHook} from '@testing-library/react'
import useGenerateHexadecimalColor from './useGenerateHexadecimalColor'

describe('useGenerateHexadecimalColor', ()=>{
    it('must return a defined value and must be a hexadecimal value', () => {
    
        const {result} = renderHook(()=>useGenerateHexadecimalColor())
        expect(result.current).toBeDefined()
        expect(result.current).toMatch(/^#[0-9]{3}/)
    })


})