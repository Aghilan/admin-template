import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Input, Button, Col, Row, Table } from 'reactstrap';

import employeeDetails from "./employees-data";
import $ from "jquery";
import 'datatables.net';

class Employees extends Component {

  componentDidMount() {
    $('#employee_details').DataTable();
  }
  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Col col="6" sm="4" md="2" xl="2" className="offset-md-9">
                  <Button block color="primary">Add</Button>
                </Col>
                <Table id="employee_details" responsive striped>
                  <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>SMS Address</th>
                    <th>Broadcast Enabled?</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    employeeDetails.map( (employees, index) => {
                      let {name, lastName, smsAddress, broadCastEnabled} = employees
                      return (
                        <tr key={index}>
                          <td>{name}</td>
                          <td>{lastName}</td>
                          <td>{smsAddress}</td>
                          <td><Input type={"checkbox"} defaultChecked={broadCastEnabled}/></td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
                <Col col="2" sm="2" md="2" xl="2" className="offset-sm-9">
                  <Button block color="primary">Save</Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Employees;
