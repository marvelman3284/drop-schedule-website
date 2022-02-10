import { classesProps, GetCourses } from "./helpers/SetCourse";
import { DayOne, DayTwo, DayThree, DayFour} from "./helpers/DaysHelper";
import '../css/index.css';

interface mainDayProps {
  dayNum?: number;
}

function Days( {dayNum}: mainDayProps) {

  let courses: classesProps = GetCourses();

  return (
    <> 
      <h1 className="heading">Day #{dayNum}</h1>

      {/* ignore the next few lines in order to compile without erros */} 
      {
        // eslint-disable-next-line
        dayNum == 1 && 
      <DayOne courses={courses}/> }

      {
        // eslint-disable-next-line
        dayNum == 2 && 
        <DayTwo courses={courses}/>}

      {
        // eslint-disable-next-line
        dayNum == 3 && 
        <DayThree courses={courses}/>}

      {
        // eslint-disable-next-line
        dayNum == 4 && 
        <DayFour courses={courses}/>}
    </>
  )
}

export default Days;
