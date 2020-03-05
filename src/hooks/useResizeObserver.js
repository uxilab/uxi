import { useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import ResizeObserver from 'resize-observer-polyfill';


const useResizeObserver = (reactRef, callback) => {
  let state = null;
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { contentRect } = entries[0];
      if (!isEqual(state, contentRect)) {
        state = contentRect;
        callback(contentRect);
      }
    });

    resizeObserver.observe(reactRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [callback, reactRef]);
};


export default useResizeObserver;
