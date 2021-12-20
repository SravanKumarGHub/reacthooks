import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

var studentContext = React.createContext(null);


function UseContextHook({ match }) {
  
    var [studentDetails] = useState({
        name: "Sravan",
        age: 30,
        percentage: 76
      });
  
    return (
        // <>
        //     <h1>This is Student Component</h1>
        //     <hr />
        //     <StudentCampusPlacementsComponent studentDetails={studentDetails} />
        // </> 
        <studentContext.Provider value={studentDetails}>
             <h1>This is Student Component</h1>
            <hr />
            <StudentCampusPlacementsComponent />
        </studentContext.Provider>
    );
}

function StudentCampusPlacementsComponent(props) {
    return (
      <div>
        <h2>This is Student Campus Placements Component</h2>
        <hr />
        <StudentScholarshipComponent/>
        {/* <StudentScholarshipComponent studentDetails={props.studentDetails}/> */}
      </div>
    );
  }
  
  function StudentScholarshipComponent(props) {
      
    var contextData = React.useContext(studentContext);
    
    return (
        <div>
          <h3>This is Student Scholarship Component</h3>
          <h4>Student Name: {contextData.name}</h4>
          <h4>Student Age: {contextData.age}</h4>
          <h4>Student %: {contextData.percentage}</h4>
        </div>
      );

    // return (
    //   <div>
    //     <h3>This is Student Scholarship Component</h3>
    //     <h4>Student Name: {props.studentDetails.name}</h4>
    //     <h4>Student Age: {props.studentDetails.age}</h4>
    //     <h4>Student %: {props.studentDetails.percentage}</h4>
    //   </div>
    // );
  }

export { UseContextHook };