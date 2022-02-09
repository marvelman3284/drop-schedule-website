import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/set')
  }

  // TODO: CSS for button

  return (
    <> 
      <button onClick={handleClick} type="button"> Set Classes </button>
    </>
  )
}

export default Main;
