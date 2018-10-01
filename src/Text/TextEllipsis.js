import styled from 'styled-components';

const TextEllipsis = styled.div.attrs({
  title: ({ children }) => {
    let title = '';
    if (children && typeof children === 'string') {
      title = children;
    }
    return title;
  },
})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default TextEllipsis;
