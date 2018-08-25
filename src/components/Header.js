import React, { Component, Fragment } from 'react'
import style from 'styled-components'

import ollieLogo from '../img/ollie_logo.png'

export default class Header extends Component {
  render() {
    return(
      <Fragment>
        <LogoContainer>

          <Logo src={ollieLogo} alt="Ollie Logo" />

      </LogoContainer>
      </Fragment>
    )
  }
}

const LogoContainer = style.div`
  height: 100%;
  width: 100%:
  text-align: center;
`;

const Logo = style.img`
  height: 42px;
  padding: 15px 0;
  margin: 0 auto;
  width: auto;
`;
