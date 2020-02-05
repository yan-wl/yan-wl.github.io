import React from 'react';
import './App.css';
import { ProgressBar, Jumbotron, Tab, Row, Col, Nav, Table } from 'react-bootstrap';

// const useStyles = React.makeStyle(() => ({
//   tab: {
//     fontSize: "4rem"
//   }
// }))

function App() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Jumbotron>
        <ProgressBar now={10} label={10}/>
      </Jumbotron>
    </React.Fragment>
  );
}

export default App;
