import React, { Fragment } from 'react';
import style from 'styled-components'

const QuestionnaireField = props => {
  return (
    <QuestionnaireFieldContainer>
      <Prompt>My name is</Prompt>
    <AnswerInput>
      <input type='text' onChange={props.handleInputChange.bind(this, 'customerName')} value={props.customerName}/>
    </AnswerInput>
    </QuestionnaireFieldContainer>
  )
}

const QuestionnaireFieldContainer = style.div`
  display:flex;
  flex-direction:row;
  padding: 10px;
  min-height: 45px;
`;

const Prompt = style.span`
  color: #ffc2c2;
  font-size: 19px;
  margin: auto 5px;
`;

const AnswerInput = style.div`
  border-bottom: 1px dashed #ff918e;
  min-width: 40px;
  min-height: 45px;
`;




export default QuestionnaireField;
