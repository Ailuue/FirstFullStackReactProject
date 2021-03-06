import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends React.Component {
  renderContent() {
    return this.props.auth === null ? (
      ""
    ) : this.props.auth === false ? (
      <li>
        <a href="/auth/google">Login With Google</a>
      </li>
    ) : (
      [
        <li key="1">
          <Payments />
        </li>,
        <li key="3" style={{ margin: "0 10px" }}>
          Credits: {this.props.auth.credits}
        </li>,
        <li key="2">
          <a href="/api/logout">Logout</a>
        </li>
      ]
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Full Stack React Emails
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
