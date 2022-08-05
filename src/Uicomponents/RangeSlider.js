import React, { Component } from 'react';

const active = '#0F9D58'
const inactive = '#dbdbdb'

class RangeSlider extends React.Component {
  inputRef = React.createRef()

  state = { value: 10 }

  handleChange = (min, max) => (event) => {
    const value = event.target.value
    const progress = (value / max) * 100 + '%'
    this.setState({ value: value })
    const newBackgroundStyle = `linear-gradient(90deg, ${active} 0% ${progress}%, ${inactive} ${progress}% 100%)`
    this.inputRef.current.style.background = newBackgroundStyle
  }

  render() {
    const minValue = 10 
    const maxValue = 100
    const progress = (this.state.value / maxValue) * 100 + '%'

    const styleInput = {
      background: `linear-gradient(90deg, ${active} 0% ${progress}%, ${inactive} ${progress}% 100%)`,
    }

    return (
      <div>
        <input  
          ref={this.inputRef}
          id="sliderId"
          className="inputR w-100"
          name="sliderName"
          type="range"
          min={minValue}
          max={maxValue}
          value={this.state.value}
          onChange={this.handleChange(minValue, maxValue)}
          style={styleInput}
        />
        <div className="label">
          {this.state.value}
        </div>
      </div>
    )
  }
}

export default RangeSlider;