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
// because ButtonLink one is used in several places
// and do not want to make brteaking change
// But ButtonLink is really bad in the sensse that it
// defaults to preventing default on click
// which as a consumer I hav no power on, this isn't cool
export ButtonLink2 from './ButtonLink2';
export OutlineButton from './OutlineButton';

export const ButtonWithConfirm = withConfirmDialog(Button);
export const FlatButtonWithConfirm = withConfirmDialog(FlatButton);
export const OutlineButtonWithConfirm = withConfirmDialog(OutlineButton);

export default Button;
