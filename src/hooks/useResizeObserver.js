import { useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';


const useResizeObserver = (reactRef, callback) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      callback(entries[0].contentRect);
    });

    resizeObserver.observe(reactRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [callback, reactRef]);
};


export default useResizeObserver;
