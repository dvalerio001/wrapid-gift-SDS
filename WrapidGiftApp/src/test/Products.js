import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from "../components/Header";
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
      age,
      average_rating,
      average_rating_rounded,
      business,
      description,
      id,
      img,
      name,
      price,
    } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <div>
            <div>
              <img alt={name} src={img} />
            </div>
            <div>
              <h2>{name}</h2>
              <br />
              <h3>{`${name}  |  ${genresData.toString().replace(/,/g, ', ')}`}</h3>
              <h3>{`Rating: ${average_rating}`}</h3>
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
    age:productData._source.age,
    average_rating: productData._source.average_rating,
    average_rating_rounded: productData._source.average_rating_rounded,
    business: productData._source.business,
    description:productData._source.description,
    id:productData._source.id,
    img:productData._source.img,
    name:productData._source.name,
    price:productData._source.price,
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
