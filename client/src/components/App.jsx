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
      styleID: null,
      selectedSKU: 'default',
      selectedQTY: '-',
      SKUs: null,
      thumbImage: null,
      imageSelectedIndex: 0,
      styleArrImages: null,
      expandedView: false,
      reviews: null,
      cart: [],
      showSelectInstruction: false,
    };
    this.skuSelectRef = React.createRef();
    this.apiRequests = this.apiRequests.bind(this);
    this.styleChangeHandler = this.styleChangeHandler.bind(this);
    this.skuChangeHandler = this.skuChangeHandler.bind(this);
    this.qtyChangeHandler = this.qtyChangeHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  apiRequests(id = 5) {
    axios
      .get(`http://52.26.193.201:3000/products/${id}`)
      .then((res) => {
        this.setState({
          productID: id,
          product: res.data,
        });
      })
      .catch(() => console.log('error1'));

    axios
      .get(`http://52.26.193.201:3000/products/${id}/styles`)
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
          styleID: selected.style_id,
        });
      })
      .then(() => {
        this.setState({
          SKUs: this.state.selectedStyle.skus,
          thumbImage: this.state.selectedStyle.photos[0].thumbnail_url,
          styleArrImages: this.state.selectedStyle.photos,
        });
      })
      .catch(() => console.log('error2'));

    axios
      .get(`http://52.26.193.201:3000/reviews/${id}/list`)
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      })
      .catch(() => console.log('error3'));
  }

  componentDidMount() {
    this.apiRequests(1);
  }

  styleChangeHandler(id) {
    let style;
    for (let i = 0; i < this.state.styles.length; i++) {
      if (this.state.styles[i].style_id === id) {
        style = this.state.styles[i];
        break;
      }
    }
    this.setState({
      styleID: style,
      selectedStyle: style,
      SKUs: style.skus,
      selectedSKU: 'default',
      selectedQTY: '-',
      showSelectInstruction: false,
    });
  }

  skuChangeHandler(sku) {
    this.setState({
      selectedSKU: sku,
      selectedQTY: '1',
      showSelectInstruction: false,
    });
  }

  qtyChangeHandler(qty) {
    this.setState({ selectedQTY: qty });
  }

  addToCartHandler() {
    if (
      this.state.selectedQTY !== '-'
      && this.state.selectedSKU !== 'default'
    ) {
      const itemToAdd = {
        productID: this.state.productID,
        qty: this.state.selectedQTY,
        sku: this.state.selectedSKU,
      };
      this.setState(
        {
          cart: [...this.state.cart, itemToAdd],
          showSelectInstruction: false,
          selectedSKU: 'default',
          selectedQTY: '-',
        },
        () => this.skuSelectRef.current.blur(),
      );
    }
    if (this.state.selectedSKU === 'default') {
      this.setState({ showSelectInstruction: true });
      this.skuSelectRef.current.focus();
    }
  }

  render() {
    const {
      product,
      reviews,
      styles,
      selectedStyle,
      selectedSKU,
      SKUs,
      selectedQTY,
      showSelectInstruction,
    } = this.state;
    return (
      <div id="app">
        <nav id="nav">Logo</nav>
        <div className="container">
          {product && reviews && selectedStyle ? (
            <div className="info">
              <Info
                product={this.state.product}
                selectedStyle={this.state.selectedStyle}
                sku={this.state.selectedSKU}
                reviews={this.state.reviews}
              />
            </div>
          ) : null}
          {styles && selectedStyle ? (
            <div className="styles">
              <Styles
                selectedStyle={this.state.selectedStyle}
                styles={this.state.styles}
                changeStyle={this.styleChangeHandler}
              />
            </div>
          ) : null}
          {SKUs ? (
            <div className="a2c">
              <AddToCart
                selectedSKU={selectedSKU}
                SKUs={SKUs}
                changeSKU={this.skuChangeHandler}
                changeQTY={this.qtyChangeHandler}
                selectedStyle={selectedStyle}
                selectedQTY={selectedQTY}
                onAddToCartClick={this.addToCartHandler}
                skuSelectRef={this.skuSelectRef}
                showSelectInstruction={showSelectInstruction}
              />
            </div>
          ) : null}
          <div className="images">
            <Images />
          </div>
          <div className="overview">
            <Overview />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
