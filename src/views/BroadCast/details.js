import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Table, Input, Button } from 'reactstrap';

import $ from "jquery";
import 'datatables.net';
import broadCastDetails from "./broadcast-details-data";

class Details extends Component {

  componentDidMount() {
    $('#broadcast_details').DataTable();
  }
  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Row>
                  <Col xs="6" md="6">
                    <Input defaultValue="Need help for Bruce" type="textarea" name="textarea-input" id="textarea-input" rows="1"
                           placeholder="Cool Name" />
                  </Col>
                  <Col xs="2" md="2">
                    <Button> Close </Button>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col xs="8" md="8">
                    <Input defaultValue="Hello! Bruce (in Parker) needs ongoing help M-Su 9a - 5p. Care invloves homemaking and companion" type="textarea" name="textarea-input" id="textarea-input" rows="3"
                         placeholder="Content..." />
                  </Col>
                </Row>
                <br />
                <br />
                <Table id="broadcast_details" responsive striped>
                  <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Accessed</th>
                    <th>Responded</th>
                    <th>Response</th>
                    <th>Comments</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    broadCastDetails.employees.map( (employees, index) => {
                      let {name, accessed, response, responded, comments} = employees
                      return (
                        <tr key={index}>
                          <td>{name}</td>
                          <td>{accessed}</td>
                          <td>{responded}</td>
                          <td>{response}</td>
                          <td>{comments}</td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Details;
