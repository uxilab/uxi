import { ButtonComponent } from './ButtonComponent';
import {
  UnstyledButtonBaseMixin,
} from './UnstyledButtonBaseMixin';
import {
  ButtonCommonMixin,
} from './ButtonCommonMixin';


// eslint-disable-next-line react/prefer-stateless-function
export class UnstyledButton extends ButtonComponent {
  constructor(props) {
    super(props);
    this.ButtonCommonMixin = ButtonCommonMixin;
    this.ButtonBaseMixin = UnstyledButtonBaseMixin;
  }
}

export default UnstyledButton;
