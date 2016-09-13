import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import { StyleSheet, css } from 'aphrodite';
import Search from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';

export default function PatientToolbar({ patients, filter }) {
  const styles = PatientToolbar.styles;
  return (
    <Toolbar className={css(styles.toolbar)}>
      <ToolbarGroup className={css(styles.toolbarGroup)}>
        <Search className={css(styles.search)} />
        <AutoComplete
          dataSource={patients.map(patient => patient.name)}
          underlineShow={false}
          onUpdateInput={filter}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <FlatButton
          label="ADD"
          backgroundColor="white"
          containerElement={<Link to="/patients/create" />}
        />
      </ToolbarGroup>
    </Toolbar>
  );
}

PatientToolbar.styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#FFE0B2',
  },
  toolbarGroup: {
    backgroundColor: 'white',
    verticalAlign: 'middle',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  search: {
    margin: 'auto',
    paddingRight: '0px',
  },
});

PatientToolbar.propTypes = {
  patients: PropTypes.array.isRequired,
  filter: PropTypes.func,
};
