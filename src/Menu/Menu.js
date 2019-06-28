import React from 'react';
import styled from 'styled-components';
import TextEllipsis from '../Text/TextEllipsis';


const MenuWrapperUI = styled.div`
  --itemWidth: 160px;

  border: 1px solid rebeccapurple;
  padding: 32px;

  &, & * {
    box-sizing: border-box;
  }

  ul, li {
    max-width: var(--itemWidth);
  }

  a {
    width: 100%;
    padding: 8px;
    background: lightblue;
    display: flex;
    & > *:first-child { flex-grow: 999; }
  }

  a:not(:only-child) {
    &:after {
      content: '▸';
      display: block;
      width: 16px;
    }
  }
  li { position: relative;  display: flex; }

  li > ul { display: none; }

  li > ul {
    position: absolute;
    right: 0;
    transform: translateX(100%);
    transform: translate(100%, -50%);
    &:before {
      content: '';
      display: block;
      width: var(--itemWidth);
      height: 100%;
      position: absolute;
      left: calc(var(--itemWidth) * -1);
    }
  }

  li:not(:hover) {
    z-index: 100;
  }

  li:hover > ul {
    display: block;
    width: var(--itemWidth);

    & {
      z-index: 1;
      &:before {
        z-index: 0;
      }
      &:hover {
        z-index: 99;
      }
    }

  }
`;

const Menu = (/* props */) => {
  'no auto return here GDI';

  return (
    <div>
      <MenuWrapperUI>
        <ul>
          <li><a><TextEllipsis>
            otherrrrrrrrrrrrrrrrrrrrrrrrrrrr that is way too long
          </TextEllipsis></a></li>
          <li><a><TextEllipsis>reptile</TextEllipsis></a></li>
          <li><a><TextEllipsis>other</TextEllipsis></a></li>
          <li>
            <a><TextEllipsis>mamal</TextEllipsis></a>
            <ul>
              <li>
                <a><TextEllipsis>feline</TextEllipsis></a>
                <ul>
                  <li><a><TextEllipsis>cat</TextEllipsis></a></li>
                  <li><a><TextEllipsis>lynx</TextEllipsis></a></li>
                </ul>
              </li>
              <li><a>
                <TextEllipsis>Canidae</TextEllipsis>
              </a></li>
            </ul>
          </li>
          <li><a><TextEllipsis>other</TextEllipsis></a></li>
          <li><a><TextEllipsis>other</TextEllipsis></a></li>
          <li><a><TextEllipsis>other</TextEllipsis></a></li>
          <li>
            <a><TextEllipsis>mamal</TextEllipsis></a>
            <ul>
              <li>
                <a><TextEllipsis>feline</TextEllipsis></a>
                <ul>
                  <li><a><TextEllipsis>cat</TextEllipsis></a></li>
                  <li><a><TextEllipsis>lynx</TextEllipsis></a></li>
                </ul>
              </li>
              <li><a><TextEllipsis>Canidae</TextEllipsis></a></li>
              <li>
                <a><TextEllipsis>mamal</TextEllipsis></a>
                <ul>
                  <li>
                    <a><TextEllipsis>feline</TextEllipsis></a>
                    <ul>
                      <li><a><TextEllipsis>cat</TextEllipsis></a></li>
                      <li><a><TextEllipsis>lynx</TextEllipsis></a></li>
                    </ul>
                  </li>
                  <li><a><TextEllipsis>Canidae</TextEllipsis></a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a><TextEllipsis>other</TextEllipsis></a></li>
          <li>
            <a><TextEllipsis>mamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal</TextEllipsis></a>
            <ul>
              <li>
                <a><TextEllipsis>feline</TextEllipsis></a>
                <ul>
                  <li><a><TextEllipsis>cat</TextEllipsis></a></li>
                  <li><a><TextEllipsis>lynx</TextEllipsis></a></li>
                </ul>
              </li>
              <li>
                <a><TextEllipsis>Canidae</TextEllipsis></a>
                <ul>
                  <li>
                    <a><TextEllipsis>feline</TextEllipsis></a>
                    <ul>
                      <li><a><TextEllipsis>cat</TextEllipsis></a></li>
                      <li><a><TextEllipsis>lynx</TextEllipsis></a></li>
                    </ul>
                  </li>
                  <li><a><TextEllipsis>Canidae</TextEllipsis></a></li>
                </ul>
              </li>
              <li><a><TextEllipsis>other</TextEllipsis></a></li>
              <li><a><TextEllipsis>other</TextEllipsis></a></li>
              <li><a><TextEllipsis>other</TextEllipsis></a></li>
              <li><a><TextEllipsis>other</TextEllipsis></a></li>
              <li><a><TextEllipsis>other</TextEllipsis></a></li>
              <li>
                <a><TextEllipsis>Canidae</TextEllipsis></a>
                <ul>
                  <li>
                    <a><TextEllipsis>feline</TextEllipsis></a>
                    <ul>
                      <li><a><TextEllipsis>cat</TextEllipsis></a></li>
                      <li><a><TextEllipsis>lynx</TextEllipsis></a></li>
                      <li><a><TextEllipsis>other</TextEllipsis></a></li>
                      <li><a><TextEllipsis>other</TextEllipsis></a></li>
                      <li><a><TextEllipsis>other</TextEllipsis></a></li>
                      <li><a><TextEllipsis>other</TextEllipsis></a></li>
                      <li><a><TextEllipsis>other</TextEllipsis></a></li>
                    </ul>
                  </li>
                  <li><a><TextEllipsis>Canidae</TextEllipsis></a></li>
                  <li><a><TextEllipsis>other</TextEllipsis></a></li>
                  <li><a><TextEllipsis>other</TextEllipsis></a></li>
                  <li><a><TextEllipsis>other</TextEllipsis></a></li>
                  <li><a><TextEllipsis>other</TextEllipsis></a></li>
                  <li><a><TextEllipsis>other</TextEllipsis></a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </MenuWrapperUI>
    </div>
  );
};

export default Menu;
