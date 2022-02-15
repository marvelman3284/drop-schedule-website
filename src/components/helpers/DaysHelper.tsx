import { classesProps } from './SetCourse';
import '../../css/days.css';

interface dayProps {
  courses: classesProps;
}


function DayOne({courses}: dayProps) {
    return (
      <>
        <h3>Block #1:{courses.firstPer}</h3> 
        <h3>Block #2:{courses.secondPer}</h3> 
        <h3>Block #3:{courses.thirdPer}</h3> 
        <h3>Block #4:{courses.fifthPer}</h3> 
        <h3>Block #5:{courses.sixthPer}</h3> 
        <h3>Block #6:{courses.seventhPer}</h3> 
      </>
    )
}

function DayTwo({courses}: dayProps) {
    return (
      <>
        <h3>Block #1:{courses.secondPer}</h3> 
        <h3>Block #2:{courses.thirdPer}</h3> 
        <h3>Block #3:{courses.fourthPer}</h3> 
        <h3>Block #4:{courses.sixthPer}</h3> 
        <h3>Block #5:{courses.seventhPer}</h3> 
        <h3>Block #6:{courses.eigthPer}</h3> 
      </>
    )
}

function DayThree({courses}: dayProps) {
    return (
      <>
        <h3>Block #1:{courses.thirdPer}</h3> 
        <h3>Block #2:{courses.fourthPer}</h3> 
        <h3>Block #3:{courses.firstPer}</h3> 
        <h3>Block #4:{courses.seventhPer}</h3> 
        <h3>Block #5:{courses.eigthPer}</h3> 
        <h3>Block #6:{courses.fifthPer}</h3> 
      </>
    )
}

function DayFour({courses}: dayProps) {
    return (
      <>
        <h3>Block #1:{courses.fourthPer}</h3> 
        <h3>Block #2:{courses.firstPer}</h3> 
        <h3>Block #3:{courses.secondPer}</h3> 
        <h3>Block #4:{courses.eigthPer}</h3> 
        <h3>Block #5:{courses.fifthPer}</h3> 
        <h3>Block #6:{courses.sixthPer}</h3> 
    </>
  )
}

export {DayOne, DayTwo, DayThree, DayFour}
