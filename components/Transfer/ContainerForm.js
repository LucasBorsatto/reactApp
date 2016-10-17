import React, { Component, PropTypes } from 'react';
import Form from './Form';
import { sendTransfer } from '../../actions/actions';
import { connect } from 'react-redux';

class ContainerForm extends Component {

  handleSubmit(data) { 
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    this.props.dispatch(sendTransfer(data));
    return sleep(5000).then(() => {
      window.location.href = '/';
      window.location.location.reload();
    });// simulate server latency
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

ContainerForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ContainerForm);

