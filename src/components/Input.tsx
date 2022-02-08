// TODO: Only render this function if there is nothing in localstorage or the 'edit' button is pushed
// TODO: implement a clear courses button that resets localstorage
import React, { useState } from "react";
import { SaveCourses, SaveClassesProps, GetCourses } from './helpers/SetCourse';
import { useNavigate } from "react-router";


interface GetClassesProps {
  period: number;
}

let glob: SaveClassesProps[] = GetCourses();

function GetClasses( {period}: GetClassesProps ) {

  const [course, setCourse] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    //DONE: Do something -> save to localstorage
    //DONE: On submit move to new page with list and edit button that brings back to this page

    let arr: SaveClassesProps = {name: course, period: period};
    glob.push(arr);
    SaveCourses(glob);
  }

  

  return (
    <>
      <form onSubmit={submitForm}>
        <label>
          Period {period} Class:
          <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          type="text"
          placeholder="Enter a course name"
          className="input"
        />
        </label>
      </form>
    </>
  )
}

function SetClasses () {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <>
      <GetClasses period={1} />
      <GetClasses period={2} />
      <GetClasses period={3} />
      <GetClasses period={4} />
      <GetClasses period={5} />
      <GetClasses period={6} />
      <GetClasses period={7} />
      <GetClasses period={8} />
      <button onClick={handleClick} type="submit"> Finish </button>
    </>
  )
}

export default SetClasses;
