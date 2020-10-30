import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
       width="100%"
      effect="black-and-white"
      placeholderSrc="http://via.placeholder.com/300x150"
      wrapperClassName={image.className}
       />
    {/* <span>{image.caption}</span> */}
  </div>
);
 
export default MyImage;