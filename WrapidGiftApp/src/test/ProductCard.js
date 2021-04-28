import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({
  age,
  average_rating,
  average_rating_rounded,
  business,
  description,
  id,
  img,
  name,
  price
}) => (
  <div key={id}>
    <div>
        <img src={img} alt={name} />
      <div>
        <div>
          <h2>{name}</h2>
          <h3>{`${name}  |  ${genresData.toString().replace(/,/g, ', ')}`}</h3>
          <div>
            Rating:
            {' '}
            <strong>{average_rating}</strong>
          </div>
          <div>
            {description}
          </div>
        </div>
        <div>
          <h2>{`$${price}`}</h2>
        </div>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  average_rating: PropTypes.number,
  average_rating_rounded: PropTypes.number,
  business: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
