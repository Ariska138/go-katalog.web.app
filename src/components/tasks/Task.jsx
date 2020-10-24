import React from "react";
// format date
import moment from "moment";
// remove row
import { removeTask, toggleChecked } from "../../actions/taskActions";
// update checklist
import Check from "./Check";

import { connect } from "react-redux";


const Task = ({ task, removeTask, toggleChecked }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };


  const handleCheck = task => {
      toggleChecked(task);
  }

  return (
    <tr>
      <th scope="row"><img height="50px" src="https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2019/9/8/4752312/4752312_da11898f-7cd4-4518-b754-f04a88be5db3_525_525.jpg"/></th>
      <th>{task.task}</th>
      <td>{moment(task.date.toDate()).calendar()}</td>
      <td>
        <Check
        onClick={()=> handleCheck(task)}
        checked={task.checked}
        />
      </td>
      <td>
        <span
          className="material-icons text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => handleRemove(task)}
        >
          delete
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task))
  };
};

export default connect(null, mapDispatchToProps)(Task);
