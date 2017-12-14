import React from 'react';
import { Badge, StatusBadge } from 'uxi/Badge';

const ExampleSimple = () => (
  <div>
    <ul>
      <li>
        <Badge type="danger" />
      </li>
      <li>
        <Badge type="danger">
          qsffr
        </Badge>
      </li>
      <li>
        <br />
        <br />
        <StatusBadge type="NotAValidType" label={<div>ameogn</div>} />
      </li>
      <li>
        <StatusBadge type="success" />
      </li>
      <li>
        <StatusBadge type="error" label={<div>Ameogn</div>} />
      </li>
      <li>
        <StatusBadge type="info" label={<div>Valid</div>} />
      </li>
      <li>
        <StatusBadge labelBefore type="warning" label={<div>Access</div>} />
      </li>
      <li>
        <StatusBadge type="success" label={<div>Crawling</div>} />
      </li>
    </ul>
  </div>
);

export default ExampleSimple;
