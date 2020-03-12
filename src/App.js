import React, {Component} from 'react';

class Ticker extends Component {
  constructor () {
    super();
    this.state = {
      count: 0,
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        count: this.state.count +1
      })
    }, 10)
  };

  shouldComponentUpdate(nextProps, nextState) {
      if(nextState.count % 300 === 0) return true;
      else return false;
  }

  render (){
    return (
      <div>
        <p>The ticker is: <span>{this.state.count}</span></p>
        <button onClick={() => this.setState({count:0})} type="button">Reset Ticker</button>
      </div>
    );
  };
};

export default Ticker;
