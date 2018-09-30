import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Pagination, PaginationItem, PaginationLink, Table, Badge } from 'reactstrap';
import $ from 'jquery';
import openData from './open-data'
import 'datatables.net';

class Open extends Component {

  componentDidMount() {
    $('#open_broadcasts').DataTable();
  }
  render() {

    const openBroadCastItems = openData

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Open Broadcast
              </CardHeader>
              <CardBody>
                <Table id="open_broadcasts" responsive striped>
                  <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Messages</th>
                    <th>Access Rate</th>
                    <th>Response Rate</th>
                    <th>Close</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    openBroadCastItems.map( (open) => {
                      let {date, name, messages, accessRate, responseRate, id} = open
                      return (
                        <tr key={id}>
                          <td>{date.toLocaleDateString("en-US")}</td>
                          <td>{name}</td>
                          <td>{messages}</td>
                          <td>{accessRate}</td>
                          <td>{responseRate}</td>
                          <td>
                            <Badge onClick={() => console.log(id)} color="success">Close Now</Badge>
                          </td>
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

export default Open;
