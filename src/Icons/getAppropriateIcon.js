import * as Icons from './index';

const capitalize = x => x.charAt(0).toUpperCase() + x.slice(1);

export const getAppropriateIcon = (identifier) => {
  const cleanedIdentifer = capitalize(identifier.toLowerCase());
  return Icons[cleanedIdentifer] ? Icons[cleanedIdentifer] : Icons['Circle'];
};

export default getAppropriateIcon;

