import { styled } from "styled-components"

export const Button = styled.div`
    margin-top: 1rem;
    padding: .5rem 2rem;
    text-align: center;
    background-color: var(--color-main);
    color: var(--color-white);
    transition: .1s;
    text-decoration: none;
    border-radius: var(--radius-s);
    cursor: pointer;

    &:hover{
        background-color: var(--color-main-hover);
    }
    &:active{
        background-color: var(--color-main);
    }
`