import React from 'react';

class ClassCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.incriment = this.incriment.bind(this);
    this.discriment = this.discriment.bind(this);

  }

  incriment() {
    this.setState({ count: this.state.count + 1 })
  }

  discriment() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div className='class-count mt-20 disp-ilb'>
        <h3>Счётчик на классах</h3>
        <p className='result'>{this.state.count}</p>
        <button onClick={this.incriment}>Incriment</button>
        <button onClick={this.discriment}>Dicriment</button>
      </div>
    )
  }
}

export default ClassCounter;