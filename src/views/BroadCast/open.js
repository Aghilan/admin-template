import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Pagination, PaginationItem, PaginationLink, Table, Button } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';
import openData from './open-data'
import 'datatables.net';

class Open extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailClicked: -1
    }
  }
  componentDidMount() {
    $('#open_broadcasts').DataTable();
  }
  render() {

    const openBroadCastItems = openData,
      {detailClicked} = this.state;

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
                        <tr key={id}
                            onClick={() => {
                              console.log(id);
                              this.setState({
                                detailClicked: id
                              })
                            }}
                        >
                          {(detailClicked > -1)?<Redirect push to={"/broadcasts/" + detailClicked}/> : null}
                          <td>{date.toLocaleDateString("en-US")}</td>
                          <td>{name}</td>
                          <td>{messages}</td>
                          <td>{accessRate}</td>
                          <td>{responseRate}</td>
                          <td>
                            <Button onClick={() => console.log(id)} color="success">Close Now</Button>
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
