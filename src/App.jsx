import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import Spacer from './components/Spacer';

const Container = styled.div`
  text-align: center;
  background-color: #dae0e6;
  min-height: 100vh;
  gap: 40px;
`;

const Content = styled.div`
  text-align: center;
  background-color: #dae0e6;
  max-width: 1200px;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <Navbar />

      <Spacer />
      <Content>
        <CreatePost />
      </Content>
    </Container>
  );
}

export default App;
