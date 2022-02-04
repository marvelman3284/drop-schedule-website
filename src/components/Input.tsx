// TODO: Only render this function if there is nothing in localstorage or the 'edit' button is pushed
import React, { useState, useEffect } from "react";
import {SaveCourses, SaveClassesProps} from './helpers/SetCourse';


interface GetClassesProps {
  period: number;
}


let glob: SaveClassesProps[] = [];

function GetClasses( {period}: GetClassesProps ) {

  const [course, setCourse] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    //TODO: Do something -> save to localstorage
    //TODO: On submit move to new page with list and edit button that brings back to this page

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
    </>
  )
}

export default SetClasses;