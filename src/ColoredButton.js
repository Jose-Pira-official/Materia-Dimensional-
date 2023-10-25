import React, { Component } from 'react';

class ColoredButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  handleClick = () => {
    this.props.com()
    if (this.state.width < 18) {
      this.setState((prevState) => ({
        width: prevState.width + 2,
      }));
    } else {
      this.setState({
        width: 0,
      });
    }
  };

  render() {
    const fillerStyle = {
      width: `${this.state.width}%`,
      height: '20px',
      backgroundColor: 'blue',
      transition: 'width 0.5s',
    };

    return (
      <div>
        <button onClick={this.handleClick}>{this.props.text}</button>
        <div style={fillerStyle}></div>
      </div>
    );
  }
}

export default ColoredButton;
