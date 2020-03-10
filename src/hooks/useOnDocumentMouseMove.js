import { useEffect } from 'react';
// import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';


function useOnDocumentMouseMove(refs, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // TODO fi this, ideally we should not listen on documents
        // but on the 'input' component or dialog or whatever...
        // unless we decide to never do multiple modeal at once ??
        // Do nothing if clicking ref's element or descendent elements
        // if (!ref.current || ref.current.contains(event.target, event.currentTarget)) {
        //   return;
        // }
        console.log('useOnDocumentMouseMove listener running...');

        handler(event);
      };

      // const debounceListener = debounce(
      const debounceListener = throttle(
        listener,
        14,
        { maxWait: 64, leading: true, trailing: false }
      );

      document.addEventListener('mousemove', debounceListener);

      return () => {
        console.log('useOnDocumentMouseMove cleanup');
        debounceListener.flush();
        document.removeEventListener('mousemove', debounceListener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [...refs, handler]
  );
}

export default useOnDocumentMouseMove;
