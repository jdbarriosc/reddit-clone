import React from 'react';
import styled from 'styled-components';

const VerticalSpacer = styled.div`
  width: 100%;
  height: ${({ size }) => size};
  flex-shrink: 0;
`;

const HorizontalSpacer = styled.div`
  width: ${({ size }) => size};
  height: 1px;
  flex-shrink: 0;
`;

function Spacer({ horizontal, size = 'medium' }) {
  let finalSize;
  switch (size) {
    case 'xSmall':
      finalSize = '0.25rem';
      break;
    case 'small':
      finalSize = '0.625rem';
      break;
    case 'medium':
      finalSize = '0.875rem';
      break;
    case 'large':
      finalSize = '1.5rem';
      break;
    case 'xLarge':
      finalSize = '3rem';
      break;
    default:
      finalSize = '0.875rem';
  }

  if (horizontal) {
    return <HorizontalSpacer size={finalSize} />;
  }

  return <VerticalSpacer size={finalSize} />;
}

export default Spacer;
