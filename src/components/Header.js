/* eslint-disable */

import React from 'react';
import { IndexLink, Link } from 'react-router';
import Logo from './Logo';
// import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import DropDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';


export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={() => this.setState({drawer: true})}
          title={this.props.title}
          iconElementRight={
            <FlatButton
              onTouchTap={this.handleTouchTap}
              label="User"
              labelPosition="before"
              icon={<DropDownIcon />}
            />
          }
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign Out" />
          </Menu>
        </Popover>
        <Drawer
          docked={false}
          open={this.state.drawer}
          onRequestChange={() => this.setState({drawer: false})}
        >
          <Link to="/">
            <MenuItem primaryText="HomePage" onTouchTap={() => this.setState({drawer: false})}/>
          </Link>
          <Link to="patients">
            <MenuItem primaryText="Patients" onTouchTap={() => this.setState({drawer: false})}/>
          </Link>
        </Drawer>
      </div>
    );
  }

}
