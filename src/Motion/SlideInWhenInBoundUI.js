import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUpIn = keyframes`
  from {
    transform: translateY(16vh);
  }
  to {
    transform: translateY(0);
  }
`;

const SlideInWhenInBoundUI = styled.div`
  .scroll-anim-before {
    will-change: opacity, transform;
    opacity: 0;
    transform: ${({ anchor }) => {
      if (anchor === 'bottom') { return 'translateY(16vh)' }
      if (anchor === 'right') { return 'translateX(16vh)' }
      if (anchor === 'top') { return 'translateY(-16vh)' }
      if (anchor === 'left') { return 'translateX(-16vh)' }
      }
    };
    transition: transform 0.6s cubic-bezier(0.3, 0.8, 0.4, 1), opacity 0.6s cubic-bezier(0.3, 0.8, 0.4, 1);
  }

  .scroll-anim-before.animIn,
  .scroll-anim.animIn {
    will-change: opacity, transform;
    opacity: 1;
    transform: translate(0, 0);
    transition: transform 0.6s cubic-bezier(0.3, 0.8, 0.4, 1), opacity 0.6s cubic-bezier(0.3, 0.8, 0.4, 1);
  }

  .load-anim {
    -webkit-animation: fadeIn 0.6s cubic-bezier(0.3, 0.8, 0.4, 1);
    -moz-animation: fadeIn 0.6s cubic-bezier(0.3, 0.8, 0.4, 1);
    animation: fadeIn 0.6s cubic-bezier(0.3, 0.8, 0.4, 1);
  }
`
export default SlideInWhenInBoundUI;
