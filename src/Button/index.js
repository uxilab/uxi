import Button from './Button';

import withConfirmDialog from '../Dialog/withConfirmDialog';
import ButtonWithoutRippleComp from './ButtonWithoutRipple';
import FlatButtonComp from './FlatButton';
import UnstyledButtonComp from './UnstyledButton1'; // eslint-disable-line import/no-named-as-default
import ButtonLinkComp from './ButtonLink';
// because ButtonLink one is used in several places
// and do not want to make brteaking change
// But ButtonLink is really bad in the sensse that it
// defaults to preventing default on click
// which as a consumer I hav no power on, this isn't cool
import ButtonLink2Comp from './ButtonLink2';
import OutlineButtonComp from './OutlineButton';


export const ButtonWithoutRipple = ButtonWithoutRippleComp;
export const FlatButton = FlatButtonComp;
// eslint-disable-line import/no-named-as-default
export const UnstyledButton = UnstyledButtonComp;
export const ButtonLink = ButtonLinkComp;
export const ButtonLink2 = ButtonLink2Comp;
export const OutlineButton = OutlineButtonComp;
export const ButtonWithConfirm = withConfirmDialog(Button);
export const FlatButtonWithConfirm = withConfirmDialog(FlatButton);
export const OutlineButtonWithConfirm = withConfirmDialog(OutlineButton);


export default Button;
