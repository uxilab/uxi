import styled from 'styled-components';


const TextEllipsis = styled.div.attrs({
  title: ({ children, title }) => {
    if (title) {
      if (typeof title === 'string') {
        return title;
      }
    }
    if (children && typeof children === 'string') {
      return children;
    }
    return 'no title';
  },
})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export default TextEllipsis;
