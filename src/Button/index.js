import Button from './Button';
import FlatButton from './FlatButton';
import OutlineButton from './OutlineButton';

import withConfirmDialog from '../Dialog/withConfirmDialog';

export Button from './Button';
export ButtonWithoutRipple from './ButtonWithoutRipple';
export FlatButton from './FlatButton';
export UnstyledButton from './UnstyledButton1'; // eslint-disable-line import/no-named-as-default
// export IconButton from './IconButton'; deprecated
export ButtonLink from './ButtonLink';
export OutlineButton from './OutlineButton';

export const ButtonWithConfirm = withConfirmDialog(Button);
export const FlatButtonWithConfirm = withConfirmDialog(FlatButton);
export const OutlineButtonWithConfirm = withConfirmDialog(OutlineButton);

export default Button;
