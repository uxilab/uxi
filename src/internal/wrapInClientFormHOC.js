import React from 'react';

/**
 *
 * a client forms wrap a component in form that is
 * preventd from event reloading the page
 */
const wrapInClientFormHOC = Component => props => (
  <form
    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); } }}
    /**
     * TODO: what is this for? is it used? the onSubmit is marked by react as a unrocognized attr.
     */
    onSumbit={(e) => { e.preventDefault(); e.stopPropagation(); }}
  >
    <Component {...props} />
  </form>
);

export default wrapInClientFormHOC;
