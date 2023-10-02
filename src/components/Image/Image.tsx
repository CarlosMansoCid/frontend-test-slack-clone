import { styled } from "styled-components"

interface IImage {
    src: string,
    alt: string
}

const Image = ({src, alt}:IImage) => {
  return (
    <ImageComponent src={src} alt={alt}/>
  )
}

export default Image

const ImageComponent = styled.img`
    width:100%;
    height:100%;
`