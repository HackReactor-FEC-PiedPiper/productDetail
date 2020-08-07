import React from 'react';
import Images from './Images';
import Info from './Info';
import Styles from './Styles';
import AddToCart from './AddToCart';
import Overview from './Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <nav id="nav">Logo</nav>
        <div className="container">
          <div className="info"><Info /></div>
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
