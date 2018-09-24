import styled from 'styled-components';

const TextEllipsis = styled.div.attrs({
  title: ({ children }) => {
    let title = '';
    if (children && children instanceof String) {
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
