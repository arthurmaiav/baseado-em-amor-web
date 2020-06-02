import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import { FiPlus, FiMinus } from 'react-icons/fi'

export default class ReadMore extends Component {
  state = {
    height: 200,
  };

  toggle = () => {
    const { height } = this.state;

    this.setState({
      height: height === 200 ? 'auto' : 200,
    });
  };

  render() {
    const { height } = this.state;

    return (
      <div>
        <button onClick={this.toggle}>
          {height === 200 ? <FiPlus size={20} color="#324C22" /> : <FiMinus size={20} color="#324C22" />}
        </button>

        <AnimateHeight
          duration={500}
          height={height} // see props documentation below
        >
          <p>{this.props.description}</p>
        </AnimateHeight>
      </div>
    );
  }
}