import React, { Component } from 'react';

export default class Landing extends Component {
  renderList() {
      let colorBoxes = [];
      for(let i = 0; i < 6; i++) {
        let box = <div key={i} className="retrobox" style={this.getRandomColor()}></div>
        colorBoxes.push(box);
      }
      return colorBoxes;
    }

  getRandomColor() {
    let colorRGBList = [];
    for(let i=0;i < 3; i++) {
      colorRGBList.push(Math.floor(Math.random() * 256)) 
    }
    const colorStyle = {background: "rgb("+colorRGBList.join()+")"};
    return colorStyle;
  }

  render() {
    return (
      <div>
        <h1>Retro BarCode Generator</h1>
        {this.renderList()}
      </div>
    );
  }
}
