import React, { Component } from 'react';
import {Form} from 'react-formio';

class DynamicForm extends Component {
  render() {
    const {layout} = this.props;
     return (
      <div className="animated fadeIn">
        <Form src={layout} />
      </div>
    )
  }
}

export default DynamicForm;
