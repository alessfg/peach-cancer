import React from 'react';
import { destroy } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { Step, Stepper, StepContent, StepButton } from 'material-ui/Stepper';
import { browserHistory } from 'react-router';
import PersonalDetailsForm from './PersonalDetailsForm';
import GPDetailsForm from './GPDetailsForm';
import NOKDetailsForm from './NOKDetailsForm';
import { createPatient } from '../../actions/patientActions';

export default class PatientCreationPage extends React.Component {

  constructor() {
    super();
    this.state = {
      stepIndex: 0,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(patient, dispatch) {
    dispatch(createPatient(patient));
    dispatch(destroy('createPatient'));
    browserHistory.push('/patients');
  }

  render() {
    const styles = {
      padding: 30,
      margin: '15px auto',
      maxWidth: '1200px',
    };
    const { stepIndex } = this.state;
    return (
      <Paper style={styles}>
        <Stepper
          linear={false}
          activeStep={stepIndex}
          orientation="vertical"
        >
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 0 })}>
              Personal Details
            </StepButton>
            <StepContent>
              <PersonalDetailsForm
                onSubmit={() => this.setState({ stepIndex: 1 })}
                stepper={
                  <div style={{ margin: '12px 0' }}>
                    <FlatButton
                      label="Next"
                      disableTouchRipple
                      type="submit"
                      disableFocusRipple
                      style={{ marginRight: 12 }}
                    />
                  </div>
                }
              />
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 1 })}>
              General Practitioner Details
            </StepButton>
            <StepContent>
              <GPDetailsForm
                onSubmit={() => this.setState({ stepIndex: 2 })}
                stepper={
                  <div style={{ margin: '12px 0' }}>
                    <FlatButton
                      label="Next"
                      disableTouchRipple
                      type="submit"
                      disableFocusRipple
                      style={{ marginRight: 12 }}
                    />
                    <FlatButton
                      label="Back"
                      disableTouchRipple
                      disableFocusRipple
                      onTouchTap={() => this.setState({ stepIndex: 0 })}
                    />
                  </div>
                }
              />
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 2 })}>
              Next of Kin Details
            </StepButton>
            <StepContent>
              <NOKDetailsForm
                onSubmit={this.onSubmit}
                stepper={
                  <div style={{ margin: '12px 0' }}>
                    <FlatButton
                      label="Finish"
                      disableTouchRipple
                      type="submit"
                      disableFocusRipple
                      style={{ marginRight: 12, verticalAlign: 'middle' }}
                    />
                    <FlatButton
                      label="Back"
                      disableTouchRipple
                      disableFocusRipple
                      onTouchTap={() => this.setState({ stepIndex: 0 })}
                    />
                  </div>
                }
              />
            </StepContent>
          </Step>
        </Stepper>
      </Paper>
    );
  }

}
