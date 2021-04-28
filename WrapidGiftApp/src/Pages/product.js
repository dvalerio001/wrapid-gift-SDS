import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import {
 object, func, string, oneOfType, number, array,
} from 'prop-types';
import {
 Content, Footer, Header, Container,
} from '../components/Layout';
import Page from '../components/Page';
import PurchaseButton from '../components/Button/Purchase';
import { fetchProduct, addToCart } from '../modules/actions';

class Product extends React.Component {
  handleBuy = () => {
    const { product, handleAddToCart } = this.props;
    handleAddToCart(product);
  };

  render() {
    const {
      productImage,
      title,
      price,
      releaseYear,
      genresData,
      voteAverage,
      overview,
    } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <div>
            <div>
              <img alt={title} src={productImage} />
            </div>
            <div>
              <h2>{title}</h2>
              <br />
              <h3>{`${releaseYear}  |  ${genresData.toString().replace(/,/g, ', ')}`}</h3>
              <h3>{`Rating: ${voteAverage}`}</h3>
              <div>{overview}</div>
              <div>{`$${price}`}</div>
              <div>
                <PurchaseButton price={price}>
                  <Button onClick={this.handleBuy}>Purchase</Button>
                </PurchaseButton>
                <Button onClick={this.handleBuy}>ADD TO CART</Button>
              </div>
            </div>
          </div>
        </Content>
        <Footer />
      </Container>
    );
  }
}
Product.propTypes = {
  handleAddToCart: func,
  product: object,
  productImage: oneOfType([string, number]),
  title: string,
  price: oneOfType([string, number]),
  releaseYear: oneOfType([string, number]),
  genresData: oneOfType([string, array]),
  voteAverage: number,
  overview: string,
};

const mapStateToProps = (state) => {
  const productData = state.product.product;
  return {
    productImage: `https://image.tmdb.org/t/p/w500${productData._source.poster_path}`,
    title: productData._source.original_title,
    price: productData._source.price,
    releaseYear: productData._source.release_year,
    genresData: productData._source.genres_data,
    voteAverage: productData._source.vote_average,
    overview: productData._source.overview,
    product: productData,
  };
};

const mapDispatchToProps = dispatch => ({
  handleAddToCart: product => dispatch(addToCart(product)),
});

export default Page(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Product),
  async (req, { dispatch }) => {
    const product = dispatch(fetchProduct(req.query.id));
    await Promise.all([product]);
    return null;
  },
);