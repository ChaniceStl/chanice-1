import React, { Component, Fragment } from 'react';
import style from 'styled-components';

import Header from '../components/Header';
import DiscountBanner from '../components/DiscountBanner';

export default class Onboarding extends Component {
  render() {
    return(
      <PageContainer>
        <Header />
        <DiscountBanner>
          <BannerText>
            50% OFF YOUR MEAL PLAN WILL BE APPLIED AT CHECKOUT
          </BannerText>
        </DiscountBanner>

        Hello From Onboarding Page!
      </PageContainer>
    )
  }
}

const PageContainer =  style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

const BannerText = style.span`
  font-size: 14px;
  letter-spacing: 1px;
  margin: auto;
  text-transform: uppercase;
  color: #fc7368;
  line-height: 18px;
`;
