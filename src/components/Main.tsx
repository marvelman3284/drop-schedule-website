import { useNavigate } from "react-router";
import { ClearCourses } from "./helpers/SetCourse";
import "../css/main.css";
import "../css/all.css";

function Main() {
  const navigate = useNavigate();

  const handleSetClick = () => {
      navigate('/set')
  }

  const handleClearClick = () => {
      ClearCourses();
      navigate('/set');
  }


  return (
    <div className="main"> 
      <div className="header">
        <h1> Drop Schedule Calculator! </h1> 
        <nav> 
          <button onClick={handleSetClick} type="button"> Set Classes </button>
          { //eslint-disable-next-line 
            localStorage.classes != undefined &&
            <button onClick={handleClearClick} type="button"> Clear Classes </button>
          }
          { //eslint-disable-next-line
            localStorage.classes != undefined &&
            <button  onClick={() => navigate('/classes')}> View Classes </button>
          }
        </nav>
      </div>
      {navigate('/classes')}
    </div>
  )
}

export default Main;
