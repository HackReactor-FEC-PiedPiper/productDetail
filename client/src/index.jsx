import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>
      <h1>Hello, World</h1>
    </div>
    )
  }

}

ReactDOM.render(<Test />, document.getElementById('app'));