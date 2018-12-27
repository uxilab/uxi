import { ButtonComponent } from './ButtonComponent';
import {
  FlatButtonBaseMixin,
} from './FlatButtonBaseMixin';


// eslint-disable-next-line react/prefer-stateless-function
class FlatButton extends ButtonComponent {
  constructor(props) {
    super(props);
    this.ButtonBaseMixin = FlatButtonBaseMixin;
  }
}

export default FlatButton;
