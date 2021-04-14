import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import Sgpa from "./Components/Sgpa";
import Cgpa from "./Components/Cgpa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  document.body.style = "background: #292b2c;";
  return (
    <Router>
      <Container className="main">
        <Row className="align-items-center justify-content-center">
          <Link className="a" to="/sgpa">
            {" "}
            <Button className="gpaBtn" variant="primary">
              Sgpa
            </Button>
          </Link>
          <Link className="a" to="/cgpa">
            {" "}
            <Button className="gpaBtn" variant="danger">
              Cgpa
            </Button>
          </Link>
        </Row>

        <Switch>
          <Route path="/sgpa">
            <Sgpa />
          </Route>
          <Route path="/cgpa">
            <Cgpa />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
