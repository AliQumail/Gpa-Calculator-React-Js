import React from "react";
import "./SgpaComponent.css";
import {Row,Button} from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";

function SgpaComponent(props) {
  return (
    <Row className='align-items-center justify-content-center'>
      <input
        type="text"
        id="name"
        name="subjectName"
        placeholder={props.subject}
        className='input-div'
      />

      <select
        className='select-css'
        onChange={(event) => props.handleCredits(event, props.index)}
        credits={props.credit}
      >
        
        <option credits="1">1</option>
        <option credits="2">2</option>
        <option credits="3">3</option>
        <option credits="4">
          4
        </option>
        <option credits="None">None</option>
      </select>
      <div className='points-css'><p className='points-text'>{props.point}</p></div>
      <select
         className='select-css'
        onChange={(event) => props.handleGrade(event, props.index)}
        grade={props.grade}
      > 
        <option grade="A+">A+</option>
        <option grade="A">A</option>
        <option grade="A-">A-</option>
        <option grade="B+">B+</option>
        <option grade="B">B</option>
        <option grade="B-">B-</option>
        <option grade="C+">C+</option>
        <option grade="C">C</option>
        <option grade="C-">C-</option>
        <option grade="D+">D+</option>
        <option grade="D">D</option>
        <option grade="F">F</option>
        <option credits="None">None</option>
      </select>
      <Button variant='danger' onClick={ () => props.handleDelete(props.index) }><BsFillTrashFill/></Button>
      
    </Row>
  );
}

export default SgpaComponent;
