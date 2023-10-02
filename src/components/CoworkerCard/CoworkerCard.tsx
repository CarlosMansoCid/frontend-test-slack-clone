import { useNavigate } from "react-router-dom"
import Avatar from "../Avatar/Avatar"
import { styled } from "styled-components"
import { TCoworkerMock } from "../../lib/mockedData/CoworkersMock" 
import { useRemitentStore } from "../../domain/store/useRemitentStore"


interface ICoworkerCard {
    coworker: TCoworkerMock
}

const CoworkerCard = ({coworker}:ICoworkerCard) => {

    const navigate = useNavigate()
    const setRemitent = useRemitentStore((state:any) => state.setRemitent)

    const handleClick = () =>{
        setRemitent({remitent:coworker})
        navigate(`/dashboard/dm/${coworker._id}`)
    }

  return (
    <CoworkerCardContainer onClick={()=>handleClick()}>
        <Avatar username={coworker.username} 
                isOnline={coworker.isOnline} 
                id="small" 
                backgroundColor={coworker.backgroundColor}/>
        <P>{coworker.username}</P>
    </CoworkerCardContainer> 
  )
}

export default CoworkerCard

const CoworkerCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: var(--radius-m);
    margin: .3rem 0;
    cursor: pointer;
    &:hover{
        background-color: var(--color-main-ligth-opacity);
    }

`
const P = styled.p`
    font-size: .8rem;
    color: var(--color-white);
    margin: 0 .5rem;
`