import { FaBars, FaTimes } from "react-icons/fa"
import { styled } from "styled-components"
import { useShowSidebarStore } from "../../../domain/store/useShowSidebarStore"

const BurgerButton = () => {

    const show = useShowSidebarStore((state:any) => state.show)
    const setShow = useShowSidebarStore((state:any) => state.setShow)
    const setHidden = useShowSidebarStore((state:any) => state.setHidden)

    console.log(show)


  return (
    <BurgerMenu onClick={()=> show ? setHidden() : setShow()}>
        {show ? <FaTimes/>:<FaBars/>}
    </BurgerMenu>
  )
}

export default BurgerButton

const BurgerMenu = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px var(--color-white);
    margin-left: 1rem;
    color: var(--color-white);
    border-radius: var(--radius-m);
    cursor: pointer;

    @media (width > 800px){
        display: none;
    }
`