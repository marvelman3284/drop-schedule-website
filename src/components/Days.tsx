import { classesProps, GetCourses } from "./helpers/SetCourse";
import { DayOne, DayTwo, DayThree, DayFour} from "./helpers/DaysHelper";
import { useState } from "react";
import { useNavigate } from "react-router";
import '../css/days.css';
import '../css/all.css';

function Days() {

  let courses: classesProps = GetCourses();

  let [day, setDay] = useState(1);

  const naviagate = useNavigate();

  return (
    <> 
      <div> 
        <button type="button" onClick={() => setDay(1)}>Day 1</button> 
        <button type="button" onClick={() => setDay(2)}>Day 2</button> 
        <button type="button" onClick={() => setDay(3)}>Day 3</button> 
        <button type="button" onClick={() => setDay(4)}>Day 4</button> 
        <button type="button" className="homebtn" onClick={() => naviagate('/')}> Home </button> 
      </div>
      <h1 className="heading">Day #{day}</h1>

      {/* ignore the next few lines in order to compile without warnings */} 
      {
        // eslint-disable-next-line
        day == 1 && 
      <DayOne courses={courses}/> }

      {
        // eslint-disable-next-line
        day == 2 && 
        <DayTwo courses={courses}/>}

      {
        // eslint-disable-next-line
        day == 3 && 
        <DayThree courses={courses}/>}

      {
        // eslint-disable-next-line
        day == 4 && 
        <DayFour courses={courses}/>}
    </>
  )
}

export default Days;
