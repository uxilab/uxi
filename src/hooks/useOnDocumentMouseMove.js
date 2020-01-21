import { useEffect } from 'react';


function useOnDocumentMouseMove(ref, handler) {
  useEffect(
    () => {
      // console.log('useOnDocumentMouseMove effect handler running', )
      const listener = (event) => {
        // TODO fi this, ideally we should not listen on documents but on the 'input' component or dialog or whatever...
        // unless we decide to never do multiple modeal at once ??
        // Do nothing if clicking ref's element or descendent elements
        // if (!ref.current || ref.current.contains(event.target, event.currentTarget)) {
        //   return;
        // }

        handler(event);
      };

      document.addEventListener('mousemove', listener);

      return () => {
        document.removeEventListener('mousemove', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export default useOnDocumentMouseMove;
