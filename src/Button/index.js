import Button from './Button';
import withConfirmDialog from '../Dialog/withConfirmDialog';

export Button from './Button';
export ButtonWithoutRipple from './ButtonWithoutRipple';
export FlatButton from './FlatButton';
export UnstyledButton from './UnstyledButton';
export IconButton from './IconButton';
export ButtonLink from './ButtonLink';

export const ButtonWithConfirm = withConfirmDialog(Button);

export default Button;
