import React, { useState } from "react";
import { SaveCourses } from './helpers/SetCourse';
import { useNavigate } from "react-router";
import '../css/input.css';
import '../css/all.css';


function GetClasses() {

  const navigate = useNavigate();

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

    SaveCourses(courses);

    console.log(courses);

    navigate('/')
  }


  return (
    <>
      <h2>Enter your classes below, then hit submit</h2>
      <form onSubmit={submitForm}>
        <label>
         <b>Period 1 Class: </b>
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
          <b>Period 2 Class: </b>
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
          <b>Period 3 Class: </b>          
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
          <b>Period 4 Class: </b>
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
          <b>Period 5 Class: </b>
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
          <b>Period 6 Class: </b>
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
          <b>Period 7 Class: </b>
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
          <b>Period 8 Class: </b>
          <input
          value={courses.eigthPer}
          onChange={handleChange}
          type="text"
          placeholder="Enter a course name"
          name="eigthPer"
        />
        </label>
        <br />
        <button type='button' onClick={() => {navigate('/')}}>Home</button>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

function SetClasses () {
  return (
    <>
      <GetClasses />
    </>
  )
}

export default SetClasses;
