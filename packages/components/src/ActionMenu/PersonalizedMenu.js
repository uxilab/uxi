import React, { Component } from 'react';
import ActionMenu from './ActionMenu';


class PeronalizationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: (props.menuDescriptors || []).filter(m => m.isPromoted).map(m => m.key),
    };
  }

  onFavoriteClick(key) {
    const hasKey = this.state.favorites.find(k => k === key);
    let newFavorites = [];

    if (hasKey) {
      newFavorites = this.state.favorites.filter((k => k !== key));
    } else {
      newFavorites = [key, ...this.state.favorites];
    }

    this.setState({
      favorites: newFavorites,
    });
  }

  getFavorites(menuDescriptors) {
    const { favorites } = this.state;

    return menuDescriptors.map((m) => {
      const hasFound = favorites.find(f => f === m.key);
      return {
        ...m,
        isPromoted: hasFound,
      };
    });
  }

  render() {
    const { menuDescriptors } = this.props;
    const menuDescriptorsWithFavorites = this.getFavorites(menuDescriptors);

    return (
      <ActionMenu
        {...this.props}
        menuDescriptors={menuDescriptorsWithFavorites}
        withPeronalization
        onFavoriteClick={this.onFavoriteClick.bind(this)}
      />
    );
  }
}


export default PeronalizationMenu;
