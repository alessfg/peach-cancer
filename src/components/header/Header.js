import React from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap() {
    this.setState({
      drawer: !this.state.drawer,
    });
  }

  render() {
    return (
      <div>
        <NavBar
          handleTouchTap={this.handleTouchTap}
        />
        <SideNavBar
          handleTouchTap={this.handleTouchTap}
          open={this.state.drawer}
        />
      </div>
    );
  }

}
