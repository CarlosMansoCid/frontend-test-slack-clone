import { SubtitleComponent } from "./subtitle.style";

interface ISubtitle{
    subtitle: string
}

const Subtitle = ({subtitle}:ISubtitle) => {
  return (
    <SubtitleComponent>{subtitle}</SubtitleComponent>
  )
}

export default Subtitle