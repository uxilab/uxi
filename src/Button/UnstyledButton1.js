import { ButtonComponent } from './ButtonComponent';
import {
  UnstyledButtonBaseMixin,
} from './UnstyledButtonBaseMixin';


// eslint-disable-next-line react/prefer-stateless-function
export class UnstyledButton extends ButtonComponent {
  constructor(props) {
    super(props);
    this.ButtonCommonMixin = '';
    this.ButtonBaseMixin = UnstyledButtonBaseMixin;
  }
}

export default UnstyledButton;
