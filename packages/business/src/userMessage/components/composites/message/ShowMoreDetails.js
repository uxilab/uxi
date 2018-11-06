import React from 'react';
import {
  FormattedMessage,
} from 'react-intl';

const ShowMoreDetails = ({ toggle, showMore }) => (
  <div style={{ marginTop: '16px' }}>
    <a onClick={toggle}>
      {
        showMore ?
          (
            <FormattedMessage
              id="module-error-hideDetails"
              defaultMessage="Hide details"
            />
          ) :
          (
            <FormattedMessage
              id="module-error-showMoreDetails"
              defaultMessage="Show more details"
            />
          )
      }
    </a>
  </div>
);

export default ShowMoreDetails;
