import React, {Component, PropTypes} from 'react'
import Form from './Form'
import { sendTransfer } from '../../actions/actions'
import { connect } from 'react-redux'

class ContainerForm extends Component {

  handleSubmit(data) {
    this.props.dispatch(sendTransfer(data))
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
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(ContainerForm)