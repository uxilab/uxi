import { useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import ResizeObserver from 'resize-observer-polyfill';
import throttle from 'lodash/throttle';

const useResizeObserver = (deps, callback) => {
  const [reactRef] = deps;
  let state = null;
  useEffect(() => {
    const handler = (entries) => {
      const { contentRect } = entries[0];
      if (!isEqual(state, contentRect)) {
        // console.log('useResizeObserver handler running...');
        state = contentRect;
        callback(contentRect);
      }
    };

    const debounceHandler = throttle(
      handler, 32, { maxWait: 128, leading: true, trailing: false }
    );

    const resizeObserver = new ResizeObserver(debounceHandler);

    resizeObserver.observe(reactRef.current);

    return () => {
      // console.log('useResizeObserver cleanup');
      resizeObserver.disconnect();
    };
  }, [callback, ...deps]);
};


export default useResizeObserver;
