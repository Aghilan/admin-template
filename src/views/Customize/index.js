import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import {FormBuilder} from 'react-formio';

class Index extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Customize</strong>
              </CardHeader>
              <CardBody>
                <Col>
                  <FormBuilder form={{display: 'form'}} onChange={(schema) => console.log(schema)} />
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index;
