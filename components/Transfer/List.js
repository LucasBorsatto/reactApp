import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import { fetchTransfers } from '../../actions/actions';
import Transfers from './Transfers';
import './List.scss';

const mapStateToProps = (state) => {
  return {
    transfers: state.transfers.transfers,
    isFetching: true,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

class List extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchTransfers();
  }

  renderTransfers(transfers) {
    if (!transfers || transfers.length < 1) {
      return (
        <h2 className="title">No hay transferencias por el momento.</h2>
      );
    }
    else{
      return (
        <div>
          <h2 className="title">Cantidad de transferencias: {transfers.length}</h2>
          <Transfers transfers={transfers} />
        </div>
      );
    }
  }

  render() {
    const { transfers } = this.props;
    return (
      <div>
        {this.renderTransfers(transfers)}
      </div>
    );
  }
}

List.propTypes = {
  transfers: PropTypes.array.isRequired,
};

List = connect(mapStateToProps, mapDispatchToProps)(List);
export default List;

