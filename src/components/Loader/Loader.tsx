import { styled,keyframes } from "styled-components"

const Loader = () => {
    return (
      <LoaderTag/>
    )
  }
  
  export default Loader

const spin = keyframes`
      0% {
        transform: rotate(0deg);
      }
      
      100% {
        transform: rotate(360deg);
      }
      `
const LoaderTag = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 auto;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--color-main);
    border-radius: 50%;
    animation: ${spin} 1.5s linear infinite;
    
    
`
  
  