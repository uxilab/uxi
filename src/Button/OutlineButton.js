import { ButtonComponent } from './ButtonComponent';
import {
  OutlineButtonBaseMixin,
} from './OutlineButtonBaseMixin';
import {
  ButtonCommonMixin,
} from './ButtonCommonMixin';


// eslint-disable-next-line react/prefer-stateless-function
class OutlineButton extends ButtonComponent {
  constructor(props) {
    super(props);
    this.ButtonCommonMixin = ButtonCommonMixin;
    this.ButtonBaseMixin = OutlineButtonBaseMixin;
  }
}

export default OutlineButton;
