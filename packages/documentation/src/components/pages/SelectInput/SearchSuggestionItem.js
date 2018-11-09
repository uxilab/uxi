import React from 'react';
import { TextEllipsis } from 'uxi/Text';
import { Flex } from 'uxi/Layout';
import { Badge } from 'uxi/Badge';

const SearchSuggestionItem = ({
  suggestion,
  onClick,
  label,
  badgeColor,
  badgeType,
  badgetBorderColor,
}) => {
  return (
    <Flex
      style={{ color: 'grey', width: '100%', padding:'6px', boxSizing: 'border-box' }}
      onClick={onClick}
    >
      <Flex style={{ justifyContent: 'flex-start', flexGrow: 9, flexShrink: 1, overflow: 'hidden', marginRight: '8px' }}>
        <TextEllipsis title={suggestion.Highlight}>
          <span>{suggestion.Name}</span>
          {
            suggestion.Highlight && <span>&nbsp;&nbsp;–&nbsp;&nbsp;</span>
          }
          {
            (
              suggestion.Highlight ?
                <small style={{ opacity: 0.9 }} dangerouslySetInnerHTML={{ __html: `(${suggestion.Highlight})` }} />
                : <span>&nbsp;</span>
            )
          }
        </TextEllipsis>
      </Flex>
      <Flex style={{ flexGrow: 0, flexShrink: 0, marginLeft: 'auto' }}>
        <Badge
          color={badgeColor}
          type={badgeType}
          style={{
            ...(badgetBorderColor ? { border: `1px solid ${badgetBorderColor}` } : {}),
          }}
        >
          {suggestion.label}
        </Badge>
      </Flex>
    </Flex>
  );
};

export default SearchSuggestionItem;
