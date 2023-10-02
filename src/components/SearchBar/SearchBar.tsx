import { styled } from "styled-components"
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
  return (
    <SearchContainer>
        <Input type="search" id="site-search" name="q" placeholder="Buscar" />
        <Button><AiOutlineSearch/></Button>
    </SearchContainer>

  )
}

export default SearchBar

const SearchContainer = styled.div`
    width: 100%;
    background-color: var(--color-main-ligth-opacity);
    border-radius: var(--radius-m);
    padding: .2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Input = styled.input`
    width: 95%;
    background-color: transparent;
    color:var(--color-white);
    border: none;

    &:focus{
        outline: none;
    }
`
const Button = styled.button`
    width: 5%;
    background-color: transparent;
    color:var(--color-white);
    border: none;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`