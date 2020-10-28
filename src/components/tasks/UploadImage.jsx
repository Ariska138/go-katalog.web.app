import React, {useState} from 'react';
// import { connect } from "react-redux";
import {getFirebase} from "react-redux-firebase";


const UploadImage = ({upload}) => {
  const [image, setImage] = useState(null);

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
  };

 const uploadImage = (img) => {
    const firebase = getFirebase();

    const uploadImage = firebase.storage().ref(`images/${img.name}`).put(img);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        //progress
        
      },
      (error) => {
        console.log('error');
      },
      () => {
        firebase.storage().ref("images")
        .child(img.name)
        .getDownloadURL()
        .then((url) => {
            upload(url);
        })
      }
    );
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//       uploadImage: (img) => dispatch(uploadImage(img)),
//     };
//   };
  
//   export default connect(null, mapDispatchToProps)(UploadImage);
export default UploadImage;
