import { Button } from "./homeButton.styles"
import { useNavigate } from "react-router-dom";

const HomeButton = () => {

    const navigate = useNavigate()

  return (
    <Button onClick={()=>navigate('/')}>Home</Button>   
  )
}

export default HomeButton