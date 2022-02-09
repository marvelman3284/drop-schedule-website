// TODO: Only render this function if there is nothing in localstorage or the 'edit' button is pushed
import React, { useState, useEffect } from "react";
import SetCourse from './helpers/SetCourse';


interface GetClassesProps {
  period: number;
}


function GetClasses( {period}: GetClassesProps ) {

  const [courses, setCourses] = useState({
    firstPer: "",
    secondPer: "",
    thirdPer: "",
    fourthPer: "",
    fifthPer: "",
    sixthPer: "",
    seventhPer: "",
    eigthPer: ""
  });


  function handleChange(evt: any) {

    const value = evt.target.value;

    setCourses({

      ...courses,

      [evt.target.name]: value

    });

}

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    //TODO: Do something -> save to localstorage
    //TODO: On submit move to new page with list and edit button that brings back to this page

    SetCourse(courses);

    console.log(courses);
  }

  // TODO: submit the form with a button instead of on enter

  return (
    <>
      <form onSubmit={submitForm}>
        <label>
          Period {period} Class:
          <input
          value={courses.firstPer}
          onChange={handleChange}
          type="text"
          name="firstPer"
          placeholder="Enter a course name"
        />
        <br/>
        </label>
        <label>
          Period {period} Class:
          <input
          value={courses.secondPer}
          onChange={handleChange}
          type="text"
          placeholder="Enter a course name"
          name="secondPer"
        />
        </label>
        <br/>
        <label>
          Period {period} Class:
          <input
          value={courses.thirdPer}
          onChange={handleChange}
          type="text"
          placeholder="Enter a course name"
          name="thirdPer"
        />
        </label>
        <label>
        <br/>
          Period {period} Class:
          <input
          value={courses.fourthPer}
          onChange={handleChange}
          type="text"
          placeholder="Enter a course name"
          name="fourthPer"
        />
        </label>
        <br/>
        <label>
          Period {period} Class:
          <input
          value={courses.fifthPer}
          onChange={handleChange}
          type="text"
          placeholder="Enter a course name"
          name="fifthPer"
        />
        </label>
        <br/>
        <label>
          Period {period} Class:
          <input
          value={courses.sixthPer}
          onChange={handleChange}
          type="text"
          placeholder="Enter a course name"
          name="sixthPer"
        />
        </label>
        <br/>
        <label>
          Period {period} Class:
          <input
          value={courses.seventhPer}
          onChange={handleChange}
          type="text"
          placeholder="Enter a course name"
          name="seventhPer"
        />
        </label>
        <br/>
        <label>
          Period {period} Class:
          <input
          value={courses.eigthPer}
          onChange={handleChange}
          type="text"
          placeholder="Enter a course name"
          name="eigthPer"
        />
        </label>
        <button type='submit'>click </button>
      </form>
    </>
  )
}

function SetClasses () {
  return (
    <>
      <GetClasses period={1} />
    </>
  )
}

export default SetClasses;
