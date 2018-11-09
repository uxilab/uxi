import React from 'react';
import { Badge } from 'uxi/Badge';
import { Flex } from 'uxi/Layout';

const MainInputSearchBadge = ({
  entityTypePoolIdentifier,
}) => {
  return (
    (entityTypePoolIdentifier && (
      entityTypePoolIdentifier === 'person'
        ? <Flex style={{ flexGrow: 0, flexShrink: 0, marginLeft: 'auto', position: 'absolute', right: '40px' }}>
          <Badge color="#c2c2c2" type="info">
            <Flex>people</Flex>
          </Badge>
        </Flex>
        : <Flex style={{ flexGrow: 0, flexShrink: 0, marginLeft: 'auto', position: 'absolute', right: '40px' }}>
          <Badge color="#c2c2c2" type="info">
            <Flex>organization</Flex>
          </Badge>
        </Flex>
    )) || null
  );
};

export default MainInputSearchBadge;
