import React, {useState} from 'react';
import { connect } from "react-redux";
import {uploadImage} from "../../actions/ImgAction"

const UploadImage = ({uploadImage}) => {
  const [image, setImage] = useState(null);

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
  };

  console.log("image: ",image);

  const handleUpload = (e) => {
    e.preventDefault();
      if(image) {
          uploadImage(image);
      }else{
          console.log("image not found");
      }
  };

  return (
    <div className="form-group">
      <label htmlFor="task">Upload Image</label>
      <input
        type="file"
        className="form-control"
        id="image"
        onChange={handleChangeImage}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
    return {
      uploadImage: (img) => dispatch(uploadImage(img)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(UploadImage);