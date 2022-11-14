import React from 'react';
import styled from 'styled-components';

const NabarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  background-color: white;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

function Navbar() {
  return (
    <NabarContainer>
      <Logo src="/logo.png" />
    </NabarContainer>
  );
}

export default Navbar;
