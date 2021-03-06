import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import Form from '../Common/form';
import layout from '../../assets/layout-config.json';

class Index extends Component {
  constructor (props) {
    super(props);
   }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Worker</strong>
              </CardHeader>
              <CardBody>
                <Form layout={layout}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index;
