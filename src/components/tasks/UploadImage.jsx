import React, {useState} from 'react';

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
  };

  console.log("image: ",image);

  const handleUpload = () => {

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

export default UploadImage;
