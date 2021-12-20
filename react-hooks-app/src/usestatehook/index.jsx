import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

function UseStateHook({ match }) {
  /* Managing Individual Propery State */
  const { path } = match;

  const [studentId, setstudentId] = useState("");
  const [studentName, setstudentName] = useState("");
  const [studentPercentage, setstudentPercentage] = useState("");
  const [studentRecruitedFor, setstudentRecruitedFor] = useState("");

  let orgs = [
    { label: "Infosys", value: "infosys" },
    { label: "Verizon", value: "verizon" },
    { label: "CTS", value: "cts" },
  ];
  let [org, setOrg] = useState("⬇️ Select a Org ⬇️");
  let handleOrgChange = (e) => {
    setOrg(e.target.value);
    const { name, value } = e.target;
    setStudentObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(studentObj);
  };

  /* Managing OBJECT State */
  const [studentObj, setStudentObj] = useState({
    studentId: "",
    studentName: "",
    studentPercentage: "",
    studentRecruitedFor: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(studentObj);
  };

  return (
    <div>
      <h1>React - useState Hook</h1>
      <b> Student Id :</b>
      <input
        name="studentId"
        type="text"
        placeholder="Please enter student Id"
        onChange={handleChange}
      />{" "}
      {studentObj.studentId} <br /> <br />
      <b>Student Name :</b>{" "}
      <input
        name="studentName"
        type="text"
        placeholder="Please enter student Name"
        onChange={handleChange}
      />{" "}
      {studentObj.studentName} <br /> <br />
      <b>Student Percentage : </b>
      <input
        name="studentPercentage"
        type="text"
        placeholder="Please enter student percetage"
        onChange={handleChange}
      />{" "}
      {studentObj.studentPercentage} <br />
      <br />
      <b> Student Selected For :</b>
      <select name="studentRecruitedFor" onChange={handleOrgChange}>
        <option value="⬇️ Select a organization ⬇️">
          {" "}
          -- Select a Organization --{" "}
        </option>
        {orgs.map((org) => (
          <option value={org.value}>{org.label}</option>
        ))}
      </select>{" "}
      {studentObj.studentRecruitedFor}
      <br />
      <br />
      {/* <input  name="studentRecruitedFor" type="text" placeholder="Please select the organization" onChange={handleChange}  /> {studentObj.studentRecruitedFor}  */}
      {/* <h1>React - useState Hook  </h1> 
            <b> Student Id :</b><input  type="text" placeholder="Please enter student Id" onChange={ (e) =>{ setstudentId(e.target.value)}} /> {studentId}  <br/> <br/>
           <b>Student Name :</b> <input  type="text" placeholder="Please enter student Name" onChange={ (e) =>{ setstudentName(e.target.value)}} /> {studentName} <br/> <br/>
           <b>Student Percentage : </b><input  type="text" placeholder="Please enter student percetage" onChange={ (e) =>{ setstudentPercentage(e.target.value)}} /> {studentPercentage}  <br/><br/>
           <b> Student Selected For :</b>
           <select name="studentRecruitedFor" onChange={handleOrgChange}>
                <option value="⬇️ Select a organization ⬇️"> -- Select a Organization -- </option> 
                {orgs.map((org) => <option value={org.value}>{org.label}</option>)}
            </select>  {studentObj.studentRecruitedFor}<br/><br/>  */}
    </div>
  );
}

export { UseStateHook };
