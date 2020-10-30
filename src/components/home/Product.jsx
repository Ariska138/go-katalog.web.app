import React from 'react';
import MyImage from './MyImage';

const Product = ({task}) => {
    return (
        <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <MyImage image={{
                  src: task.urlImg,
                  alt: task.urlImg, 
                  height:'200px', 
                  className:"card-img-top"
                  }}/>
                {/* <img className="card-img-top" alt="Card image cap" src={task.urlImg}/> */}
                <div className="card-body">
    <p className="card-text">{task.task}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
    );
}

export default Product;