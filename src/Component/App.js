import React from "react";

import Searchbar from "./SearchBar";
import ItemList from "./ItemList";
import ActiveItems from "./ActiveItems";

class App extends React.Component {
  state = {
    term: "",
    items: {
      0: { name: "Marina Augustine", email: "m.augustine@gmail.com" },
      1: { name: "Nick Giannopoulos", email: "n.giannopoulos@yahoo.com" },
      2: { name: "Anita Gros", email: "a.gros@live.in" },
      3: { name: "Megan Smith", email: "m.smith@gmail.com" }
    },
    activeItems: {},
    itemsDisplay: 0,
    backFlag: 0,
    selectedActiveItem: 1
  };

  onTermChange = term => {
    this.setState({ term });
  };

  onCloseClick = key => {
    const item = this.state.activeItems[key];

    this.setState({
      items: { ...this.state.items, [key]: item },
      activeItems: { ...this.state.activeItems, [key]: undefined }
    });
  };

  onItemClick = key => {
    const activeItem = this.state.items[key];
    this.setState({
      activeItems: { ...this.state.activeItems, [key]: activeItem },
      items: { ...this.state.items, [key]: undefined },
      backFlag: 1
    });
  };

  onBackEnter = e => {
    if (e.keyCode === 8 && Object.keys(this.state.activeItems).length > 0) {
      this.setState({
        backFlag: this.state.backFlag === 1 ? 2 : 2
      });

      let arr = Object.keys(this.state.activeItems);

      arr = arr.filter(index => {
        return this.state.activeItems[index] !== undefined ? index : null;
      });

      const index = arr.length - 1;

      const id = arr[index];

      if (this.state.backFlag === 2) {
        const item = this.state.activeItems[id];

        this.setState({
          items: { ...this.state.items, [id]: item },
          activeItems: { ...this.state.activeItems, [id]: undefined },
          backFlag: 1
        });
      }
    }
  };

  stop = e => {
    e.stopPropagation();
  };

  onInputClick = (value, e) => {
    this.setState({ itemsDisplay: value });
  };

  render() {
    console.log(this.state);
    return (
      <div onClick={() => this.onInputClick(0)} className="container">
        <div onClick={e => this.stop(e)} className="searchbar__container">
          <ActiveItems
            onCloseClick={this.onCloseClick}
            items={this.state.activeItems}
            flag={this.state.backFlag}
          />
          <Searchbar
            onInputClick={this.onInputClick}
            onBackEnter={this.onBackEnter}
            term={this.state.term}
            onTermChange={this.onTermChange}
          />
        </div>
        <ItemList
          term={this.state.term}
          itemsDisplay={this.state.itemsDisplay}
          onItemClick={this.onItemClick}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
