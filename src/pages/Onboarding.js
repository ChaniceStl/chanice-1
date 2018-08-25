import React, { Component, Fragment } from 'react';
import style from 'styled-components';

import Header from '../components/Header';
import DiscountBanner from '../components/DiscountBanner';
import QuestionnaireField from '../components/QuestionnaireField';

export default class Onboarding extends Component {
  state = {
    customerName: '',
    pupsName: null,
    zipCode: null,
    email: null,
    breedStatus: null,
    breed: null,
    breed2: null,
    gender: null,
    neutured: false,
    birthdayMonth: null,
    birthdayYear: null,
    temperament: null,
    weight: null,
    bodyType: null,
    currentFoodType: null,
    primaryProtein: null,
    allergies: null
  }

  handleInputChange = (input, e) => {
    this.setState({ [input]: e.target.value })
    console.log(this.state)
  }

  render() {
    return(
      <PageContainer>
        <Header />
        <DiscountBanner>
          <BannerText>
            50% OFF YOUR MEAL PLAN WILL BE APPLIED AT CHECKOUT
          </BannerText>
        </DiscountBanner>
        <QuestionnaireField
          handleInputChange={this.handleInputChange}
          customerName={this.state.customerName}
        />
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
