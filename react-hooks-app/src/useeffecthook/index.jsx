import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect, useCallback } from "react";
import axios from "axios";
function UseEffectHook({ match }) {
  const { path } = match;

  let txtStudentId = React.createRef();

  function handleClick() {
    setstudentId(txtStudentId.current.value);
  }

  const [studentId, setstudentId] = useState(0);
  const [studentList, setstudentList] = useState(null);

  useEffect(() => {
    if (studentId > 0) {
      axios
        .get("https://localhost:44344/api/student/" + studentId)
        .then((response) => {
          setstudentList(response.data);
          console.log("useEffect triggered");
        });
    }
  }, [studentId]);

  return (
    <div>
      <div>
        <h1>React - useEffect Hook </h1>
      </div>
      <input
        ref={txtStudentId}
        type="text"
        placeholder="Please enter student Id"
      />{" "}
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setstudentId(txtStudentId.current.value);
        }}
      >
        {" "}
        Fetch Students{" "}
      </button>{" "}
      <br /> <br />
      {/* <button onClick={handleClick}>  Fetch Students  </button>   <br/> <br/> */}
      <h3> Student Details</h3> <br />
      <b> Student Id :</b> {studentList && studentList.id && studentList.id}{" "}
      <br />
      <b>Student Name :</b>{" "}
      {studentList && studentList.name && studentList.name} <br />
      <b>Student Percentage : </b>{" "}
      {studentList && studentList.percentage && studentList.percentage} <br />
      <b> Student Selected For :</b>{" "}
      {studentList && studentList.recruitedFor && studentList.recruitedFor}{" "}
      <br />
    </div>
  );
}

export { UseEffectHook };
