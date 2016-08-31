import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import { IndexLink, Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

export default function SideNavBar({ open, handleTouchTap }) {
  const styles = SideNavBar.styles;
  return (
    <Drawer
      containerClassName={css(styles.drawer)}
      docked={false}
      onRequestChange={handleTouchTap}
      open={open}
    >
      <List>
        <ListItem
          containerElement={<IndexLink to="/" />}
          onTouchTap={handleTouchTap}
          primaryText="Homepage"
        />
        <ListItem
          containerElement={<Link to="/patients" />}
          onTouchTap={handleTouchTap}
          primaryText="Patients"
        />
      </List>
    </Drawer>
  );
}

SideNavBar.styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#E0E0E0',
    paddingTop: '64px',
  },
});

SideNavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleTouchTap: PropTypes.func.isRequired,
};
