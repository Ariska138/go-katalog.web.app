import React, { Component } from "react";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";
import UploadImage from "./UploadImage";

class AddTask extends Component {
  state = {
    task: "",
    url: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  setURL = (url) => {
    this.setState({
      url
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    document.getElementById("addTaskForm").reset();
    console.log(this.state);
  };

  render() {
    return (
      <div className="my-5">
        <form id="addTaskForm" autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="task">Add Product</label>
            <input
              type="text"
              className="form-control"
              id="task"
              onChange={this.handleChange}
            />
          </div>
          <UploadImage data={this.setURL.bind(this)}/>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: ({task, url}) => dispatch(addTask({task, url})),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
