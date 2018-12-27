import { ButtonComponent } from './ButtonComponent';
import {
  OutlineButtonBaseMixin,
} from './OutlineButtonBaseMixin';


// eslint-disable-next-line react/prefer-stateless-function
class OutlineButton extends ButtonComponent {
  constructor(props) {
    super(props);
    this.ButtonBaseMixin = OutlineButtonBaseMixin;
  }
}

export default OutlineButton;
