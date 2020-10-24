import React from 'react'; //imr <tab>
import Task from './Task';
//read data form firebase
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({tasks}) => { // slr <tab>
    return (
        <table className="table table-striped table-dark">
  <thead>
    <tr className="text-info">
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Added On</th>
      <th scope="col">Is Showed</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {tasks && tasks.map(task => <Task task={task} key={task.id}/>)}
    
  </tbody>
</table>
    );
}

//read data
const mapStateToProps = state => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks,
    uid: state.firebase.auth.uid
  }
}

export default compose(
  connect(mapStateToProps),
   firestoreConnect(ownProps => [{
  collection: "tasks",
  where: ["authorId", "==", ownProps.uid],
  orderBy: ["date","desc"]
}]))(Tasks);