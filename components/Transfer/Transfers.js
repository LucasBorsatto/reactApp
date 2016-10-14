import React, { PropTypes, Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class Transfers extends Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Nombre y Apellidos</TableHeaderColumn>
            <TableHeaderColumn>Monto</TableHeaderColumn>
            <TableHeaderColumn>Fecha</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody> {this.props.transfers.map((transfer, i) =>
          <TableRow key={i}>
            <TableRowColumn>{transfer.recipientTransfer}</TableRowColumn>
            <TableRowColumn>{transfer.amountTransfer}</TableRowColumn>
            <TableRowColumn>{transfer.dateTransfer}</TableRowColumn>
          </TableRow>
            )}
        </TableBody>
      </Table>
    );
  }
}

Transfers.propTypes = {
  transfers: PropTypes.array.isRequired,
};
