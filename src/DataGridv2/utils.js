import { useState } from 'react';


export const WithState = ({ children, defaultState, ...props }) => {
  const [state, setState] = useState(defaultState);
  return children(state, setState);
};


export default null;
