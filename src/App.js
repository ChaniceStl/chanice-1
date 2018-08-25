import React, { Component, Fragment } from 'react';
import style from 'styled-components';

import Onboarding from './pages/Onboarding';

class App extends Component {
  render() {
    return (
      <Fragment>
        <PageContainer>
          <Onboarding />
        </PageContainer>
      </Fragment>
    );
  }
}

const PageContainer = style.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
