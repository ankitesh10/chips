import React from "react";

import './ItemList.css';

class ItemList extends React.Component {
  onItemClick = key => {
    this.props.onItemClick(key);
  };

  renderItem = () => {
    const itemsKeys = Object.keys(this.props.items);

    return itemsKeys.map(key => {
      if (this.props.items[key]) {
        return (
          <li className="item-list" onClick={() => this.onItemClick(key)} key={key}>
            <p className="item-list__name">{this.props.items[key].name}</p>
            <p>{this.props.items[key].email}</p>
          </li>
        );
      }
      return null;
    });
  };

  render() {
    return <ul style={{display: `${this.props.itemsDisplay === 0 ? 'none' : 'block'}`}} className="item-list__container">{this.renderItem()}</ul>;
  }
}

export default ItemList;
