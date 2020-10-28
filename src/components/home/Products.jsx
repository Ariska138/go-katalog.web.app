import React from 'react';

//read data form firebase
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Product from "./Product";

const Products = ({tasks}) => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
              {tasks && tasks.map(task => <Product task={task} key={task.id}/>)}
              </div>
            </div>
          </div>
    );
}

//read data
const mapStateToProps = (state) => {
    console.log(state);
    const tasks = state.firestore.ordered.tasks;
    return {
      tasks,
    };
  };
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
      {
        collection: "tasks",
        orderBy: ["date", "desc"],
      },
    ])
  )(Products);