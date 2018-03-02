import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import _ from "lodash";
import validateEmails from "../../utils/validateEmails";
import formFields from './formFields';

// Shows a form for the user to enter input



class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, field => {
      return (
        <Field
          key={field.name}
          component={SurveyField}
          type="text"
          label={field.label}
          name={field.name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values =>
            this.props.onSurveySubmit()
          )}
        >
          {this.renderFields()}
          <Link className="btn-flat red left white-text" to="/surveys">
            Cancel
          </Link>
          <button className="btn-flat green right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      name === "recipients"
        ? (errors[name] = `You must provide ${name}`)
        : (errors[name] = `You must provide a ${name}`);
    }
  });

  return errors;
}

//Redux Form config/wireup

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
