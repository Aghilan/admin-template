import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import $ from "jquery";
import openData from "./open-data";
import 'datatables.net';

class Closed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailClicked: -1
    }
  }
  componentDidMount() {
    $('#closed_broadcasts').DataTable();
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
                <i className="fa fa-align-justify"></i> Closed Broadcast
              </CardHeader>
              <CardBody>
                <Table id="closed_broadcasts" responsive striped>
                  <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Messages</th>
                    <th>Access Rate</th>
                    <th>Response Rate</th>
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
                        </tr>
                      );
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

export default Closed;
