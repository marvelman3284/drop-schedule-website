import { Route, Routes, useNavigate } from "react-router";
import Days from "./Days";
import {useState} from 'react';
import { ClearCourses } from "./helpers/SetCourse";

function Main() {
  const navigate = useNavigate();

  const handleSetClick = () => {
      navigate('/set')
  }

  const handleClearClick = () => {
      ClearCourses();
      navigate('/set');
  }


  // TODO: CSS for button
  let [day, setDay] = useState(1);

  const submitHandler = (e: any) => {
    setDay(e.target.value);
    navigate('/classes');
    console.log(e.target.value);
    console.log(`day ${day}`)
  }



  return (
    <> 

    <nav> 
      <button onClick={handleSetClick} type="button"> Set Classes </button>
      { //eslint-disable-next-line 
        localStorage.classes != undefined &&
        <button onClick={handleClearClick} type="button"> Clear Classes </button>
      }

      <select name="daySelect" onChange={submitHandler}>
        <option value={0}>Choose a Day Number</option>
        <option value={1}>Day 1</option>
        <option value={2}>Day 2</option>
        <option value={3}>Day 3</option>
        <option value={4}>Day 4</option>
      </select>
    </nav>
      <Routes>
        <Route path='/classes' element={<Days dayNum={day} />} />
      </Routes>
    </>
  )
}

export default Main;
