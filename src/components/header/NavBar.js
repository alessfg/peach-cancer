import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Notification from 'material-ui/svg-icons/social/notifications';
import Person from 'material-ui/svg-icons/social/person';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { StyleSheet, css } from 'aphrodite';
import PeachCancerLogo from '../common/logo/PeachCancerLogo';

export default function NavBar({ handleTouchTap }) {
  const styles = NavBar.styles;
  return (
    <Toolbar className={css(styles.toolbar)}>
      <ToolbarGroup className={css(styles.toolbarGroup)}>
        <IconButton className={css(styles.button)} onTouchTap={handleTouchTap}>
          <Menu color="white" />
        </IconButton>
        <PeachCancerLogo className={css(styles.logo)} color="white" />
      </ToolbarGroup>
      <ToolbarGroup>
        <IconButton className={css(styles.button)} tooltip="Notifications">
          <Notification color="white" hoverColor="red" />
        </IconButton>
        <IconButton className={css(styles.button)} tooltip="user@mail.com">
          <Avatar icon={<Person />} />
        </IconButton>
      </ToolbarGroup>
    </Toolbar>
  );
}

NavBar.styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2D3E4F',
    position: 'relative',
    width: '100%',
    zIndex: '9999',
    verticalAlign: 'middle',
  },
  button: {
    margin: 'auto',
    padding: '0px',
    verticalAlign: 'middle',
  },
  logo: {
    width: 'auto',
    margin: 'auto',
    height: '56px',
  },
});

NavBar.propTypes = {
  handleTouchTap: PropTypes.func.isRequired,
};
