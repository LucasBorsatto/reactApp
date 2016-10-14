import React from 'react';
import { Link } from 'react-router';
import { AppBar, MenuItem, IconMenu, IconButton } from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import LoadingBar from 'react-redux-loading-bar';

const leftOption = (
  <IconMenu iconButtonElement={<IconButton><NavigationExpandMoreIcon />
  </IconButton>}>
    <MenuItem containerElement={<Link to="/new" />} primaryText="Nueva" />
    <MenuItem containerElement={<Link to="/list" />} primaryText="Mis Transferencias" />
  </IconMenu>
);

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="Transferencias Bancarias - OpenBank" iconElementLeft={leftOption} />
        <LoadingBar updateTime={300} maxProgress={100} />
      </div>
    );
  }
}
