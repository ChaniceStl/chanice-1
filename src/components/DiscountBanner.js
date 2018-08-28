import React, { Fragment } from 'react';
import style from 'styled-components';

const DiscountBanner = props => {
  return (
    <Fragment>
      <Banner>
        {props.children}
      </Banner>
    </Fragment>
  )
}

const Banner = style.div`
  background: #ffefee;
  min-height: 45px;
  width: 100%
  border-bottom: 3px solid #ff5543;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DiscountBanner;
