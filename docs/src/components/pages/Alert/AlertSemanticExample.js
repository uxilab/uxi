import React from 'react';
import Alert from '../../../../../src/Alert';
import { P } from '../../../../../src/Classic';

const AlertSemanticExample = () => (
  <div>
    <Alert type="error" noIcon showClose rounded>
      This is an danger Alert without icon and close btn! Daaaanger zone....
    </Alert>
    <br />
    <Alert type="danger" showClose rounded>
      This is an danger Alert with icon and close btn! Daaaanger zone....
    </Alert>
    <br />
    <Alert rounded>
      This is an default Alert with an icon!
    </Alert>
    <br />
    <Alert type="success">
      This is an success Alert with an icon!
    </Alert>
    <br />
    <Alert type="warning">
      This is an warn Alert with an icon!
    </Alert>
    <br />
    <Alert showClose>
      This is an Alert with an icon and close btn!
    </Alert>
    <br />
    <Alert noIcon showClose rounded>
      This is an Alert without icon but with a close btn!
    </Alert>
  </div>
);

export default AlertSemanticExample;
