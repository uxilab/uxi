/**
 * TODO: Some of thos compos still use context or import the theme directly, fix it
 */
import Text from './Text';

import MarketingTextComp from './MarketingText';
import TitleComp from './Title';
import MarketingTitleComp from './MarketingTitle';
import ErrorTextComp from './ErrorText';
import TruncatedTextComp from './TruncatedText';
import TextEllipsisComp from './TextEllipsis';

export const MarketingText = MarketingTextComp;
export const Title = TitleComp;
export const MarketingTitle = MarketingTitleComp;
export const ErrorText = ErrorTextComp;
export const TruncatedText = TruncatedTextComp;

export const TextEllipsis = TextEllipsisComp;

export default Text;
