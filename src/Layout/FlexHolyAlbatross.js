import styled from 'styled-components';


const FlexHolyAlbatross = styled.div`
  display: flex;
  flex-wrap: wrap;
  --margin: ${({ gap }) => gap};
  /* --modifier: calc(40rem - 100%); */
  --modifier: ${({ breakpoint }) => `calc(${breakpoint} - 100%)`};
  margin: calc(var(--margin) * -1);
  & > * {
    flex-grow: 1;
    flex-basis: calc(var(--modifier) * 999);
    margin: var(--margin);
  }
`;
FlexHolyAlbatross.defaultProps = {
  gap: '8px',
  breakpoint: '40rem',
};

export default FlexHolyAlbatross;
