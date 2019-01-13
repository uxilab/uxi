import enhanceWithClickOutside from 'react-click-outside';
import DropDown from './DropDown2';

class DropDownWithClickOutside extends DropDown {
  handleClickOutside() {
    const isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;
    if (isOpen) {
      if (!this.isControlled) {
        this.setState({ isOpen: false });
      } else {
        const { onClickOutside } = this.props;
        if (onClickOutside) {
          onClickOutside();
        }
      }
    }
  }
}


export default enhanceWithClickOutside(DropDownWithClickOutside);
