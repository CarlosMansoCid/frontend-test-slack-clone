import { TitleComponent } from "./title.style"

interface ITitle{
    title: string
}

const Title = ({title}:ITitle) => {
  return (
    <TitleComponent>{title}</TitleComponent>
  )
}

export default Title