import styled from 'styled-components';

const backgroundColor = 'rgba(253, 253, 253, .12)';

export const SelectInputEntityPoolStyleOverload = styled.div`
  position: relative;
  &:after {
    content: '';
    display: block;
    border-right: 1px solid #fff;
    position: absolute;
    top: 8px;
    bottom: 8px;
    right: 0;
  }
  border-radius: 3px 0 0 3px;
  background: ${backgroundColor};
  width: 180px;
  min-width: 180px;

  &, &:not(:hover), &:not(:focus) {
    *[data-drop-down-main] * {
      color: white !important;
    }
  }

  &, &:hover, &:focus, &:hover:focus {
    border: none;
    height: 34px;
    box-shadow: none !important; /* overwrite inline style */
    * {
      box-shadow: none !important; /* overwrite inline style */
      /* color: white !important; */
      border: none;
    }

    *[data-drop-down-main] * {
      background: transparent;
      color: #222222 !important;
    }

  }

  *[data-drop-down-main], *[data-drop-down-main] * {
    border: none !important; /* drop down main border is inline style */
    font-size: 14px;
    font-weight: 100;
    div {
      height: 34px !important;  /* overwrite inline style */;
      overflow: hidden;
      display: flex;
      align-items: center;

      & > span {
        & > * {
          width: 100%;
        }
        & > div:nth-child(2) {
          width: auto;
          height: 34px !important;  /* overwrite inline style */;
          top: 1px !important;  /* overwrite inline style */;
        }
      }
    }

  }

  *[data-drop-down-items] {
    width: 178px !important;
  }

  *[data-drop-down-items], *[data-drop-down-items] * {
    color: #323232;
    border-radius: 3px 0 0 3px !important;  /* overwrite inline style */
    min-width: 160px;
  }

  *[data-drop-down-main]:focus,
  *[data-drop-down-main]:hover,
  *[data-drop-down-main]:hover:focus {
    background: #cecece !important;
    background: rgba(253, 253, 253, .4) !important;
    * {
      fill: #ffffff;
      fill: ${({ theme: { palette } }) => palette.primary.main};
    }
  }
`;


export default {
  SelectInputEntityPoolStyleOverload,
};
