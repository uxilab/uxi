import { ButtonComponent } from './ButtonComponent';
import {
  FlatButtonBaseMixin,
} from './FlatButtonBaseMixin';
import {
  ButtonCommonMixin,
} from './ButtonCommonMixin';


// eslint-disable-next-line react/prefer-stateless-function
class FlatButton extends ButtonComponent {
  constructor(props) {
    super(props);
    this.ButtonCommonMixin = ButtonCommonMixin;
    this.ButtonBaseMixin = FlatButtonBaseMixin;
    this.buttonType = 'FlatButton';
  }
}

export default FlatButton;
