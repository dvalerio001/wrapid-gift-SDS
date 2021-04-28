import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({
 id,
 originalTitle,
 posterPath,
}) => (
  <div key={id}>
   <div>
    <img
     style={{
      width: 240,
      height: 360
     }}
     src={posterPath}
     alt={originalTitle}
   />
 </div>
 <div>
  <div>
   <h2>{originalTitle}</h2>
  
   
  </div>
  <div justifyContent="space-between">
  
  </div>
 </div>
</div>
);
ProductCard.propTypes = {
 id: PropTypes.number,
 originalTitle: PropTypes.string,
 posterPath: PropTypes.string
};
export default ProductCard;