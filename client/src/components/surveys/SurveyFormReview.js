import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

//Shows users form inputs before submitting

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} style={{ margin: "10px 10px" }}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your information</h5>
      {reviewFields}
      <div style={{ margin: "50px" }} />
      <button
        className="yellow darken-3 btn-flat white-text left"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green darken-3 btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
