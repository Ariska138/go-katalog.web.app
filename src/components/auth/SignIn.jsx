import React, { Component } from "react";
import {signIn} from "../../actions/AuthAction";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class SignIn extends Component {
  state = {
      email: "",
      password: ""
  };

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.signIn(this.state);
  }

  render() {
    const { uid } = this.props;
    if(uid) return <Redirect to="/dashboard"/>
    
    return (
      <div className="container my-5">
        <h1> Sign In</h1>
        <form 
        autoComplete="off"
        onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
            type="email" 
            className="form-control" 
            id="email"
            onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            className="form-control" 
            id="password"
            onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;

  return {
      uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {signIn: (creds) => dispatch(signIn(creds))}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
