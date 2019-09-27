import React from "react";

import "./ItemList.css";

class ItemList extends React.Component {
  onItemClick = key => {
    this.props.onItemClick(key);
  };

  contentBlock = key => {
    return (
      <li className="item-list" onClick={() => this.onItemClick(key)} key={key}>
        <p className="item-list__name">{this.props.items[key].name}</p>
        <p>{this.props.items[key].email}</p>
      </li>
    );
  };

  renderItem = () => {
    const itemsKeys = Object.keys(this.props.items);

    if (this.props.term.length === 0) {
      return itemsKeys.map(key => {
        if (this.props.items[key]) {
          return this.contentBlock(key);
        }
        return null;
      });
    }

    if (this.props.term.length > 0) {
      return itemsKeys.map(key => {
        if (
          this.props.items[key] &&
          this.props.items[key].name
            .toLowerCase()
            .includes(this.props.term.toLowerCase())
        ) {
          return this.contentBlock(key);
        }
        return null;
      });
    }
  };

  render() {
    return (
      <ul
        style={{
          display: `${this.props.itemsDisplay === 0 ? "none" : "block"}`
        }}
        className="item-list__container"
      >
        {this.renderItem()}
      </ul>
    );
  }
}

export default ItemList;
