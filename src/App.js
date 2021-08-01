import React,{useState} from "react";
import { Container, Button, Row } from "react-bootstrap";
import Sgpa from "./Components/Sgpa";
import Cgpa from "./Components/Cgpa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  document.body.style = "background: #292b2c;";
  const [render,setRender] = useState(0);
  function handleCgpa(){
    setRender(1);
  }
  function handleSgpa(){
    setRender(0);
  }
  console.log(render)

  return ( <Container className="main">
     <h6 className="social-div">Connect with me on <a href="https://www.linkedin.com/in/ali-qumail-4b77601a8/">Linkedin</a></h6>
        <Row className="align-items-center justify-content-center">
        
     
     
            <Button className="gpaBtn" variant="primary" onClick={handleSgpa}>
              Sgpa
            </Button>
            <Button className="gpaBtn" variant="danger" onClick={handleCgpa}>
              Cgpa
            </Button>
       
        </Row>
          { render === 0 ? <Sgpa/> : <Cgpa/> }

         </Container>

  );
}
