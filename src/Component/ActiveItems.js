import React from "react";

import "./ActiveItems.css";

class ActiveItems extends React.Component {
  onCloseClick = key => {
    this.props.onCloseClick(key);
  };

  renderItem = () => {
    let itemsKeys = Object.keys(this.props.items);

    itemsKeys = itemsKeys.filter(index => {
      return this.props.items[index] !== undefined ? index : null;
    });

    const index = itemsKeys.length - 1;

    const id = itemsKeys[index];
    console.log(id);
    console.log(this.props.flag);

    return itemsKeys.map(key => {
      if (this.props.items[key]) {
        return (
          <li
            className={`active-item ${
              key === id && this.props.flag === 2 ? "active-item--active" : ""
            }`}
            key={key}
          >
            <div className="active-item__name">
              {this.props.items[key].name}
            </div>
            <img
              onClick={() => this.onCloseClick(key)}
              className="active-item__icon"
              alt="close"
              src="cancel.svg"
            />
          </li>
        );
      }
      return null;
    });
  };

  render() {
    return <ul className="active-item__container">{this.renderItem()}</ul>;
  }
}

export default ActiveItems;
