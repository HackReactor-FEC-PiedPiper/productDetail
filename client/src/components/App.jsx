import React from 'react';
import axios from 'axios';
import Images from './Images';
import Info from './Info';
import Styles from './Styles';
import AddToCart from './AddToCart';
import Overview from './Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: null,
      product: null,
      styles: null,
      selectedStyle: null,
      selectedSKU: null,
      SKUs: null,
      thumbImage: null,
      imageSelectedIndex: 0,
      styleArrImages: null,
      expandedView: false,
      reviews: null,
    };
    this.apiRequests = this.apiRequests.bind(this);
  }

  apiRequests(id = 5) {
    axios.get(`http://52.26.193.201:3000/products/${id}`)
      .then((res) => {
        this.setState({
          productID: id,
          product: res.data,
        });
      })
      .catch(() => console.log('error1'));

    axios.get(`http://52.26.193.201:3000/products/${id}/styles`)
      .then((res) => res.data.results)
      .then((results) => {
        let selected = null;
        for (let i = 0; i < results.length; i++) {
          if (results[i]['default?']) {
            selected = results[i];
            break;
          }
        }
        this.setState({
          styles: results,
          selectedStyle: selected,
        });
      })
      .then(() => {
        this.setState({
          SKUs: this.state.selectedStyle.skus,
          selectedSKU: Object.keys(this.state.selectedStyle.skus)[0],
          thumbImage: this.state.selectedStyle.photos[0].thumbnail_url,
          styleArrImages: this.state.selectedStyle.photos,
        });
      })
      .catch(() => console.log('error2'));

    axios.get(`http://52.26.193.201:3000/reviews/${id}/list`)
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      })
      .catch(() => console.log('error3'));
  }

  componentDidMount() {
    this.apiRequests();
  }

  render() {
    const { product, reviews } = this.state;
    return (
      <div id="app">
        <nav id="nav">Logo</nav>
        <div className="container">

          { product && reviews
            ? (
              <div className="info">
                <Info
                  product={this.state.product}
                  selectedStyle={this.state.selectedStyle}
                  sku={this.state.selectedSKU}
                  reviews={this.state.reviews}
                />
              </div>
            )
            : null}

          <div className="styles"><Styles /></div>
          <div className="images"><Images /></div>
          <div className="a2c"><AddToCart /></div>
          <div className="overview"><Overview /></div>
        </div>
      </div>
    );
  }
}

export default App;
