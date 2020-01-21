import { useEffect } from 'react';

/**
 * since we control machines, no need to polyfil (resize-observer-polyfill)
 */
const useResizeObserver = (reactRef, callback) => {
  useEffect(() => {
    const resizeObserver = new (window).ResizeObserver((entries) => {
      callback(entries[0].contentRect);
    });

    resizeObserver.observe(reactRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [callback, reactRef]);
};


export default useResizeObserver;
