import React from "react";
import AddTask from "../tasks/AddTask";
import Tasks from "../tasks/Tasks";
import{connect} from "react-redux";
import { Redirect } from "react-router-dom";

const Dashboard = ({uid}) => {
  if(!uid) return <Redirect to="/"/>

  return (
    <div className="container">
      <h3>Dashboard</h3>
      <AddTask />
      <Tasks/>
    </div>
  );
};

const mapStateProps = (state) => {
  const uid = state.firebase.auth.uid;

  return {uid};
}

export default connect(mapStateProps)(Dashboard);
