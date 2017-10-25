import React from "react";
import { connect } from "react-redux";

class Landing extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Emails</h1>
        <p>Collect feedback from users</p>
      </div>
    );
  }
}

export default connect(null)(Landing);
