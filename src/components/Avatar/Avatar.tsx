import { styled } from "styled-components"

interface IAvatar {
    username:string,
    isOnline: boolean,
    id: string
}
const Avatar = ({username, isOnline, id}:IAvatar) => {
  return (
    <AvatarSquare id={id}>
        {username.slice(0,2).toUpperCase()}
        {isOnline && <OnLineIndicator id={id}/>}
    </AvatarSquare>
  )
}

export default Avatar
const AvatarSquare = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: #501003;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-m);
    position: relative;

    &#small{
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