import React, { Component } from 'react';
import style from 'styled-components';

import Header from '../components/Header';
import DiscountBanner from '../components/DiscountBanner';
import QuestionnaireField from '../components/QuestionnaireField';

export default class Onboarding extends Component {
  state = {
    customerName: '',
    pupsName: '',
    zipCode: null,
    email: null,
    breedStatus: null,
    breed: '',
    breed2: '',
    gender: '',
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
    return (
      <PageContainer>
        <Header />
        <DiscountBanner>
          <BannerText>
            50% OFF YOUR MEAL PLAN WILL BE APPLIED AT CHECKOUT
          </BannerText>
        </DiscountBanner>
        <QuestionnaireField
          handleInputChange={this.handleInputChange}
          pupsName={this.state.pupsName}
          breed={this.state.breed}
          breed2={this.state.breed2}
          gender={this.state.gender}
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
