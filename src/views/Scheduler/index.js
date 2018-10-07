import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Tabulator from "tabulator-tables"; //import Tabulator library
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet

import usersData from './UsersData'
import schedulerColumns from './columns';

class Index extends Component {
  constructor (props) {
    super(props);
    this.tabulator = null; //variable to hold your table
    this.tableData = usersData;
    this.columns = schedulerColumns;
  }

  componentDidMount() {
    this.tabulator = new Tabulator(this.el, {
      data: this.tableData,
      columns: this.columns
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Time/Attendance</strong>
              </CardHeader>
              <CardBody>
                Scheduler - Time/Attendance
                <div ref={el => (this.el = el)} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index;
