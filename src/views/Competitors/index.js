import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

class Index extends Component {

  render() {

    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Competitors</strong>
              </CardHeader>
              <CardBody>
                  Competitors
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index;
