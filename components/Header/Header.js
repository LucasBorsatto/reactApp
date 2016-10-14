import React from 'react'
import { IndexLink, Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import IconButton from 'material-ui/IconButton'
import LoadingBar from 'react-redux-loading-bar'

const leftOption = (
   <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
            >
            <MenuItem containerElement={<Link to="/new" />}  primaryText="Nueva"/>
            <MenuItem containerElement={<Link to="/list" />}  primaryText="Mis Transferencias"/>
    </IconMenu>
)

export default class Header extends React.Component {
  render() {
    return (
     <div>
         <AppBar title="Transferencias Bancarias - OpenBank" iconElementLeft={leftOption} />
         <LoadingBar updateTime={300} maxProgress={100} />
     </div>
    )
  }
}