import React, { Component } from 'react';
import { Card, CardBody, Input, Button, Col, Row, Table, Badge } from 'reactstrap';
import employees from './employees-data';
import $ from "jquery";

class New extends Component {
  componentDidMount () {
    $('#btnRight').click(function (e) {
      var selectedOpts = $('#lstBox1 option:selected');
      if (selectedOpts.length == 0) {
        alert("Nothing to move.");
        e.preventDefault();
      }

      $('#lstBox2').append($(selectedOpts).clone());
      $(selectedOpts).remove();
      e.preventDefault();
    });

    $('#btnAllRight').click(function (e) {
      var selectedOpts = $('#lstBox1 option');
      if (selectedOpts.length == 0) {
        alert("Nothing to move.");
        e.preventDefault();
      }

      $('#lstBox2').append($(selectedOpts).clone());
      $(selectedOpts).remove();
      e.preventDefault();
    });

    $('#btnLeft').click(function (e) {
      var selectedOpts = $('#lstBox2 option:selected');
      if (selectedOpts.length == 0) {
        alert("Nothing to move.");
        e.preventDefault();
      }

      $('#lstBox1').append($(selectedOpts).clone());
      $(selectedOpts).remove();
      e.preventDefault();
    });

    $('#btnAllLeft').click(function (e) {
      var selectedOpts = $('#lstBox2 option');
      if (selectedOpts.length == 0) {
        alert("Nothing to move.");
        e.preventDefault();
      }

      $('#lstBox1').append($(selectedOpts).clone());
      $(selectedOpts).remove();
      e.preventDefault();
    });
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Row>
                  <Col xs="8" md="8">
                    <h2>Content</h2>
                  </Col>
                  <Col xs="8" md="8">
                    <Input defaultValue="Hello! Bruce (in Parker) needs ongoing help M-Su 9a - 5p. Care invloves homemaking and companion" type="textarea" name="textarea-input" id="textarea-input" rows="3"
                           placeholder="Content..." />
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col xs="8" md="8">
                    <h2>Recipients</h2>
                  </Col>
                  <Col xs="10" md="10">
                    <div className="subject-info-box-1">
                      <select multiple="multiple" id='lstBox1'>
                      {
                        employees.map(employee => {
                         return (
                           <option value={employee.id}>{employee.name}</option>
                         )
                        })
                      }

                      </select>
                    </div>

                    <div className="subject-info-arrows text-center">
                      <input type='button' id='btnAllRight' value='Add All' className="btn btn-default"/><br/>
                      <input type='button' id='btnRight' value='Add' className="btn btn-default"/><br/>
                      <input type='button' id='btnLeft' value='Remove' className="btn btn-default"/><br/>
                      <input type='button' id='btnAllLeft' value='Remove all' className="btn btn-default"/>
                    </div>

                    <div className="subject-info-box-2">
                      <select multiple="multiple" id='lstBox2'>
                        <option value="99">Aghilan Paramaivam</option>
                        <option value="98">Jerimiah Baldwin</option>
                        <option value="97">Syan Stavis</option>
                      </select>
                    </div>
                    <div className="clearfix"></div>
                  </Col>
                </Row>
                <br />
                <br />
                <Col col="6" sm="4" md="3" xl className="mb-4 mb-xl-0 offset-md-6">
                  <Button block color="primary">Send Broadcast</Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default New;
