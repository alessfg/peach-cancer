import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { StyleSheet, css } from 'aphrodite';
import PatientToolbar from '../../components/patientDirectory/PatientToolbar';
import PatientList from '../../components/patientDirectory/PatientList';

export class PatientDirectoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patients: this.props.patients,
    };
    this.filterPatients = this.filterPatients.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      patients: nextProps.patients,
    });
  }

  filterPatients(string) {
    const newPatients = this.props.patients.filter(patient => {
      let isPresent = false;
      Object.values(patient).forEach(value => {
        if (value.includes(string)) {
          isPresent = true;
        }
      });
      return isPresent;
    });
    this.setState({
      patients: newPatients,
    });
  }

  render() {
    const styles = PatientDirectoryPage.styles;
    let component;
    if (this.props.loading) {
      component = <CircularProgress className={css(styles.loading)} />;
    } else {
      component = (
        <div>
          <PatientToolbar
            patients={this.state.patients}
            filter={this.filterPatients}
          />
          <PatientList
            patients={this.state.patients}
          />
        </div>
      );
    }
    return component;
  }

}

PatientDirectoryPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  patients: PropTypes.array.isRequired,
};

PatientDirectoryPage.styles = StyleSheet.create({
  loading: {
    margin: 'auto',
    width: '100%',
    height: 'calc(100vh - 56px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    loading: state.fetchInProgress > 0,
    patients: state.patients,
  };
}

export default connect(mapStateToProps)(PatientDirectoryPage);
