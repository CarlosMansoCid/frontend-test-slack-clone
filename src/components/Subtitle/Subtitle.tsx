import { styled } from "styled-components";

interface ISubtitle{
    subtitle: string
}

const Subtitle = ({subtitle}:ISubtitle) => {
  return (
    <SubtitleComponent>{subtitle}</SubtitleComponent>
  )
}

export default Subtitle

export const SubtitleComponent = styled.p`
    color: var(--color-font-grey-ligth);
    margin: 0;

`