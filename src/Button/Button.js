import { ButtonComponent } from './ButtonComponent';
import { ButtonBaseMixin } from './ButtonBaseMixin';
import { ButtonCommonMixin } from './ButtonCommonMixin';


// eslint-disable-next-line react/prefer-stateless-function
class Button extends ButtonComponent {
  constructor(props) {
    super(props);
    this.ButtonCommonMixin = ButtonCommonMixin;
    this.ButtonBaseMixin = ButtonBaseMixin;
    this.buttonType = 'Button';
  }
}

export default Button;
