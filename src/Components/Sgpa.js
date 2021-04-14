import React, { useEffect, useState } from "react";
import SgpaComponent from "./SgpaComponent";
import './Sgpa.css'
import {Container,Row,Col,Button} from 'react-bootstrap';

function Sgpa() {
  
  const [subjects, setSubjects] = useState(["Subject Name"]);
  const [grades, setGrades] = useState(["A+"]);
  const [points, setPoints] = useState([4]);
  const [credits, setCredits] = useState([1]);
  const [sgpa, setSgpa] = useState();
  function handleAdd() {
    setSubjects((prev) => [...prev, "Subject Name"]);
    setGrades((prev) => [...prev, "A+"]);
    setPoints((prev) => [...prev, 4]);
    setCredits((prev) => [...prev, 1]);
  }
  useEffect(() => {
    // handlePoints();
    calcSgpa();
  });
 
  function calcSgpa() {
    let totalCredits = 0;
    let totalPoints = 0;
    
    for (let i = 0; i < credits.length; i++) {
      if ((credits[i] !=='none') || (points[i]!=='none') ){
        totalCredits = totalCredits + parseFloat(credits[i]);
      }
      
    }
    
  
    for (let i = 0; i < points.length; i++) {
      if ((credits[i] !=='none') || (points[i]!=='none') ){
        totalPoints += (points[i] * credits[i]); 
      }
     
    }
   
   
    

    

    setSgpa(totalPoints / totalCredits);
    totalPoints=0;
    totalCredits=0;
  }

  function handleGrade(event, i) {
    let newGrades = [...grades];
    newGrades[i] = event.target.value;
    handlePoints(newGrades[i],i);
    setGrades(newGrades);
   
   
  }

  function handleDelete(valueIndex){
    
    setPoints(points.filter((point, index) => valueIndex !== index)); 
    setCredits(credits.filter((credit, index) => valueIndex !== index));
    setGrades(grades.filter((grade, index) => valueIndex !== index));
    setSubjects(subjects.filter((subject, index) => valueIndex !== index));  
    

  }


  function handleCredits(event, i) {
    let newCredits = [...credits];
    newCredits[i] = event.target.value;
    setCredits(newCredits);
  
  }

  function handlePoints(grades,i){
    if (grades === "A+" || grades === "A") {
      const newPoints = [...points];
      newPoints[i] = 4;
      setPoints(newPoints);
    }
    if (grades === "A-") {
      let newPoints = [...points];
      newPoints[i] = 3.67;
      setPoints(newPoints);
    }
    if (grades === "B+") {
      let newPoints = [...points];
      newPoints[i] = 3.33;
      setPoints(newPoints);
    }

    if (grades === "B") {
      let newPoints = [...points];
      newPoints[i] = 3.0;
      setPoints(newPoints);
    }
    if (grades === "B-") {
      let newPoints = [...points];
      newPoints[i] = 2.67;
      setPoints(newPoints);
    }
    if (grades === "C+") {
      let newPoints = [...points];
      newPoints[i] = 2.33;
      setPoints(newPoints);
    }
    if (grades === "C") {
      let newPoints = [...points];
      newPoints[i] = 2.0;
      setPoints(newPoints);
    }
    if (grades === "C-") {
      let newPoints = [...points];
      newPoints[i] = 1.67;
      setPoints(newPoints);
    }
    if (grades === "D+") {
      let newPoints = [...points];
      newPoints[i] = 1.37;
      setPoints(newPoints);
    }
    if (grades === "D") {
      let newPoints = [...points];
      newPoints[i] = 1.0;
      setPoints(newPoints);
    }
    if (grades === "F") {
      let newPoints = [...points];
      newPoints[i] = 0;
      setPoints(newPoints);
    }
  }
  return (
    <Container>
      <Row className='align-items-center justify-content-center'>
      <div className='sgpa'>Sgpa : {sgpa}</div>
      </Row>
      {subjects.map((subject, i) => {
        return (
          <SgpaComponent
            
            handleDelete={handleDelete}
            subject={subject}
            grade={grades[i]}
            credit={credits[i]}
            point={points[i]}
            index={i}
            handleGrade={handleGrade}
            handleCredits={handleCredits}
          />
        );
      })}
      <Button variant='warning' className='add-btn' onClick={handleAdd}>+</Button>
    </Container>
  );
}

export default Sgpa;
