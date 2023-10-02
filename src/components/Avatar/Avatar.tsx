import { styled } from "styled-components"
import useGenerateHexadecimalColor from "../../hooks/useGenerateHexadecimalColor"

interface IAvatar {
    username:string,
    isOnline: boolean,
    id: string,
    backgroundColor: string
}
const Avatar = ({username, isOnline, id, backgroundColor}:IAvatar) => {


  const color = useGenerateHexadecimalColor()

  return (
    <AvatarSquare id={id} style={{backgroundColor:backgroundColor}}>
        {username.slice(0,2).toUpperCase()}
        {isOnline && <OnLineIndicator id={id}/>}
    </AvatarSquare>
  )
}

export default Avatar
const AvatarSquare = styled.div`
    min-width: 2rem;
    min-height: 2rem;
    width: 2rem;
    height: 2rem;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-m);
    position: relative;

    &#small{
      min-width: 1.5rem;
      min-height: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      font-size: .8rem;
    }
`
const OnLineIndicator = styled.div`
    width: .7rem;
    height:.7rem;
    border-radius: 100%;
    background-color: #00ff51;
    position: absolute;
    bottom: -3px;
    right: -3px;

    &#small{
      width: .5rem;
      height: .5rem;
      font-size: .8rem;
    }
`